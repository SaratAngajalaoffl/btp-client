import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { add_to_posts } from '../../redux/actions/post_actions';
import { Grid } from '@material-ui/core';

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

function AddPost() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [title, setTitle] = useState('');
	const [role, setrole] = useState('');
	const [company, setcompany] = useState('');
	const [skills, setskills] = useState('');
	const [details, setdetails] = useState('');
	const [isdialogopen, setIsdialogopen] = useState(false);
	const postlength = useSelector((state) => state.posts.posts.length);

	const clear = () => {
		setTitle('');
		setrole('');
		setcompany('');
		setskills('');
		setdetails('');
	};

	const submit = () => {
		const postItem = {
			userId: postlength + 1,
			id: postlength + 1,
			title: title,
			body: details,
			role,
			company,
			skills,
		};
		dispatch(add_to_posts(postItem));
		setIsdialogopen(false);
		clear();
	};

	return (
		<React.Fragment>
			<Dialog
				open={isdialogopen}
				onClose={() => {
					setIsdialogopen(false);
				}}
				aria-labelledby='form-dialog-title'>
				<DialogTitle id='form-dialog-title'>
					Create new Discussion
				</DialogTitle>
				<DialogContent>
					<Grid container spacing={5}>
						<Grid item xs={12}>
							<TextField
								value={title}
								onChange={(e) => {
									setTitle(e.target.value);
								}}
								label='Title'
								required
								variant='outlined'
								fullWidth
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								value={details}
								onChange={(e) => {
									setdetails(e.target.value);
								}}
								label='Description'
								variant='outlined'
								required
								multiline
								fullWidth
								rows={6}
							/>
						</Grid>
					</Grid>
				</DialogContent>
				<DialogActions>
					<Button color='primary' onClick={clear}>
						Clear
					</Button>
					<Button color='primary' onClick={submit}>
						Submit
					</Button>
				</DialogActions>
			</Dialog>
			<Paper className={classes.item} elevation={3}>
				<ButtonBase
					className={classes.button}
					onClick={() => setIsdialogopen(true)}>
					Create a Discussion
					<CreateOutlinedIcon style={{ marginLeft: '10px' }} />
				</ButtonBase>
			</Paper>
		</React.Fragment>
	);
}

export default AddPost;
