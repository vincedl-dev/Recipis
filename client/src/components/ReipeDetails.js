import { Typography,Container } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getRecipeDetails } from '../store/recipe/action'
export default function RecipeDetails() {
  const recipe = useSelector(state => state.recipe.recipedetails)
  const dispatch = useDispatch()
  const {id} = useParams()

  useEffect(() => {
    dispatch(getRecipeDetails(id))
  },[])
  console.log(recipe)
  return (
    <Container>
      <Typography>{recipe.title}</Typography>
      <Typography>{recipe.username}</Typography>
      <Typography>{recipe.body}</Typography>
    </Container>
  )
}
