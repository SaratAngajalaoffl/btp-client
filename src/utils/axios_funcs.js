import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
});

const get_posts = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await instance.get('/posts');
			resolve(response.data);
		} catch (err) {
			reject(err);
		}
	});
};

const get_comments = () => {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await instance.get('/comments');
			resolve(response.data);
		} catch (err) {
			reject(err);
		}
	});
};

export { get_posts, get_comments };
