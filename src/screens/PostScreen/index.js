import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { get_all_posts } from '../../redux/actions/post_actions';
import { get_all_comments } from '../../redux/actions/comment_actions';
import ReactLoading from 'react-loading';
import styles from 'styled-components';
import { useParams } from 'react-router';

const LoadingContainer = styles.div`
	width:100%;
	height:100%;
	background-color:#ffffff;
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
`;

const useStyles = makeStyles((theme) => ({
	root: {
		width: '80%',
	},
}));

const PostScreen = () => {
	const classes = useStyles();
	let { postID } = useParams();
	const post = useSelector((state) => {
		return state.posts.posts.find((item) => {
			return item.id === parseInt(postID);
		});
	});

	if (post)
		return (
			<List className={classes.root}>
				<Post
					post={post}
					likes={Math.floor(Math.random() * 10000) + 100}
				/>
			</List>
		);
	else return null;
};

export default PostScreen;
