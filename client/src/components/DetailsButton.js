import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
export default function DetailsButton({_id}) {
    
  return (
    <IconButton  href={`/recipe/${_id}`} >
      <VisibilityIcon/>
    </IconButton>
  )
}
