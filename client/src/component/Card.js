import React from 'react'
import {Typography,
CardActionArea,
CardMedia,
CardContent,
Button,
Box, 
Card,
Avatar,
CardActions} from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles(theme=>({
    card:{
        maxWidth:"100%",
    },
    media:{
        height:240
    },
    cardActions:{
        display:"flex",
        margin:"0 10px",
        justifyContent:"space-between",

    },
    author:{
        display:"flex",

    }
}))
const CustomCard = (props) => {
    const {title, desc, image, userIcon, author, createdDate}=props;
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={image}
                title={title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                 {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {desc}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Box className={classes.author}>
                    <Avatar src = {userIcon}/>
                    <Box ml={2}>
                        <Typography variant = "subtitle2" component="p">
                            {author}
                        </Typography>
                        <Typography variant="subtitle2" component="p" color="textSecondary">
                            {createdDate}
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <BookmarkBorderIcon/>
                </Box>
            </CardActions>
        </Card>
    )
}

export default CustomCard
