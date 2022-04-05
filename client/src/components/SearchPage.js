import React, { useEffect,useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom';
//import {Puff} from 'react-loader-spinner'
import { search_recipe } from '../store/recipe/action';
import {Container,Box,Grid, Typography} from '@mui/material'
import SearchBar from './SearchBar';
import Cards from './Cards'
import Spinner from './Spinner';
export default function SearchPage() {
    const dispatch = useDispatch()
    const recipes = useSelector(state => state.recipe.searchResult)
    const apiLoading = useSelector(state => state.recipe.isApiLoading)
    const {title} = useParams();
    const [buttonSet,setButtonSet] = useState(false)
    
 
    useEffect(() => {
    
        dispatch(search_recipe(title))
    },[title])

    
  return (
    <Container> 
      <SearchBar/>
     
     <Box>
            {
                recipes.length ? 
                (
                    <Grid container spacing={2}>
                        {
                        recipes.map(recipe => 
                            
                                <Cards  recipe={recipe} key={recipe._id} buttonSetter={buttonSet}/>
                        )
                        }
                        </Grid>

                ) : (
                    
                        apiLoading ?  
                        (<Spinner /> ): (<Typography variant="h3" sx={{mt:2}}>No Recipe Founds</Typography>)
                    
                )
            }

      </Box> 

  </Container>

  )
}


