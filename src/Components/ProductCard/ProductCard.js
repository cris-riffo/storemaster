import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const useStyles = makeStyles({
    root: {
        maxWidth: 355,
    },
    media: {
        height: 300,
    },
    right:{
        borderLeft: '1px solid black',
    }
});

const ProductCard = ({ picture, alt, label, buttonLabel, onClick }) => {
    const classes = useStyles();

    return <Card className={classes.root}>
        <CardMedia className={classes.media}
            image={picture} title={alt} />
        <Grid container alignItems="center" spacing={4}>
            <Grid  item xs={7}>
                <CardContent >
                    <Typography variant="h6" component="h6">
                        {label}
                    </Typography>
                </CardContent>
            </Grid>
            <Grid item xs={5} >
                <CardActions  className={classes.right}>
                    <Button size="small" color="default" onClick={onClick} endIcon={<ArrowForwardIosIcon />}>
                        {buttonLabel}
                    </Button>
                </CardActions>
            </Grid>
        </Grid>
    </Card>
}

export default ProductCard;