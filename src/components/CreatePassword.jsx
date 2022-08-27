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
    <div>
    <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"#004cb8",color:'white',padding:"10px 15%"}}>
            <h2>Booking.com</h2>
            <div style={{display:"flex",gap:"20px"}}>
            <img style={{borderRadius:"50%"}} width="30px" height="30px" src="https://q-xx.bstatic.com/backend_static/common/flags/new/48-squared/in.png" alt="" />
            <svg width="30px" height="30px" style={{borderRadius:"50%",color:"white"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.75 9a2.25 2.25 0 1 1 3 2.122 2.25 2.25 0 0 0-1.5 2.122v1.006a.75.75 0 0 0 1.5 0v-1.006c0-.318.2-.602.5-.708A3.75 3.75 0 1 0 8.25 9a.75.75 0 1 0 1.5 0zM12 16.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path></svg>
            </div> 
    </div>
    <div style={{width:"26%",margin:"auto",fontFamily:"BlinkMacSystemFont",color:"#333",padding:"50px 20px"}}>
        <h2 style={{fontSize:"25px",fontWeight:"bold"}}>Create Password</h2>
        <p style={{marginTop:"20px"}}>Use a minimum of 10 characters, including uppercase letters, lowercase letters and numbers.</p>
        <div style={{marginTop:"30px"}}>
            <label style={{fontWeight:"bold"}} htmlFor="">Password</label><br />
            <input style={{width:"100%",height:"35px",marginTop:"4px",paddingLeft:"10px",border:"1px solid black"}} type="text" />
        </div>
        <div style={{marginTop:"20px"}}>
            <label style={{fontWeight:"bold"}} htmlFor="">Confirm Password</label><br />
            <input value={password} onChange={(e)=>setPassword(e.target.value)} style={{width:"100%",height:"35px",marginTop:"4px",paddingLeft:"10px",border:"1px solid black"}} type="text" />
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
    </div>
  )
}
