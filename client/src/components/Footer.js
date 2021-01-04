import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Box, Typography} from '@material-ui/core'
const useStyles = makeStyles(theme=>({
    footer:{
        backgroundColor:theme.palette.primary.main,
        paddingTop:theme.spacing(5),
        paddingBottom:theme.spacing(5),
        color:"white",
        display:"flex",
        justifyContent:"center"
    }
}))
const Footer = (props) => {
    const classes = useStyles()
    return (
        <Box className={classes.footer}>
            <Typography variant="p">
                &copy; Copyright 2021 Made By Bolormaa
            </Typography>
            
        </Box>
    )
}

export default Footer
