import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data, error } = await supabase.from('leagues').select();
	console.log(error);
	return {
		leagues: data ?? []
	};
}
