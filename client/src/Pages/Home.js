import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
	center: {
		textAlign: 'center',
		verticalAlign: 'middle',
		display: 'inline-block',
		width: '100%'
	},
	heroContent: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(8, 0, 6),
	},
	input: {
		display: 'none',
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
		maxWidth: 345,
	},
	cardContent: {
		flexGrow: 1,
	},
	fab: {
		margin: theme.spacing(2),
	},
	absolute: {
		margin: theme.spacing(3),
		position: 'fixed',
		bottom: '0px',
		right: '0px',
	},
	paper: {
		marginBottom: theme.spacing(3),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	button: {
		'& > *': {
			margin: theme.spacing(3),
			position: 'fixed',
			bottom: '0px',
			left: '0px',
		},
	}
}));

export default function Home() {
	const [cards, setCards] = React.useState([]);
	const classes = useStyles();
	const defatulURL = 'https://designshack.net/wp-content/uploads/placeholder-image-368x246.png';
	let timer;

	useEffect(() => {
		setCards([...cards, {
			seq: 0,
			nome: 'Teste 01',
			imagem_url: defatulURL,
		},
		{
			seq: 0,
			nome: 'Teste 02',
			imagem_url: defatulURL,
		},
		{
			seq: 0,
			nome: 'Teste 03',
			imagem_url: defatulURL,
		},
		{
			seq: 0,
			nome: 'Teste 04',
			imagem_url: defatulURL,
		}
		]);
	}, [])

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

			<Container className={classes.cardGrid} maxWidth="md">
					<Typography component="h1" variant="h5" className={classes.paper}>
						Last Assets
					</Typography>

				<Grid container spacing={4}>
					{cards.map((card, index) => (
						<Grid item key={card.id} xs={12} sm={6} md={4}>
							<Card className={classes.card}>
								<div>
									<CardMedia
										className={classes.cardMedia}
										image={card.selectedFileURL ? card.selectedFileURL : card.imagem_url}
										title={card.nome}
										id={index} />
								</div>

								<CardContent className={classes.cardContent}>
									<Grid container spacing={2}>
										<Grid item xs={12}>
										<Typography variant="h7" className={classes.title}>{card.nome}</Typography>
										</Grid>
									</Grid>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
		</div>
	);
}
