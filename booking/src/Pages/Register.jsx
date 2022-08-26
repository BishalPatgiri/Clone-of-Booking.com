import { Box, Button, Input } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

const Register = () => {
  let auth = JSON.parse(localStorage.getItem('auth')) || []
  const [email , setemail] = useState('')
  const [password , setpassword] = useState('')
  const handlelogin = () => {
    
    auth.push({email, password})
    localStorage.setItem('auth', JSON.stringify(auth))

  }
  return (
    <Box>
      <Input value={email} onChange={(e) => setemail(e.target.value)} />
      <p>jfycdut</p>
      <Input value={password} onChange={(e) => setpassword(e.target.value)} />
      <Button onClick={handlelogin}>Login</Button>
    </Box>
  )
}

export default Register