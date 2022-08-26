import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getLocalData, saveLocalData } from './utils/localStorage'

export const CreatePassword = () => {
    const [password,setPassword]=useState(""||getLocalData("password"))
    const navigate=useNavigate()

    const handlePass=()=>{
        saveLocalData("password",password)
        navigate("/")
    }

  return (
    <div style={{width:"26%",margin:"auto",fontFamily:"BlinkMacSystemFont",color:"#333",padding:"50px 20px"}}>
        <h2>Create Password</h2>
        <p style={{marginTop:"20px"}}>Use a minimum of 10 characters, including uppercase letters, lowercase letters and numbers.</p>
        <div style={{marginTop:"30px"}}>
            <label style={{fontWeight:"bold"}} htmlFor="">Password</label><br />
            <input style={{width:"100%",height:"35px",marginTop:"5px",paddingLeft:"10px"}} type="text" />
        </div>
        <div style={{marginTop:"20px"}}>
            <label style={{fontWeight:"bold"}} htmlFor="">Confirm Password</label><br />
            <input value={password} onChange={(e)=>setPassword(e.target.value)} style={{width:"100%",height:"35px",marginTop:"5px",paddingLeft:"10px"}} type="text" />
        </div>
        <button onClick={handlePass} style={{marginTop:"15px",backgroundColor:"#0071C2",border:"0",width:"100%",height:"50px",padding:"10px 0",color:"white",fontWeight:"bold",fontSize:"16px",cursor:"pointer"}}>Create Account</button>
        <div style={{textAlign:"center",marginTop:"22px",borderTop:"1px solid #B0B7B2",borderBottom:"1px solid #B0B7B2",padding:"17px 20px"}}>
            <p>By signing in or creating an account, you agree with our Terms & conditions and Privacy statement</p>
        </div>
        <div style={{textAlign:"center",marginTop:"15px"}}>
            <p>All rights reserved.</p>
            <p>Copyright (2006 - 2022) - Booking.com™</p>
        </div>
    </div>
  )
}
