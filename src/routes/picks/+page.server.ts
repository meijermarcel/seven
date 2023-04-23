import { teams } from '$db/teams';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function () {
	const data = await teams.find({}).toArray();
	return {
		teams: data
		// teams: JSON.parse(JSON.stringify(data))
	};
};
