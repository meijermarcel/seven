import { start_mongo } from '$db/mongo';

start_mongo()
	.then(() => {
		console.log('MongoDB started');
	})
	.catch((err) => {
		console.error(err);
	});
