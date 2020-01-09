import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'
import Grid from '@material-ui/core/Grid'
import {makeStyles, Paper} from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
    card: {
        maxWidth: '100%',
        boxShadow : '0 0 0 #fff',
        border : '1px solid #efefef',
        borderRadius : 0,
    },

    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}))
const IndexSkeleton = () => {
    const classes = useStyles()
    return (
        <div>
            <Grid container className={classes.root} spacing={0}>

                {Array.from({length:12}).map((value , counter = 0) => (
                    <Grid key={counter++} item xs={12} sm={6} md={3}>
                        <Card className={classes.card}>
                            <CardHeader
                                title={
                                    <Skeleton variant="text" />
                                }
                                subheader={
                                    <Skeleton variant="text" style={{ width : '50%' }} />
                                }
                            />
                            <Skeleton variant='rect' style={{ height : '200px' }}/>
                            <CardContent>
                                <Skeleton variant='text'/>
                                <Skeleton variant='text' style={{ width : '50%' }}/>
                                <Skeleton variant='text' style={{ width : '70%' }}/>
                            </CardContent>
                            <CardActions disableSpacing>
                                <Skeleton variant="circle" width={40} height={40} />
                            </CardActions>
                        </Card>
                    </Grid>
                ))}

            </Grid>
        </div>
    )
}

export default IndexSkeleton
