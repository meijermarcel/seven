export class Standings {
	members: MemberStanding[] = [];
}

export class MemberStanding {
	name = '';
	wins = 0;
	losses = 0;
	gamesBehind = 0;
	runsScored = 0;
	diff = 0;
	collapsed = true;
	teams: Team[] = [];
	gamesToday: Game[] = [];
	dailyWins = 0;
	dailyLosses = 0;

	constructor(name: string) {
		this.name = name;
	}
}

export class Team {
	name = '';
	wins = 0;
	losses = 0;
	runsScored = 0;
	diff = 0;
	img = '';
}

export class Game {
	awayTeam = new GameTeam('', '');
	homeTeam = new GameTeam('', '');
	status = '';
	showScore = true;
	outcome = '';
}

export class GameTeam {
	name = '';
	memberName = '';
	score? = 0;
	logoSrc = '';

	constructor(name: string, memberName: string, logoSrc?: string) {
		this.name = name;
		this.memberName = memberName;
		this.logoSrc = logoSrc || '';
	}
}

export class Stats {
	members: MemberStat[] = [];
}

export class MemberStat {
	name = '';
	hr = 0;
	rbi = 0;
	avg = 0;

	constructor(name: string) {
		this.name = name;
	}
}

export class OddsGame {
	id = '';
	sport_key = '';
	sport_title = '';
	commence_time = new Date();
	home_team = '';
	away_team = '';
	bookmakers: OddsBookmaker[] = [];
}

export class OddsBookmaker {
	key = '';
	title = '';
	last_update = new Date();
	markets: OddsMarket[] = [];
}

export class OddsMarket {
	key = '';
	last_update = new Date();
	outcomes: OddsOutcome[] = [];
}

export class OddsOutcome {
	name = '';
	price = 0;
	point = 0;
}

export class MLBGame {
	home_team = '';
	away_team = '';
	home_spread = 0;
	away_spread = 0;
	total = 0;
	date_time = new Date();
}
