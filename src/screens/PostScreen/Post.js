import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Comment from './Comment';
import { useDispatch, useSelector } from 'react-redux';
import { add_to_comments } from '../../redux/actions/comment_actions';

const useStyles = makeStyles((theme) => ({
	item: {
		margin: '30px',
		backgroundColor: theme.palette.background.paper,
	},
	inline: {
		display: 'inline',
	},
}));

const Post = ({ post, likes }) => {
	const classes = useStyles();

	const [commentinp, setCommentinp] = useState('');
	const comments = useSelector((state) => {
		const items = state.comments.comments.filter(
			(item) => item.postId === post.id
		);
		items.reverse();
		return items;
	});
	const dispatch = useDispatch();

	const HandleComment = () => {
		const commentitem = {
			postId: post.id,
			id: 501,
			name: 'Sarat Angajala',
			email: 'Eliseo@gardner.biz',
			body: commentinp,
		};
		dispatch(add_to_comments(commentitem));
		setCommentinp('');
	};

	return (
		<ListItem id={post.id} className={classes.item} alignItems='flex-start'>
			<ListItemAvatar>
				<Avatar
					src={`https://avatars.dicebear.com/api/human/${post.id}.svg`}
				/>
			</ListItemAvatar>
			<ListItemText
				primary={post.title}
				secondary={
					<React.Fragment>
						<Typography
							component='span'
							variant='body2'
							className={classes.inline}
							color='textPrimary'>
							{post.role ? post.role : 'Ali Connors'}
						</Typography>
						{post.company
							? ` — ${post.company}`
							: ' — Posted a day ago…'}{' '}
						<br />
						<Typography
							component='span'
							variant='body2'
							className={classes.inline}
							color='textPrimary'>
							{post.body} <br />
							<Typography
								component='span'
								variant='body2'
								className={classes.inline}
								color='textPrimary'>
								{post.skills
									? `Skills Required — ${post.skills}`
									: ''}
							</Typography>
						</Typography>{' '}
						<br />
						<IconButton
							aria-label=''
							onClick={() => console.log('Like Clicked')}>
							<ThumbUpIcon />
						</IconButton>
						{likes}
						<IconButton aria-label=''>
							<ChatBubbleOutlineOutlinedIcon />{' '}
						</IconButton>{' '}
						{comments.length}
						<br />
						<React.Fragment>
							<FormControl variant='outlined' fullWidth>
								<InputLabel htmlFor='outlined-adornment-amount'>
									Add Comment here...
								</InputLabel>
								<OutlinedInput
									value={commentinp}
									onChange={(e) =>
										setCommentinp(e.target.value)
									}
									id='outlined-adornment-amount'
									endAdornment={
										<InputAdornment position='start'>
											<Button
												onClick={(e) =>
													HandleComment(e)
												}
												variant='outlined'
												color='primary'>
												Add
											</Button>
										</InputAdornment>
									}
									labelWidth={60}
								/>
							</FormControl>
							{comments.map((comment) => (
								<Comment comment={comment} />
							))}
						</React.Fragment>
					</React.Fragment>
				}
			/>
		</ListItem>
	);
};

export default Post;
