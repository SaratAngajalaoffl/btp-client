import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Post from './Post';
import { useSelector } from 'react-redux';
import AddPost from './AddPost';

const useStyles = makeStyles(() => ({
	root: {
		width: '80%',
	},
}));

const LeftPane = ({ posts, setPosts, setdupPosts }) => {
	const classes = useStyles();
	const posts_state = useSelector((state) => state.posts);

	useEffect(() => {
		// posts_state.posts.reverse();
		setdupPosts(posts_state.posts);
	}, [posts_state]);

	return (
		<List className={classes.root}>
			<AddPost />
			{posts.map((post) => (
				<Post
					post={post}
					likes={Math.floor(Math.random() * 10000) + 100}
				/>
			))}
		</List>
	);
};

export default LeftPane;
