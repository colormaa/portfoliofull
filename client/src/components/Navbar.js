import React from 'react'
import {Box, IconButton, AppBar, Container, Typography, Toolbar, Button} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import * as Scroll from 'react-scroll';

import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles(theme=>({
    appBar:{
        backgroundColor:"#fff",
    },
    toolbar:{
      display:"flex",
      justifyContent:"space-between"
    },
    boxMenu:{
      color:"#555",
      margin:"0 20px",
      fontWeight:"bold"
    },
    menuContainer:{
      display:"flex",
    },
    boxMenuActive:{
      color:theme.palette.primary.main,
      margin:"0 20px",
      fontWeight:"bold"
    }
}))
const Navbar = (props) => {
    const classes  =useStyles()
    return (
        <div>
            <AppBar className={classes.appBar} position="fixed">
              <Container>

              
              <Toolbar contained className={classes.toolbar}>
                <Typography variant="h6" color="primary">
                  Bolormaa
                </Typography>

                <Box className={classes.menuContainer}>
                  <Box className={props.active=='home'?classes.boxMenuActive: classes.boxMenu}>
                    <Scroll.Link  to="home" spy={true} smooth={true} 
                    offset={-150} duration={500} onSetActive={()=>props.handleSetActive("home")}>
                      Home
                    </Scroll.Link>
                  </Box>
                  <Box className={props.active=='projects'?classes.boxMenuActive:classes.boxMenu}>
                    <Scroll.Link  to="projects" spy={true} smooth={true} 
                    offset={-150} duration={500} onSetActive={()=>props.handleSetActive("projects")}>
                      Projects
                    </Scroll.Link>
                  </Box>
                  <Box className={props.active=='blog'?classes.boxMenuActive:classes.boxMenu}>
                    <Scroll.Link  to="blog" spy={true} smooth={true} 
                    offset={-150} duration={500} onSetActive={()=>props.handleSetActive("blog")}>
                      Blog
                    </Scroll.Link>
                  </Box>
                  <Box className={props.active=='contact'?classes.boxMenuActive:classes.boxMenu}>
                    <Scroll.Link  to="contact" spy={true} smooth={true} 
                    offset={-150} duration={500} onSetActive={()=>props.handleSetActive("contact")}>
                      Contact
                    </Scroll.Link>
                  </Box>
                </Box>
              </Toolbar>
              </Container>
            </AppBar>
        </div>
    )
}

export default Navbar
