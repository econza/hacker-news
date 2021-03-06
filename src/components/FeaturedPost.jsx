import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { formatDate } from "../helpers/formatDate"
import {
    Typography,
    Grid,
    Card,
    CardActionArea,
    CardContent,
    Link
} from '@material-ui/core/';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
});

export const FeaturedPost = ({ title, url, id, by, time, score }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    let history = useHistory();

    return (
        <Grid item xs={12} md={12}>
            <CardActionArea component="div" onClick={() => history.push(`/news/${id}`)}>
                <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                {title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {score} points by {by} {formatDate(time)}
                            </Typography>
                            <Link href={url} variant="subtitle1" color="primary">
                                Continue reading...
                            </Link>
                        </CardContent>
                    </div>
                </Card>
            </CardActionArea>
        </Grid>
    );
}

FeaturedPost.propTypes = {
    post: PropTypes.object,
};
