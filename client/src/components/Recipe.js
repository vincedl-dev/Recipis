import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Container} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import { getAllRecipes, updataRecipe,del_Recipe,add_Recipe } from '../store/recipe/action';
import RecipeCard from './RecipeCard';
import TextField from '@mui/material/TextField';


import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



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
  const [dialog,setDialog] = useState(false)
  const [test,setTest] = useState(false)
  const [deleteId,setDeleteId] = useState('')
  const [addOpen,setAddOpen] = useState(false)



  const [addtitle,setAddtitle] = useState('')
  const [addbody,setAddbody] = useState('')
  
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
  const deleteRecipe = () => {
    dispatch(del_Recipe(deleteId))
    setDialog(false)
    
  } 
  const handleClose = () => setOpen(false);

  const handleDialogOpen = (id) => {
    setDeleteId(id)
    setDialog(true);
  };

  const handleDialogClose = () => {
    setDialog(false);
  };

  const addhandleClickOpen = () => {
    setAddOpen(true);
  };

  const addhandleClose = () => {
    setAddOpen(false);
  };

  const addnewRecipe = () => {
    console.log("working")
    console.log(addtitle,addbody)
    dispatch(add_Recipe(addtitle,addbody))
    setAddOpen(false);
  }

  useEffect(() => {
    console.log("test")
    dispatch(getAllRecipes())
    setTest(!test)
  }, [])

 

  return (
    <Container> 
    <Button onClick={addhandleClickOpen}  >Add Recipe</Button>
    <Box>
    <Grid container spacing={2}>
        {
          recipes.map(recipe => 
            <Grid item xs={3} key={recipe._id}>
                <RecipeCard  title={recipe.title} id={recipe._id} body={recipe.body} clickModal={handleOpen}  deleteDialog={handleDialogOpen}/>
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

      <Dialog open={dialog} onClose={handleDialogClose}>
        <DialogTitle> Delete Recipe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this recipe?
          </DialogContentText>
      
        </DialogContent>
        <DialogActions>
        <Button onClick={() => deleteRecipe()}>Yes</Button>
          <Button onClick={handleDialogClose}>No</Button>
          
        </DialogActions>
      </Dialog>

      <Button variant="outlined" >
        Open form dialog
      </Button>
      
      <Dialog open={addOpen} onClose={addhandleClose}>
        <DialogTitle>Add new recipe</DialogTitle>
        <DialogContent  >
        <Box component="form" >
        <TextField
            onChange = {e => setAddtitle(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="title"
            type="text"
            fullWidth
            variant="outlined"
            
          />
            <TextField
  onChange = {e => setAddbody(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="description"
            type="text"
            fullWidth
            variant="outlined"
          />

        </Box>
         
        </DialogContent>
        <DialogActions>
          <Button onClick={addnewRecipe}>Add</Button>
          <Button onClick={addhandleClose}>Close</Button>
        </DialogActions>
      </Dialog>
  </Container>
  )
}