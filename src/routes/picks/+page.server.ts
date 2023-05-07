import { games } from '$db/games';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function () {
	const data = await games.find({}).toArray();

	return {
		// games: data
		games: JSON.parse(JSON.stringify(data))
	};
};
