import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

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
	const comments = useSelector((state) => {
		return state.comments.comments.filter(
			(item) => item.postId === post.id
		);
	});
	const history = useHistory();

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
						<IconButton
							aria-label=''
							onClick={() => history.push(`/post/${post.id}`)}>
							<ChatBubbleOutlineOutlinedIcon />{' '}
						</IconButton>{' '}
						{comments.length}
					</React.Fragment>
				}
			/>
		</ListItem>
	);
};

export default Post;
