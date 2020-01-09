import React , {useState , useEffect} from 'react'
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import '../styles/style.css'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import IndexSkeleton from "./skeletons/IndexSkeleton";
import FilterBox from "./FilterBox";
import axios from 'axios'
import Refresh from '@material-ui/icons/Refresh'
import CardActions from '@material-ui/core/CardActions';
import BookmarkBorder from '@material-ui/icons/BookmarkBorder';
import ShareIcon from '@material-ui/icons/Share';
import '../styles/style.css'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: '100%',
        boxShadow : '0 0 0 #fff',
        border : '1px solid #efefef',
        borderRadius : 0,
        '&:hover' : {
            boxShadow : '0 2px 17px 0 #ccc',
        },
    },
    media: {
        height: 190,
    },
}));

const Index = () => {
    const classes = useStyles()
    const [items , setItems] = useState([]);
    const [loading , setLoading] = useState(true)
    const [failed , setFailed] = useState(false)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setItems(res.data)
                setLoading(false)
            })
            .catch(err => {
                setFailed(true)
            })
    } , [])

    if (loading)
    {
        return (
            <Container fixed className='content_margin' style={{paddingRight: 0, paddingLeft: 0}}>
                <FilterBox />
                <IndexSkeleton />
            </Container>
        )
    }
    else if(failed)
    {
        return (
            <Container fixed className='content_margin' style={{paddingRight: 0, paddingLeft: 0}}>
                <FilterBox />
                <br/>
                <center>
                    <IconButton style={{ backgroundColor : '#ff9100' , color : 'white' }} color="inherit">
                        <Refresh />
                    </IconButton>
                </center>
            </Container>
        )
    }
    else{
        return (
            <Container fixed className='content_margin' style={{paddingRight: 0, paddingLeft: 0}}>
                <FilterBox />
                <Grid container className={classes.root} spacing={0}>

                    {items.map(item => {
                        return (
                            <Grid key={item.id} item xs={6} sm={3}>
                            <Card className={classes.card}>
                                <CardHeader
                                    title={item.title.substring(0 , 21) + '...'}
                                    subheader={` دقیقه پیش ${item.id}`}
                                    className='my_font'
                                />
                                <CardMedia
                                    className={classes.media}
                                    image={item.thumbnailUrl}
                                    title={item.title}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p" className='my_font'>
                                        {item.title.substring(0 , 38) + '...'}
                                    </Typography>
                                </CardContent>
                                <CardActions disableSpacing>
                                    <IconButton aria-label="اضافه کردن به موردعلاقه ها" className='on_focus'>
                                        <BookmarkBorder />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                        )}
                    )}
                </Grid>
            </Container>
        )
    }
}

export default Index
