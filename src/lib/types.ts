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
	teams: Team[] = [];

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
