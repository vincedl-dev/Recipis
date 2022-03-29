import { Button, Container, Typography } from '@mui/material'
import React from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SendIcon from '@mui/icons-material/Send';



 function Create() {
  return (
    <Container>
        <Typography 
        variant="h2"
        color="textSecondary"
        >Create a New Note
        </Typography>
        <Button 
        onClick = {() => console.log("You Clicked Me")}
        type="submit"
         color="secondary"
         variant="contained"
         disableElevation
         startIcon={<SendIcon/>}
         >
             Submit 
        </Button>
      
        </Container>
  )
}

export default Create
