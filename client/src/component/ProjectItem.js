import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Card, CardActionArea, CardMedia, CardContent, Typography} from '@material-ui/core'
const useStyles = makeStyles(theme=>({
    container:{
        maxWidth:"100%"
    },
    media:{
        height:200
    }
}))
const ProjectItem = (props) => {
    const {project} = props;
    const classes = useStyles()
    return (
        <div onClick={props.onClick}>
        <Card className={classes.container}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={project.url}
                    title={project.name}
                />
            </CardActionArea>
        </Card>
        </div>
    )
}

export default ProjectItem
