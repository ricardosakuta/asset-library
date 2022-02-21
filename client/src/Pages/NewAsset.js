import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    dropboxTitle: {
        marginTop: '17px',
    },
    dropbox: {
        marginTop: '5px',
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
}));

export default function Empresa(props) {
    const classes = useStyles();
    const [categorias, setCategorias] = React.useState([]);
    const [subcategorias, setSubcategorias] = React.useState([]);

    useEffect(() => {
    }, [])

    return (
        <div>
            <Container component="main" maxWidth="xs">
                <Typography component="h1" variant="h5" className={classes.paper}>
                    New Asset
        		    </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="Nome"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                name="Descricao"
                                label="Descrição"
                                type="Descricao"
                                id="Descricao"
                                autoComplete="Descricao"
                                multiline
                                rows={3}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                fullWidth
                                name="Autor"
                                label="Autor"
                                type="Autor"
                                id="Autor"
                                autoComplete="Autor"
                                rows={3}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={0}>
                        <InputLabel className={classes.dropboxTitle} id="cidade_id">Categoria</InputLabel>
                        <Select
                            className={classes.dropbox}
                            variant="outlined"
                            labelId="categoria_id"
                            id="categoria_id"
                            fullWidth>
                            {categorias.map(categoria =>
                                <MenuItem key={categoria.id}
                                    value={categoria.id}>
                                    {categoria.nome}
                                </MenuItem>
                            )}
                        </Select>
                    </Grid>
                    <Grid container spacing={0}>
                        <InputLabel className={classes.dropboxTitle} id="setor_id">Subcategoria</InputLabel>
                        <Select
                            className={classes.dropbox}
                            variant="outlined"
                            labelId="subcategoria_id"
                            id="subcategoria_id"
                            fullWidth>
                            {subcategorias.map(subcategoria =>
                                <MenuItem
                                    key={subcategoria.id}
                                    value={subcategoria.id}>
                                    {subcategoria.descricao}
                                </MenuItem>
                            )}
                        </Select>
                    </Grid>

                    <div>
                        <br/>
                        <Typography variant="h7" className={classes.title}>{"Image"}</Typography>
                        <br/>
                        <input
                            type="file"
                            id={"Image"}
                            accept=".jpeg, .jpg"
                        />
                    </div>

                    <div>
                        <br/>
                        <Typography variant="h7" className={classes.title}>{"Zip File"}</Typography>
                        <br/>
                        <input
                            type="file"
                            id={"Asset"}
                            accept=".jpeg, .jpg"
                        />
                    </div>

                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Salvar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </div>
    );
}