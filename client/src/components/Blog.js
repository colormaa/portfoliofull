import React from 'react'
import {Container, Grid,Box, Typography} from '@material-ui/core';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Card from '../component/Card'
import {makeStyles} from '@material-ui/core/styles'
import {Pagination} from '@material-ui/lab'
import * as Scroll from 'react-scroll'
const useStyles = makeStyles(theme=>({
    blogsContainer:{
        
        paddingTop:theme.spacing(10),
        
    },
    blogTitle:{
        fontWeight:800,
        paddingBottom:theme.spacing(3)
    },
    pagination:{
        display:"flex",
        justifyContent:"center"
    }
}))
const bloglist = [
    {
        title:"React useContext",
        desc:"jfldkjf lasdjfdlsk jfdslk",
        image:"https://images.unsplash.com/photo-1570215171609-a54fb21cb7c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        userIcon:"https://images.unsplash.com/flagged/photo-1573740144655-bbb6e88fb18a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
        author:"crystal fairy",
        createdDate:"May 20,2020"
    },
    {
        title:"React useHooks",
        desc:"Hooks are much simpler than using state in class and easy to update and fast",
        image:"https://images.unsplash.com/photo-1591076161532-50239c0fc14c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
        userIcon:"https://images.unsplash.com/photo-1521310192545-4ac7951413f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        author:"Ofcourse facebook",
        createdDate:"Dec 20, 2018"
    },
    {
        title:"About gatsby.js",
        desc:"Has anyone used gastby.js ",
        image:"https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1943&q=80",
        userIcon:"https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        author:"Leonardo De Caprio",
        createdDate:"During the film",
    },
    {
        title:"React for Next.js",
        desc:"What is the difference between nextjs and mern stack ",
        image:"https://images.unsplash.com/photo-1589792923910-d9e81a470d11?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        userIcon:"https://images.unsplash.com/photo-1568226940395-d125946a2bb5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1260&q=80",
        author:"Next Generation",
        createdDate:"For the future"
    },
    {
        title:"React material UI",
        desc:"It is so  relaxing for developing and saving time",
        image:"https://images.unsplash.com/photo-1592854615370-b13b4d5d6848?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        userIcon:"https://images.unsplash.com/photo-1563237023-b1e970526dcb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80",
        author:"Sample Developer",
        createdDate:"Once upon a time"
    }
]
const Blog = () => {
    const classes = useStyles()
    return (
        <Scroll.Element name="blog">
        <Container maxWidth="lg" className={classes.blogsContainer}>
            <Typography variant = "h4" className={classes.blogTitle}>
                Articles
            </Typography>
            <Grid container spacing={3}>
                {bloglist.map((bitem, bid)=>{
                    return(
                        <Grid key={bid} item xs={12} sm={6} md={4}>
                            <Card title={bitem.title} desc={bitem.desc} image={bitem.image} userIcon={bitem.userIcon} author={bitem.author} createdDate={bitem.createdDate} />
                        </Grid>
                    )
                })}
            </Grid>
            <Box my={4} className={classes.pagination}>
                <Pagination count={10} size="large" />
            </Box>        
        </Container>
        </Scroll.Element>
    )
}

export default Blog
