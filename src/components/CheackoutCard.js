import React from "react";
import accounting from "accounting";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from "react-redux";
import { deleteBasketProduct } from "../thunkAction/basketProductsThunk";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        height: 'auto',
    },
    action: {
        margin: "auto",
        display: 'flex',
        alignItems: 'center',
    },
    media: {
        height: 0,
        paddingTop: "56.25%", //16:9
    },
    gridContainer: {
        alignItems: 'center',
    },
    divRating: {
        display: 'flex',
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
}));

function CheckoutCard({ product: { id, name, productType, image, price, rating, description }, dispatch }) {
    const classes = useStyles();

    const handleDeleteButton = (e) => {
        e.preventDefault();
        dispatch(deleteBasketProduct(id))
    }

    return (
        <Card className={classes.root}>
            <CardHeader variant={"h6"}
                action={
                    <Typography
                    >
                        {accounting.formatMoney(price, "$")}
                    </Typography>
                }
                classes={{ action: classes.action }}
                className={classes.action}
                title={name}
                subheader="in stock"
            ></CardHeader>
            <CardMedia
                className={classes.media}
                image={image}
                title={productType}
            ></CardMedia>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {name}
                </Typography>
            </CardContent>
            <CardActions classes={classes.CardActions}>
                <Grid container spacing={3} className={classes.gridContainer}>
                    <Grid item xs={3} sm={3} md={3} lg={3} className={classes.center}>
                        <div className={classes.divRating}>
                            {Array(rating)
                                .fill()
                                .map((_, i) => (
                                    <p key={i}>🌟</p>)
                                )}
                        </div>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6} className={classes.center}>

                    </Grid>
                    <Grid item xs={3} sm={3} md={3} lg={3} className={classes.center}>
                        <IconButton
                            onClick={(e) => handleDeleteButton(e)}
                            aria-label="delete"
                        >
                            <DeleteIcon fontSize="large"> </DeleteIcon>
                        </IconButton>
                    </Grid >
                </Grid>
            </CardActions>
        </Card>
    );
}

const mapStateToProps = (state) => ({
    loading: state.basketProductsReducer.loading,
    hasErrors: state.basketProductsReducer.hasErrors,
    redirect: state.basketProductsReducer.redirect,
});

export default connect(mapStateToProps)(CheckoutCard);
