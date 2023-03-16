import React, { useState } from "react";
import clsx from "clsx";
import accounting from "accounting";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddShopingCart from "@material-ui/icons/AddShoppingCart";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from "react-redux";
import { addBasketProduct } from "../thunkAction/basketProductsThunk";

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
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
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
    justifyContent: 'center',
  },
}));

function Product({ product, dispatch }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleAddButton = (e) => {
    e.preventDefault();
    dispatch(addBasketProduct(product));
  }

  return (
    <Card className={classes.root}>
      <CardHeader variant={"h6"}
        action={
          <Typography
          >
            {accounting.formatMoney(product.price, "$")}
          </Typography>
        }
        classes={{ action: classes.action }}
        className={classes.action}
        title={product.name}
        subheader="in stock"
      ></CardHeader>
      <>
        {product.image ? (
          <CardMedia
            className={classes.media}
            image={product.image}
            title={product.productType}
          ></CardMedia>
        ) : (

          <CircularProgress />
        )}
      </>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.name}
        </Typography>
      </CardContent>
      <CardActions classes={classes.CardActions}>
        <Grid container spacing={3} className={classes.gridContainer}>
          <Grid item xs={3} sm={3} md={3} lg={3} className={classes.center}>
            <IconButton aria-label="add to shoping cart" onClick={(e) => handleAddButton(e)}>
              <AddShopingCart></AddShopingCart>
            </IconButton>
          </Grid>
          <Grid item xs={6} sm={6} md={6} lg={6} className={classes.center}>
            <div className={classes.divRating}>
              {Array(product.rating)
                .fill()
                .map((_, i) => (
                  <p key={i}>🌟</p>)
                )}
            </div>
          </Grid>
          <Grid item xs={3} sm={3} md={3} lg={3} className={classes.center}>
            <IconButton
              aria-label="show more"
              aria-expanded={expanded}
              onClick={handleExpandClick}
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
            >
              <ExpandMoreIcon></ExpandMoreIcon>
            </IconButton>
          </Grid >
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{product.description}</Typography>
            </CardContent>
          </Collapse>
        </Grid>
      </CardActions>
    </Card>
  );
}

const mapStateToProps = (state) => ({
  loading: state.productsReducer.loading,
  hasErrors: state.productsReducer.hasErrors,
  redirect: state.productsReducer.redirect,
});

export default connect(mapStateToProps)(Product);
