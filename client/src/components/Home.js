import React from 'react'
import {Box} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import * as Scroll from 'react-scroll'
const useStyles =makeStyles(theme=>({
    hero:{
        backgroundImage:`linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), 
        url('https://images.unsplash.com/photo-1583015523011-1b26a585472e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1286&q=80')`,
        height:"500px",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        position:"relative",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color:"#fff",
        fontSize:"4rem",
        [theme.breakpoints.down("sm")]:{
            height:300,
            fontSize:"3em"
        }
    }
}))
const Home = (props) => {
    const classes = useStyles()
    return (
        <Scroll.Element name="home">
        <Box className={classes.hero}>
            <Box>
                I Love Coding
            </Box>
            
        </Box>
        </Scroll.Element>
    )
}

export default Home
