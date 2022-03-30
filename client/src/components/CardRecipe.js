import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'
import { Grid } from '@mui/material'


export default function CardRecipe() {
  return (
    <Grid item md={3}>
    <Card elevation={1}>
        <CardHeader
          action={
            <IconButton >
              <DeleteOutlined />
            </IconButton>
          }
     
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
          sample
          </Typography>
        </CardContent>
      </Card>
      </Grid>
  )
}
