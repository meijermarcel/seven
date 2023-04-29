import { json } from '@sveltejs/kit';
import type { OddsGame, MLBGame } from '$lib/types';
import { games } from '$db/games';

export async function GET() {
	const url = `https://api.the-odds-api.com/v4/sports/baseball_mlb/odds/?apiKey=86983563378772dc44e820163667557f&regions=us&markets=spreads,totals&oddsFormat=american&bookmakers=fanduel`;

	const res = await fetch(url);
	let odds = await res.json();

	// filter out games with no bookmakers
	odds = odds.filter((game: OddsGame) => game.bookmakers.length > 0);

	const dailyGames: MLBGame[] = odds.map((game: OddsGame) => {
		const home_team = game.home_team;
		const away_team = game.away_team;
		const date_time = new Date(game.commence_time);

		const fanduel = game.bookmakers.find((bookmaker) => bookmaker.key === 'fanduel');
		let home_spread,
			away_spread,
			total = 0;

		if (fanduel) {
			const spread = fanduel.markets.find((market) => market.key === 'spreads');
			if (spread) {
				const home = spread.outcomes.find((outcome) => outcome.name === home_team);
				const away = spread.outcomes.find((outcome) => outcome.name === away_team);
				if (home && away) {
					home_spread = home.point;
					away_spread = away.point;
				}
			}

			const total_market = fanduel.markets.find((market) => market.key === 'totals');
			if (total_market) {
				const total_outcome = total_market.outcomes.find((outcome) => outcome.name === 'Over');
				if (total_outcome) {
					total = total_outcome.point;
				}
			}
		}

		return {
			home_team,
			away_team,
			home_spread,
			away_spread,
			total,
			date_time
		};
	});

	// insert games into db
	await games.insertMany(dailyGames).catch((err) => {
		console.log(err);
	});

	return json(dailyGames);
}
