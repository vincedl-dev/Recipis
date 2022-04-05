import {useEffect, useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';

import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useSelector,useDispatch} from 'react-redux'
import { signUp } from '../store/user/action';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText } from '@mui/material';
import { SIGNUP,ERROR_SIGNUP } from "../store/user/types"

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

 function SignUp() {
 
 
  // const [username,setUsername] = useState('')
  // const [email,setEmail] = useState('')
  // const [password,setPassword] = useState('')

  const message = useSelector(state => state.user.message)
  const isCreated = useSelector(state => state.user.isCreated)

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [dialogMessage, setDialogMessage] = useState({message:'', title:'', type:''});
  const dataType = useSelector(state => state.user.datatype);
  
  const apiLoading = useSelector(state => state.user.apiLoading);
  const [open, setOpen] = useState(false);
  const [isLoaded, setLoaded] = useState(false);
  const [test,setTest] = useState(false)
  
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   dispatch(signUp(username,email,password))
  // };

 
  const handleClickOpen = () => {
    setOpen(true);
  };

const handleClose = () => {
    setOpen(false);

    if(dataType === SIGNUP ) {
      navigate("/login");
    }
   
};


  useEffect(() => {
 
    if (!isLoaded) {
      console.log('initial loading');
      setLoaded(!isLoaded);

    }
    if ( dataType === SIGNUP  ) {
      setDialogMessage({title:'Registration Success', message:message, type: SIGNUP});
      handleClickOpen()
    }

    if (apiLoading !== false &&  isCreated === false && message !== undefined && dataType ===  ERROR_SIGNUP) {
      setDialogMessage({title: 'Invalid', message: (message !== undefined ? message : "sample")});
    
      handleClickOpen()
    }
  },[isLoaded, apiLoading, dataType, dispatch,message])

  //   if(isCreated){
    
  //     navigate('/login')
  //   }
  //   else{
     
  //   }
  // },[])


  const formik = useFormik({
    initialValues: {
      username:'',
      email: '',
      password: '',
   
    },
    validationSchema: Yup.object({
      username: Yup
      .string()
      .max(255)
      .required(
        'Username is required'),
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
      console.log("test")
      dispatch(signUp(
        
         formik.values.username,
          formik.values.email,
          formik.values.password
         
        
        ));
    }
  });


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Typography variant="h6">
          {message}
        </Typography>
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
            Sign Up
          </Typography>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
             // onChange={(e)=>setUsername(e.target.value)}
             error={Boolean(formik.touched.username && formik.errors.username)}
             fullWidth
             helperText={formik.touched.username && formik.errors.username}
             label="Username"
             margin="normal"
             name="username"
             onBlur={formik.handleBlur}
             onChange={formik.handleChange}
             value={formik.values.username}
             variant="outlined"

              
            />
            <TextField
                //onChange={(e)=>setEmail(e.target.value)}
                error={Boolean(formik.touched.email && formik.errors.email)}
                fullWidth
                helperText={formik.touched.email && formik.errors.email}
                label="Email"
                margin="normal"
                name="email"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
                variant="outlined"
              
            />
            <TextField
              //onChange={(e)=>setPassword(e.target.value)}
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
              Sign Up
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

export default SignUp