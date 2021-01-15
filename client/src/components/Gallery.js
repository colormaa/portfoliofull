import React, {useState} from 'react'
import {Container, Box, Button, Typography, Grid, Icon} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import ProjectItem from '../component/ProjectItem'
import SendIcon from '@material-ui/icons/Send'
import DialogCustom from '../component/Dialog'
import * as Scroll from 'react-scroll'
const useStyles =makeStyles(theme=>({
    container:{
        paddingTop:theme.spacing(3),
        paddingBottom:theme.spacing(3)
    },
    galleryTitle:{
        fontWeight:800,
        paddingBottom:theme.spacing(3)
    },
    contactView:{
        backgroundColor: theme.palette.primary.main,
        height:theme.spacing(10),
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    button:{
        backgroundColor:"white",
        borderRadius:3,
        color:theme.palette.primary.main
    }
}))
const projectsList = [
    {
        url:"https://warm-citadel-27486.herokuapp.com/",
        image:"https://i.ibb.co/VLp1pv2/pro1-0.png",
        name:"Project 1",
        tag:["web", "react", "redux"],
        technologies:["react", "redux", "scss"],
        desc:"Online shopping demo site  developed in Reactjs. Allow users to select  search, login, register, order, add product in card and payments are  in test environment. Stripejs was used in checkout section."
    },
    /*
    {
        url:"https://images.unsplash.com/photo-1591076161532-50239c0fc14c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
        name:"project2",
        tag:["web", "mobile"],
        technologies:["react", "reactnative", "nodejs", "css"],
        desc:"descript lies here"
    },
    {
        url:"https://images.unsplash.com/photo-1521310192545-4ac7951413f0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        name:"Woman siting on rug",
        tag:["web", "mobile"],
        technologies:["react", "reactnative", "nodejs", "css"],
        desc:"Beautiful isn't it "
    },
    {
        url:"https://images.unsplash.com/photo-1592854615370-b13b4d5d6848?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        name:"I wish I had a scarf like this.",
        tag:["web", "mobile"],
        technologies:["react", "reactnative", "nodejs", "css"],
        desc:"Wonderful isn't it"
    },
    {
        url:"https://images.unsplash.com/photo-1569147724124-7fba29b45d01?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        name:"Grape fruits",
        tag:["web", "mobile"],
        technologies:["react", "reactnative", "nodejs", "css"],
        desc:"How good smells it"
    },
    {
        url:"https://images.unsplash.com/photo-1483181994834-aba9fd1e251a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        name:"Woman standing on escalator",
        tag:["web", "mobile"],
        technologies:["react", "reactnative", "nodejs", "css"],
        desc:"How elagant she looks"
    },
    {
        url:"https://images.unsplash.com/photo-1500353391678-d7b57979d6d2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        name:"Always start with good coffee",
        tag:["web", "mobile"],
        technologies:["react", "reactnative", "nodejs", "css"],
        desc:"Are you coffee lovers"
    },
    {
        url:"https://images.unsplash.com/photo-1522725843938-035891590561?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        name:"Making coffee",
        tag:["web", "mobile"],
        technologies:["react", "reactnative", "nodejs", "css"],
        desc:"I never knew making coffee is some kind of art."
    },
    {
        url:"https://images.unsplash.com/photo-1500928791219-72d6682831e8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        name:"Macbook and coffee",
        tag:["web", "mobile"],
        technologies:["react", "reactnative", "nodejs", "css"],
        desc:"Are you gonna have them both?"
    }
    */
]

const Gallery = (props)=>{
    const [open, setOpen] = useState(false)
    const [selectedProject, setSelectedProject]=useState('')
    const classes = useStyles()
    const onClickProject=(project)=>{
        setOpen(true)
        setSelectedProject(project)
    }
    const onCloseDialog=()=>{
        setOpen(false)
        setSelectedProject('')
    }
    return(
        <Scroll.Element name="projects">
        <Container maxWidth="lg" className={classes.container}>
            <Typography variant = "h4" className={classes.galleryTitle}>
                Projects
            </Typography>
            <Grid container>
                {projectsList.map((project, pid)=>{
                    return(
                        <Grid key={pid} item xs = {12} sm={6} md={4} lg={3} >
                            <ProjectItem 
                             onClick={()=>onClickProject(project)}
                             project={project}></ProjectItem>
                        </Grid> 
                    )
                })}
            </Grid>
            <DialogCustom open={open} item={selectedProject} onClose={()=>onCloseDialog()}/>
        </Container>
        <Box className={classes.contactView}>
            <Button variant="contained" 
                startIcon={<SendIcon/>}
                className={classes.button}>
              Contact
            </Button>
        </Box>
        </Scroll.Element>
    )
}
export default Gallery;