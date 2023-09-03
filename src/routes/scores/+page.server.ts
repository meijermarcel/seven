import axios from 'axios';
import cheerio from 'cheerio';
import type { GameScore } from '$lib/types';
import { members } from '$lib/global-var';

const url =
	'https://www.cbssports.com/college-football/scoreboard/FBS/2023/regular/1/?layout=compact';

export const load = async () => {
	return axios.get(url).then((response) => {
		// Load HTML we fetched in the previous line
		const $ = cheerio.load(response.data);
		// get all div with class score-cards
		const scoreCards = $('.score-cards');
		const games: GameScore[] = [];
		// get each of scoreCards child divs
		scoreCards.children().each((index, element) => {
			// get child with class 'live-update'
			const liveUpdate = $(element).find('.live-update');
			if (liveUpdate.length) {
				const table = liveUpdate.find('table');
				const thead = table.find('thead');
				let game;
				if (thead.length) {
					let status = 'live';
					// check if postgame
					const postgame = liveUpdate.find('.postgame');
					if (postgame.length) {
						status = postgame.text();
					}
					// live/final game
					const trs = table.find('tbody').find('tr');
					game = {
						away_team: {
							name: trs.eq(0).find('.team-name-link').text(),
							first_quarter: parseInt(trs.eq(0).find('td').eq(1).text()),
							second_quarter: parseInt(trs.eq(0).find('td').eq(2).text()),
							third_quarter: parseInt(trs.eq(0).find('td').eq(3).text()),
							fourth_quarter: parseInt(trs.eq(0).find('td').eq(4).text()),
							total: parseInt(trs.eq(0).find('.total').text()),
							member_name: members.find((member) =>
								member.teams.includes(trs.eq(0).find('.team-name-link').text())
							)?.name
						},
						home_team: {
							name: trs.eq(1).find('.team-name-link').text(),
							first_quarter: parseInt(trs.eq(1).find('td').eq(1).text()),
							second_quarter: parseInt(trs.eq(1).find('td').eq(2).text()),
							third_quarter: parseInt(trs.eq(1).find('td').eq(3).text()),
							fourth_quarter: parseInt(trs.eq(1).find('td').eq(4).text()),
							total: parseInt(trs.eq(1).find('.total').text()),
							member_name: members.find((member) =>
								member.teams.includes(trs.eq(1).find('.team-name-link').text())
							)?.name
						},
						status: status,
						time: liveUpdate.find('.ingame').find('.game-status').text(),
						channel: liveUpdate.find('.broadcaster').text()
					};
				} else {
					// scheduled games
					const trs = table.find('tbody').find('tr');
					game = {
						away_team: {
							name: trs.eq(0).find('.team-name-link').text(),
							first_quarter: 0,
							second_quarter: 0,
							third_quarter: 0,
							fourth_quarter: 0,
							total: 0,
							member_name: members.find((member) =>
								member.teams.includes(trs.eq(0).find('.team-name-link').text())
							)?.name
						},
						home_team: {
							name: trs.eq(1).find('.team-name-link').text(),
							first_quarter: 0,
							second_quarter: 0,
							third_quarter: 0,
							fourth_quarter: 0,
							total: 0,
							member_name: members.find((member) =>
								member.teams.includes(trs.eq(1).find('.team-name-link').text())
							)?.name
						},
						status: 'scheduled',
						time: '',
						channel: liveUpdate.find('.broadcaster').text()
					};
				}
				if (game.away_team.member_name || game.home_team.member_name) {
					games.push(game);
				}
			}
		});
		// group games by live, scheduled, final
		const live_games = games.filter((game) => game.status === 'live');
		const sheduled_games = games.filter((game) => game.status === 'scheduled');
		const final_games = games.filter(
			(game) => game.status !== 'live' && game.status !== 'scheduled'
		);

		console.log(live_games);
		console.log(sheduled_games);
		console.log(final_games);

		return {
			live_games,
			sheduled_games,
			final_games
		};
	});
};
