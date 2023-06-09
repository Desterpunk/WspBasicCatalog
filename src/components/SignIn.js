import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';


import { Link, useNavigate } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';

import { connect } from 'react-redux';
import { setCurrentAccount } from '../thunkAction/userThunk';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '110px',
    [theme.breakpoints.down('xs')]: {
        paddingTop: '200px',
        height: 'auto'
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignIn({ dispatch }) {
  const classes = useStyles();

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(setCurrentAccount(data))
    navigate('/');
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Formulario
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit(onSubmit)}>
          <TextField
            autoComplete="name"
            name="name"
            variant="outlined"
            required
            fullWidth
            id="name"
            label="Nombre"
            autoFocus
            {...register('name')}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Apellido"
            type="text"
            name="lastName"
            autoComplete="lastName"
            autoFocus
            {...register('telephone')}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="telephone"
            label="Telefono"
            type="number"
            name="telephone"
            autoComplete="telephone"
            autoFocus
            {...register('telephone')}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Ingresar
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  loading: state.productsReducer.loading,
  hasErrors: state.productsReducer.hasErrors,
  redirect: state.productsReducer.redirect,
});

export default connect(mapStateToProps)(SignIn);