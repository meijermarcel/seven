import { MemberStat } from '$lib/types';
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

let stats: MemberStat[] = [];
const url = 'https://www.foxsports.com/mlb/team-stats?category=batting&season=2023&seasonType=reg';

// function to reset standings
const resetStats = () => {
	stats = [
		new MemberStat('Marcel'),
		new MemberStat('Nate'),
		new MemberStat('Bob'),
		new MemberStat('Tom'),
		new MemberStat('Carter')
	];
};

export const load = async () => {
	resetStats();

	return axios.get(url).then((response) => {
		// Load HTML we fetched in the previous line
		const $ = cheerio.load(response.data);

		const listItems = $('tbody > tr');

		listItems.each((index, element) => {
			const team = $(element).find('td').eq(1).text();
			const hr = parseInt($(element).find('td').eq(9).text());
			const rbi = parseInt($(element).find('td').eq(10).text());
			const avg = parseFloat($(element).find('td').eq(15).text());
			// const record = $(element).find('td').eq(2).text();
			// const runsScored = parseInt($(element).find('td').eq(7).text());
			// const diff = parseInt($(element).find('td').eq(9).text());

			// // get img src from team
			// const teamImg = $(element).find('td').eq(1).find('img').attr('src');

			// remove leading and trailing whitespace from team name
			const teamSanitized = team.trim();
			// // remove whitepsace from record
			// const recordSanitized = record.replace(/\s/g, '');

			// const split = recordSanitized.split('-');
			// const wins = parseInt(split[0]);
			// const losses = parseInt(split[1]);

			// // console.log(teamSanitized, wins, losses);
			// find member that has this team
			const member = members.find((member) => member.teams.includes(teamSanitized));

			if (member) {
				// find member in standings list
				const memberStat = stats.find((person) => person.name === member.name);
				if (memberStat) {
					memberStat.hr += hr;
					memberStat.rbi += rbi;
					memberStat.avg += avg;
				}
			}
		});

		// divide avg by 6
		stats.forEach((member) => {
			// round to 3 decimal places
			member.avg = Math.round((member.avg / 6) * 1000) / 1000;
		});

		// sort by hr
		stats.sort((a, b) => b.hr - a.hr);

		return { members: stats };
	});
};
