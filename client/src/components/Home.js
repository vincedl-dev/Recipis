import React, { useEffect } from 'react'

import Header from './Navigation/Header'
import Recipes from './Recipes'
import UserRecipe from './UserRecipe'
export default function Home() {

  return (
       <>
        <Header />
        <UserRecipe />
       </>
  )
}
