import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';

const useStyles = makeStyles((theme) => ({
	root: {
		margin: theme.spacing(1),
		maxWidth: 600,
		textAlign: 'left',
		verticalAlign: 'middle',
		display: 'inline-block',
		width: '100%'
	},
	media: {
		paddingTop: '56.25%', // 16:9
		width: '100%',
	},
	avatar: {
		backgroundColor: red[500],
	},
	margin: {
		paddingBottom: '25px',
		textAlign: 'center'
	},
	cidade: {
		textAlign: 'center'
	},
	center: {
		textAlign: 'center',
		verticalAlign: 'middle',
		display: 'inline-block',
		width: '100%'
	},
}));

export default function Home() {
	const classes = useStyles();
	let timer;

	const handleSearch = (event) => {
		const target = event.target;

		clearTimeout(timer);

		timer = setTimeout(() => {
            console.log(target.value);
		}, 1000);
	}


	return (
		<div className={classes.center}>

			<FormControl fullWidth className={classes.margin} variant="filled">
				<InputLabel>Search</InputLabel>
				<FilledInput id="search" onChange={handleSearch} />
			</FormControl>

		</div>
	);
}
