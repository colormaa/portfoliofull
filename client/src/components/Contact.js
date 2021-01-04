import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Container, Button, Typography, Grid, TextField} from '@material-ui/core'
import * as Scroll from 'react-scroll'
const useStyles=makeStyles(theme=>({
    txtinput:{
        marginBottom:20,
        //backgroundColor:"rgba(255,255,255,0.9)",
        color:"white"
    },
    formClass:{
        display:'flex',
        flexDirection:"column",
        backgroundColor:"rgba(255,255,255,0.8)",
        borderRadius:3,
        padding: theme.spacing(10),
    },
    txtArea:{
        marginBottom:20,
        padding:15,
        backgroundColor:"transparent"
    },
    contactTitle:{
        fontWeight:800,
        paddingBottom:theme.spacing(3),
        textAlign:"center"
    },
    containerOutside:{
        backgroundColor:theme.palette.primary.main,
        padding:"80px 0",
        backgroundImage:`linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), 
        url('https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1352&q=80')`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
    },
    btn:{
        alignSelf:"flex-end"
    }
}));
const Contact = () => {
    const classes = useStyles();
    const [name, setName] = useState({
        value:"",
        helperText:"",
        error:false,
        touched:false,
        regex:/^$/g,
        required:true
    });
    const [email, setEmail] = useState({
        value:"",
        helperText:"",
        error:false,
        touched:false,
        regex:/$|.+@.+..+/,
        required:true
    });
    const [message, setMessage] = useState({
        value:"",
        helperText:"",
        error:false,
        touched:false,
        regex:/$|.+@.+..+/,
        required:true
    })
    const handleName=(event)=>{
        setName({...name, value:event.target.value})
    }
    const handleEmail=(event)=>{
        setEmail({...email, value:event.target.value})
    }
    const handleMessage=(event)=>{
        setMessage({...message, value: event.target.value})
    }
    const onSubmit=(e)=>{
        e.preventDefault()
        alert("ons ubmit")
    }
    return (
        <Scroll.Element name="contact">
        <div className={classes.containerOutside}>
        <Container maxWidth="lg">
            <Typography variant = "h4" className={classes.contactTitle}>
                Contact Me
            </Typography>
            <Grid container justify="center">
                <Grid item xs={12} sm={9}  md={8}   >
            <form onSubmit={onSubmit} className={classes.formClass}>
                <TextField
                    error ={name.error}
                    className={classes.txtinput}
                  label="Name"
                  variant="outlined"
                  color="default"
                  value={name.value}
                  helperText={name.helperText}
                  onChange={handleName}
                />
                <TextField
                    className={classes.txtinput}
                    value={email.value}
                  label="Email"
                  variant="outlined"
                  color="default"
                  onChange={handleEmail}
                />
                <TextField
                error = {message.error}
                   className={classes.txtinput}
                   value={message.value}
                 label="Message"
                 variant="outlined"
                 multiline
                 rows={8}
                 rowsMax={10}
                 color="primary"
                 onChange={handleMessage}
                />
                <Button variant="contained" className={classes.btn} color="primary" type="submit" onClick={onSubmit}>
                  Send Message
                </Button>
            </form>
            </Grid>
            </Grid>
        </Container>
        </div>
        </Scroll.Element>
    )
}

export default Contact
