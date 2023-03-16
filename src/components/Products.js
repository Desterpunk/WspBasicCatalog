import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Product from './Product';
import { getProducts } from '../thunkAction/productsThunk';
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '110px',
        padding: theme.spacing(3),
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            paddingTop: '200px',
            height: 'auto'
        },
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    gridContainer: {
        height: '100%',
        width: '1000px',
        // backgroundColor: '#271919',
    }

}));
const Products = ({ dispatch, loading, hasErrors, products }) => {

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const classes = useStyles();

    const renderProgram = () => {
        if (loading) return <p>Loading Products...</p>
        if (hasErrors) return <p>Unable to display Products.</p>;
        return (
            products &&
            products.map(product => (
                <Grid key={product.id} item xs={6} sm={6} md={4} lg={3} className={classes.center}>
                    <Product key={product.id} product={product} />
                </Grid>
            ))
        )
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3} className={classes.gridContainer}>
                {renderProgram()}
            </Grid>
        </div>
    )
}

const mapStateToProps = (state) => ({
    products: state.productsReducer.products,
    loading: state.productsReducer.loading,
    hasErrors: state.productsReducer.hasErrors,
    redirect: state.productsReducer.redirect,
});

export default connect(mapStateToProps)(Products);