import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '../assets/ecommerce.png'
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { Badge } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../environment/enviroment';
import { setCurrentAccount } from '../thunkAction/userThunk';
import { emptyBasketProduct } from '../thunkAction/basketProductsThunk';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    appBar: {
        backgroundColor: "whitesmoke",
        boxShadow: "none",
        position: 'absolute',
    },
    grow: {
        flexGrow: 1,
    },
    image: {
        height: "4rem",
    },
    link: {
        textDecoration: "none",
    }
}));
function Navbar({ products, user, dispatch }) {

    const classes = useStyles();
    const navigate = useNavigate();

    const handleAuth = () => {
        if (!user.name) {
            navigate('/signin')
        } else {
            dispatch(setCurrentAccount({
                name: "",
            }));
            dispatch(emptyBasketProduct());
            navigate('/')
        }
    }

    return (
        <div className={classes.root}>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Grid container>
                        <Grid item xs={12} sm={3} md={3} className={classes.center}>
                            <IconButton edge="start" color="inherit" aria-label="menu">
                                <Link to="/">
                                    <img src={Icon} alt='Icon' className={classes.image} />
                                </Link>
                            </IconButton>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <div></div>
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} className={classes.center}>
                            <Typography variant="h6" color='textPrimary' component="p">
                                Bienvenido {user.name ? user.name : ""}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={2} md={2} className={classes.center}>
                            <Button variant='outlined' onClick={() => handleAuth()}>
                                <strong>{user.name ? "Salir" : "Ingresar"}</strong>
                            </Button>
                        </Grid>
                        <Grid item xs={6} sm={1} md={1} className={classes.center}>
                            <Link to="/checkout">
                                <IconButton aria-label='show carts items' color='inherit'>
                                    <Badge badgeContent={products.length} color="secondary" overlap="rectangular">
                                        <ShoppingCart fontSize='large' color='primary'></ShoppingCart>
                                    </Badge>
                                </IconButton>
                            </Link>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>

        </div >
    )
}

const mapStateToProps = (state) => ({
    products: state.basketProductsReducer.products,
    user: state.userReducer.user,
    loading: state.basketProductsReducer.loading,
    hasErrors: state.basketProductsReducer.hasErrors,
    redirect: state.basketProductsReducer.redirect,
});

export default connect(mapStateToProps)(Navbar);