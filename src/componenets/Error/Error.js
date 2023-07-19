import React from 'react'
import './Error.css'

function Error({error}) {
 console.log(`<Error/> rendered! error${error}`)
 return(
    <div className='Error'>
        There was an error: {error}
        <br />
        Please refresh the page or contact support.
    </div>
 )
}

export default Error