import React, { useEffect, useState } from 'react'

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import {Container} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import { getAllRecipes,} from '../store/recipe/action';
import Cards from './Cards';
import SearchBar from './SearchBar';








export default function Recipes() {
  const recipes = useSelector(state => state.recipe.recipes)
  const [buttonSet,setButtonSet] = useState(false)
  const dispatch = useDispatch()
 

  useEffect(() => {
    
    dispatch(getAllRecipes())
  
  }, [])

 

  return (
    <Container> 
      <SearchBar/>
     <Box>
        <Grid container spacing={2}>
        {
          recipes.map(recipe => 
            
                <Cards  recipe={recipe} key={recipe._id} buttonSetter={buttonSet}/>
          )
        }
        </Grid>
      </Box> 

  </Container>
  )
}