import { MemberStanding } from '../lib/types';
import axios from 'axios';
import cheerio from 'cheerio';

const members = [
	{
		name: 'Marcel',
		teams: ['Phillies', 'Mariners', 'Rays', 'Rockies', 'Athletics', 'Nationals']
	},
	{
		name: 'Nate',
		teams: ['Yankees', 'Cardinals', 'Twins', 'Diamondbacks', 'Cubs', 'Tigers']
	},
	{
		name: 'Bob',
		teams: ['Astros', 'Guardians', 'Blue Jays', 'Rangers', 'Giants', 'Reds']
	},
	{
		name: 'Tom',
		teams: ['Mets', 'Dodgers', 'Brewers', 'Angels', 'Red Sox', 'Royals']
	},
	{
		name: 'Carter',
		teams: ['Padres', 'Braves', 'Orioles', 'White Sox', 'Pirates', 'Marlins']
	}
];

let standings: MemberStanding[] = [];

const url = 'https://www.foxsports.com/mlb/standings';
// export const load = (async ({ fetch, params }) => {
// 	return { members: standings };
// }) satisfies Standings;

// function to reset standings
const resetStandings = () => {
	standings = [
		new MemberStanding('Marcel'),
		new MemberStanding('Nate'),
		new MemberStanding('Bob'),
		new MemberStanding('Tom'),
		new MemberStanding('Carter')
	];
};

export const load = async () => {
	resetStandings();

	return axios.get(url).then((response) => {
		// Load HTML we fetched in the previous line
		const $ = cheerio.load(response.data);

		const listItems = $('tbody > tr');

		listItems.each((index, element) => {
			const team = $(element).find('td').eq(1).text();
			const record = $(element).find('td').eq(2).text();
			const runsScored = parseInt($(element).find('td').eq(7).text());
			const diff = parseInt($(element).find('td').eq(9).text());

			// get img src from team
			const teamImg = $(element).find('td').eq(1).find('img').attr('src');

			// remove leading and trailing whitespace from team name
			const teamSanitized = team.trim();
			// remove whitepsace from record
			const recordSanitized = record.replace(/\s/g, '');

			const split = recordSanitized.split('-');
			const wins = parseInt(split[0]);
			const losses = parseInt(split[1]);

			// console.log(teamSanitized, wins, losses);
			// find member that has this team
			const member = members.find((member) => member.teams.includes(teamSanitized));

			if (member) {
				// find member in standings list
				const memberStanding = standings.find((person) => person.name === member.name);
				if (memberStanding) {
					// add wins and losses to memberStanding
					memberStanding.wins += wins;
					memberStanding.losses += losses;
					memberStanding.runsScored += runsScored;
					memberStanding.diff += diff;
					// add team to memberStanding
					memberStanding.teams.push({
						name: teamSanitized,
						img: teamImg || '',
						wins,
						losses,
						runsScored: runsScored,
						diff: diff
					});
				}
			}
		});

		// sort standings by wins, total games
		standings.sort((a, b) => b.wins - a.wins || a.wins + a.losses - (b.wins + b.losses));

		// sort each member's teams by wins
		standings.forEach((member) => {
			member.teams.sort((a, b) => b.wins - a.wins);
		});

		// calculate games behind
		standings.forEach((member, index) => {
			if (index === 0) {
				member.gamesBehind = 0;
			} else {
				const leader = standings[0];
				member.gamesBehind = leader.wins - member.wins;
			}
		});

		return { members: standings };
	});
};
