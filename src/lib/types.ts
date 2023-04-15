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
}

export class Team {
	name = '';
	wins = 0;
	losses = 0;
	runsScored = 0;
	diff = 0;
	img = '';
}
