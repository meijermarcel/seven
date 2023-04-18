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
	collapsed = false;
	teams: Team[] = [];
	gamesToday: Game[] = [];

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
