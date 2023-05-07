import { membersAndRecords } from '$db/membersAndRecords';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async function () {
	const data = await membersAndRecords.find({}).toArray();

	return {
		members: JSON.parse(JSON.stringify(data))
	};
};
