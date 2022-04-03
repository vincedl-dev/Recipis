import React, { useState } from 'react'
import {Box,Card,CardContent, Typography,CardActions,Button,CardMedia} from "@mui/material"


export default function Create() {
 

  return (
    <Box width='300px'>
      <Card>
        <CardMedia
        component='img'
        height='140'
        image='https://source.unsplash.com/random'>

        </CardMedia>
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>Title</Typography>
            <Typography variant = 'body' color='text.secondary'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati mollitia totam nihil magni, voluptate sunt impedit suscipit voluptatibus ipsa? Autem corporis architecto, recusandae sapiente aut repellendus ipsam quis? Omnis, dolorem?
            </Typography>
          </CardContent>
          <CardActions>
              <Button size='small'>share</Button>
              <Button size='small'>subscribe</Button>
          </CardActions>
      </Card>
    </Box>
  )
}