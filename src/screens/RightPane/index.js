import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
	root: {
		height: '90%',
		width: '100%',
		backgroundColor: '#ffffff',
		padding: '20px',
	},
}));

function RightPane({ HandleSearch, dupposts }) {
	const classes = useStyles();
	const posts_state = useSelector((state) => state.posts);
	const [inp, setinp] = useState('');

	useEffect(() => {
		HandleSearch(inp);
	}, [inp, dupposts]);

	const HandleChange = (e) => {
		setinp(e.target.value);
	};

	return (
		<Grid container className={classes.root} spacing={5}>
			<Grid item xs={12}>
				<FormControl variant='outlined' fullWidth>
					<InputLabel htmlFor='outlined-adornment-amount'>
						Search
					</InputLabel>
					<OutlinedInput
						id='outlined-adornment-amount'
						value={inp}
						onChange={HandleChange}
						startAdornment={
							<InputAdornment position='start'>
								<IconButton>
									<SearchIcon />
								</IconButton>
							</InputAdornment>
						}
						labelWidth={60}
					/>
				</FormControl>
			</Grid>
			<Typography
				style={{ margin: '20px' }}
				variant='h4'
				color='textPrimary'>
				Popular Posts
			</Typography>
			{posts_state.posts.slice(0, 10).map((item) => (
				<Grid item xs={12}>
					<a href={`#${item.id}`}>{`${item.body.slice(0, 55)}...`}</a>
				</Grid>
			))}
		</Grid>
	);
}

export default RightPane;
