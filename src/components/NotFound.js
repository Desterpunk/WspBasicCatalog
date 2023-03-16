import React from 'react'
import { useRouteError } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        paddingTop: '80px',
        [theme.breakpoints.down('xs')]: {
            paddingTop: '160px',
            height: 'auto'
        },
    },
}));
const NotFound = () => {
    const classes = useStyles();
    const error = useRouteError();
    return (
        <div className={classes.root}>
            <h1>404</h1>
            <p>Page not found</p>
            <p>{error.statusText || error.message} </p>
            <Link to="/">
                <p>Back to the menu</p>
            </Link>
        </div>
    )
}

export default NotFound