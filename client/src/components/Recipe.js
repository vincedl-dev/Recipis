import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Container} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import { getAllRecipes, updataRecipe } from '../store/recipe/action';
import RecipeCard from './RecipeCard';
import TextField from '@mui/material/TextField';


import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function Recipe() {
  const recipes = useSelector(state => state.recipe.recipes)
  const dispatch = useDispatch()
  const [notes, setNotes] = useState([]);
  const [id,set_Id] = useState()
  const [title,setTitle] = useState()
  const [body,setBody] = useState()
  const [open, setOpen] = React.useState(false);

  
  const handleOpen = (id,title,body) =>{
    set_Id(id)
    setTitle(title)
    setBody(body)
    setOpen(true);
  }

  const updateRecipe = () => {
    dispatch(updataRecipe(id,title,body))
    
    setOpen(false)
  }
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(getAllRecipes())
  }, [])

 
console.log(recipes)
  return (
    <Container>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
        {
          recipes.map(recipe => 
            <Grid item xs={3} key={recipe._id}>
                <RecipeCard  title={recipe.title} id={recipe._id} body={recipe.body} clickModal={handleOpen}/>
           </Grid>
            )
        }
    </Grid>
    </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Updating the card
          </Typography>
        
          <TextField id="outlined-basic" label="Title" fullWidth variant="outlined"  value={title} onChange={e=> setTitle(e.target.value)}/>
          <TextField id="outlined-basic" label="Body" variant="outlined" fullWidth  value={body} onChange={e=> setBody(e.target.value)}/>
          <Button variant="contained" onClick = { () => updateRecipe()}>update</Button>
        </Box>
        </Modal>
  </Container>
  )
}