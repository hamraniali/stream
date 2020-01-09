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
import URL from "../url";
import Skeleton from '@material-ui/lab/Skeleton'

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
        axios.get(`${URL}/advertisings` , {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.data.status == 'success'){
                    setItems(res.data.data.data)
                }
                else{
                    setFailed(true)
                }
                setLoading(false)
                console.log(res.data.data.data)
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
                            <Grid key={item.id} item xs={12} md={3} sm={6}>
                            <Card className={classes.card}>
                                <CardHeader
                                    title={item.title.substring(0 , 21) + '...'}
                                    subheader={
                                        <Typography component='span' style={{ fontWeight : 700 , fontSize : '12px' , color : '#8e8e8e' }}>
                                             دقیقه پیش{item.created_at}
                                        </Typography>
                                    }
                                    className='my_font'
                                />
                                {/*<CardMedia*/}
                                {/*    className={classes.media}*/}
                                {/*    image={}*/}
                                {/*    title={item.title}*/}
                                {/*/>*/}
                                <Skeleton variant='rect' style={{ height : '200px' }}/>
                                <CardContent>
                                    { item.type == 'فروشی' ? ` ${item.price} هزار تومان ` : ` ${item.type}` }
                                </CardContent>
                                <CardActions disableSpacing>
                                    <div style={{ width : '100%' , backgroundColor : '#e8e8e8' , height : '1px' }}></div>
                                    <IconButton aria-label="نشانه گذاری" className='on_focus'>
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
