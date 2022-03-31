import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';

import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function RecipeCard({id,title,body,clickModal}){
return(
  <Card sx={{ maxWidth: 250, maxHeight:200}}>
<CardHeader action={
    <IconButton aria-label="settings">
      <MoreVertIcon />
    </IconButton>
  }
  title={title}
  
/>

<CardContent>
  <Typography variant="body2" color="text.secondary">
  {body}
  </Typography>
</CardContent>
<CardActions disableSpacing>
  <IconButton aria-label="add to favorites" onClick={() => clickModal(id,title,body)}>
    <FavoriteIcon />
  </IconButton>             
</CardActions>

</Card>
)
}