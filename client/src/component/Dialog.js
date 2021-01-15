import React from 'react'
import {Dialog, DialogTitle, 
    useMediaQuery, Grid,
    DialogContent, DialogContentText, DialogActions, Button, Card, CardActionArea, CardMedia} from '@material-ui/core'
import {useTheme} from '@material-ui/core/styles'
import {makeStyles} from '@material-ui/core/styles'
const useStyles = makeStyles(theme=>({
    media:{
        height:300
    },
    cardContainer:{
        width:"100%"
    },
    description:{
        marginTop:30
    }
}))
const DialogCustom = (props) => {
    const classes = useStyles()
    const {item}  = props;
    const theme =  useTheme()
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const handleClose=()=>{
        props.onClose()
    }
    const handleView=()=>{
        var win = window.open(item.url, '_blank');
        win.focus();
    }
    return (
        <div>
            <Dialog
              fullScreen={fullScreen}
              open={props.open}
              fullWidth={true}
              maxWidth="md"
              onClose={handleClose}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">{item.name}</DialogTitle>
              <DialogContent>
                  <Grid xs={12}>                  
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={item.image}
                                    title={item.name}
                                />
                            </CardActionArea>
                        </Card>
                </Grid>
                <DialogContentText className={classes.description}>
                    {item.desc}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                  Close
                </Button>
                <Button onClick={handleView} color="primary" autoFocus>
                  View
                </Button>
              </DialogActions>
            </Dialog>  
        </div>
    )
}

export default DialogCustom
