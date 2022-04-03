import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import {CardMedia} from  '@mui/material'

import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';


export default function RecipeCard({id,title,body,clickModal,deleteDialog}){

return(



<Card  sx={{ maxWidth: 250}}>

<CardMedia
component='img'
height='140'
image='https://source.unsplash.com/random'>

</CardMedia>
  <CardContent>
    <Typography gutterBottom variant='h5' component='div'>{title}</Typography>
    <Typography variant = 'body' color='text.secondary'>
  {body}
    </Typography>
  </CardContent>
  <CardActions  disableSpacing>
  <IconButton     aria-label="add to favorites" onClick={() => clickModal(id,title,body)}>
      <EditIcon/>
    </IconButton>
  <IconButton aria-label="delete" onClick={() => deleteDialog(id)}>
      <DeleteIcon />
    </IconButton>



  </CardActions>
</Card>

)
}