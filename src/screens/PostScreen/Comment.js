import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	item: {
		margin: '30px',
		backgroundColor: theme.palette.background.paper,
		width: '100%',
	},
	button: {
		width: '100%',
		height: '100%',
		padding: '10px',
	},
}));

function Comment({ comment }) {
	const classes = useStyles();

	return (
		<ListItem className={classes.item} alignItems='flex-start'>
			<ListItemAvatar>
				<Avatar
					src={`https://avatars.dicebear.com/api/human/${comment.id}.svg`}
				/>
			</ListItemAvatar>
			<ListItemText
				primary={comment.name}
				secondary={
					<React.Fragment>
						<Typography
							component='span'
							variant='body2'
							className={classes.inline}
							color='textPrimary'>
							{comment.email}
						</Typography>
						{' — Posted a day ago…'} <br />
						<Typography
							component='span'
							variant='body2'
							className={classes.inline}
							color='textPrimary'>
							{comment.body}
						</Typography>{' '}
					</React.Fragment>
				}
			/>
		</ListItem>
	);
}

export default Comment;
