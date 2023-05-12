import { Button, TextField } from '@mui/material'
import React from 'react'
import './style.css'
const Login = () => {
  return (
    <div>
        <div className='tb'>
            
        <TextField className='lb' id="outlined-basic" label="username" variant="outlined" /><br></br><br></br>
        <TextField className='sb' id="outlined-basic" label="password" variant="outlined" /><br></br><br></br>
        <Button className='tl' variant="contained">Submit</Button>
        </div>
    </div>
  )
}

export default Login