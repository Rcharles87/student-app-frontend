import React from 'react'
import './Loading.css'

import { CircularProgress } from '@mui/material'

function Loading() {
    console.log(`<Loading/> rendered`)
  return (
    <div className='Loading'>
        <div>
        <CircularProgress/>
        </div>
        <h4>
        Loading...
        </h4>
        </div>
  )
}

export default Loading