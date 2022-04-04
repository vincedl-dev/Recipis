import React from 'react'
import {Grid,Card,CardMedia,CardContent,Typography,IconButton,CardActions} from '@mui/material'
import { makeStyles } from '@mui/styles';
import EditModal from './modals/EditModal';
import DeleteModal from './modals/DeleteModal';
import DetailsButton from './DetailsButton';


const useStyles = makeStyles({
  text: {
  

    overflow: 'hidden',
    textOverflow: 'ellipsis',
    wordWrap: 'inherit',
    whiteSpace: 'normal',
  },
});


export default function Cards({recipe,buttonSetter}) {

  const {_id,title,body} = recipe
  console.log(buttonSetter)
  const classes = useStyles();
  return (
    <Grid item xs={3} >
          
<Card  sx={{ maxWidth: 250}}> 

<CardMedia
component='img'
height='140'
image='https://source.unsplash.com/random'>

</CardMedia>
  <CardContent>
    <Typography gutterBottom variant='h5' component='div' className={classes.text}>{title}</Typography>
    <Typography  color='text.secondary' className={classes.text}>
  {body}
    </Typography>
  </CardContent>
  <CardActions  disableSpacing>
    {
      buttonSetter && 
        <>
        <EditModal _id={_id} title={title} body={body}/>
        <DeleteModal _id={_id} />
        </>

    }
 
 <DetailsButton _id={_id} />
  </CardActions>
</Card>
      </Grid>
  )
}
