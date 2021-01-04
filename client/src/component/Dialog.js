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
                                    image={item.url}
                                    title={item.name}
                                />
                            </CardActionArea>
                        </Card>
                </Grid>
                <DialogContentText>
                    {item.desc}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                  Disagree
                </Button>
                <Button onClick={handleClose} color="primary" autoFocus>
                  Agree
                </Button>
              </DialogActions>
            </Dialog>  
        </div>
    )
}

export default DialogCustom
