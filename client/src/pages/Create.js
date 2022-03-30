import { Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SendIcon from '@mui/icons-material/Send';
import CardRecipe from '../components/CardRecipe';



 function Create() {
  return (
    <Container>
        <Grid container> 

       
        <CardRecipe />
        </Grid>
      
    </Container>
  )
}

export default Create
