import React, { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getUserRecipes } from '../store/recipe/action'
import {Container,Box ,Grid,Typography} from '@mui/material'
import Cards from './Cards'
import AddModal from './modals/AddModal'
import EditModal from './modals/EditModal'
//import {Puff} from 'react-loader-spinner'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { ADD_RECIPE, DELETE_RECIPE, UPDATE_RECIPE } from '../store/recipe/types'
import Spinner from './Spinner'

export default function UserRecipe() {
  const [open, setOpen] = useState(false);

 
  const UserRecipes = useSelector(state=> state.recipe.userRecipes)
  const message  = useSelector(state => state.recipe.message)
  const datatype = useSelector(state => state.recipe.datatype)
  const apiLoading = useSelector(state => state.recipe.isApiLoading)
  const [buttonSet,setButtonSet] = useState(true)


  const dispatch = useDispatch()

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  useEffect(()=>{
    
    if(datatype === ADD_RECIPE || datatype ===  UPDATE_RECIPE  || datatype === DELETE_RECIPE && message !== ''){
      handleClick()
      console.log("test")
    
    }
    dispatch(getUserRecipes())
  },[message,datatype])

  console.log(message,datatype)
  console.log(UserRecipes)
  const action = (
    <React.Fragment>
     
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Container sx={{mt:4}}> 
      <AddModal />

      <Box sx={{mt:6}}>

      {
                UserRecipes.length ? 
                (
                  <Grid container spacing={2}>
                  {
                    UserRecipes.map(recipe => 
                          <Cards  recipe={recipe} key={recipe._id} buttonSetter={buttonSet}/>
                    )
                  }
                  </Grid>

                ) : (
                    
                        apiLoading ?  
                        (
                          <Spinner />
                       ): (<Typography>No Recipe Found</Typography>)
                    
                )
            }


        
      
      </Box> 

  
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={message}
        action={action}
      />
    </Container>
  )
}





