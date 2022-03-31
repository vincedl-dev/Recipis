import {useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {useSelector,useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { login } from '../store/user/action';
import { Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText } from '@mui/material';
import { SIGNUP,ERROR_SIGNUP,LOGIN,ERROR_LOGIN,LOGEDIN } from "../store/user/types"

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

 

  
 function Login() {

  const message = useSelector(state => state.user.message)
  const isLogin = useSelector(state => state.user.islogin)

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [dialogMessage, setDialogMessage] = useState({message:'', title:'', type:''});
  const dataType = useSelector(state => state.user.type);
  
  const apiLoading = useSelector(state => state.user.apiLoading);
  const [open, setOpen] = useState(false);
  const [isLoaded, setLoaded] = useState(false);

  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  
    if(dataType === LOGIN ) {
      navigate("/home");
    }
   
  };

  useEffect(() => {
    
    if (!isLoaded) {
      console.log('initial loading');
      setLoaded(!isLoaded);

    }
    if ( dataType === LOGIN  ) {
      setDialogMessage({title:'Registration Success', message:message, type: LOGIN});
      handleClickOpen()
    }

    if ( message !== undefined && dataType === ERROR_LOGIN) {
      console.log("napasok")
      setDialogMessage({title: 'Invalid', message: (message !== undefined ? message : "sample")});
    
      handleClickOpen()
    }
  },[isLoaded, apiLoading, dataType, dispatch,message])

  // const [email,setEmail] = useState('')
  // const [password,setPassword] = useState('')
  // const loginToken = useSelector(state => state.user.logintoken)
  // const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  
  // const dispatch = useDispatch()
  // const navigate = useNavigate();
  

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   dispatch(login(email,password))
    
  // };
  // useEffect(() => {
  //   if(loginToken){
  //     navigate('/Home')
  //   }


  // },[loginToken , isAuthenticated])

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({

      email: Yup
        .string()
        .email(
          'Must be a valid email')
        .max(255)
        .required(
          'Email is required'),
  
      password: Yup
        .string()
        .max(255)
        .required(
          'Password is required'),
    
    }),
    onSubmit: () => {
  
      dispatch(login(
        
     
          formik.values.email,
          formik.values.password
         
        
        ));
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="email"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.email}
              variant="outlined"
              
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.password}
              variant="outlined"
            />
        
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
       
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogTitle id="alert-dialog-title">
          {dialogMessage.title !== '' ? dialogMessage.title : 'Invalid'}
          </DialogTitle>
          <DialogContentText id="alert-dialog-description">
            {dialogMessage.message !== '' ? dialogMessage.message : 'Something went wrong.'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
}

export default Login