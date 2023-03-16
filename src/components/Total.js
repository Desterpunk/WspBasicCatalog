import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import accounting from 'accounting';
import { Button, Typography } from '@material-ui/core'
import { connect } from 'react-redux';
import { setBasketProductTotal } from '../thunkAction/basketProductsThunk';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: "20vh"
    },
    button: {
        marginTop: "2rem",
        maxWidth: "",
    }
}));
const Total = ({ products, basketProducts, total, user, dispatch }) => {

    const classes = useStyles();
    const navigate = useNavigate();

    const handleAddButton = () => {

        const namesProducts = products.map(product => product.name)
        console.log(namesProducts)
        window.location = `https://api.whatsapp.com/send?phone=573213391720&text=¡Hola!, soy ${user.name} Estoy interesad@ en los siguientes productos ${namesProducts}`
    }

    useEffect(() => {
        dispatch(setBasketProductTotal());
    }, [products, dispatch]);

    return (
        <div className={classes.root}>
            <h5>Total items: {products.length}</h5>
            <h5>{accounting.formatMoney(total, "$")}</h5>
            <Typography variant="h6" color='textPrimary' component="p">
                {user.name ?
                    <Button
                        className={classes.button}
                        onClick={handleAddButton}
                        variant="contained"
                        color="secondary">
                        Contactar
                    </Button>
                    : "Favor ingrese para poder comprar"}

            </Typography>
        </div>
    )
}

const mapStateToProps = (state) => ({
    products: state.basketProductsReducer.products,
    basketProducts: state.basketProductsReducer.products,
    user: state.userReducer.user,
    total: state.basketProductsReducer.total,
    loading: state.basketProductsReducer.loading,
    hasErrors: state.basketProductsReducer.hasErrors,
    redirect: state.basketProductsReducer.redirect,
});

export default connect(mapStateToProps)(Total);