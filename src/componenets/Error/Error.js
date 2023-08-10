import React from 'react'
import './Error.css'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';



function Error({error}) {
 console.log(`<Error/> rendered! error${error}`)
 return(
    <div className='Error'>
        <div>
            <ErrorOutlineIcon fontSize='large' color='error'/>
        </div>
        There was an error: {error}
        <br />
        Please refresh the page or contact support.
    </div>
 )
}

export default Error