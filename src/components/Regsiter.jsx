import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getLocalData, saveLocalData } from './utils/localStorage'

export const Regsiter = () => {
    const [email,setEmail]=useState(""||getLocalData("email"))
    const navigate=useNavigate()

    const handleLogin=()=>{
        saveLocalData("email",email)
        navigate("/createPass")
    }
    
  return (
    <div style={{fontFamily:"BlinkMacSystemFont",color:"#333"}}>
        <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"#004cb8",color:'white',padding:"10px 15%"}}>
            <h2>Booking.com</h2>
            <div style={{display:"flex",gap:"20px"}}>
            <img style={{borderRadius:"50%"}} width="30px" height="30px" src="https://q-xx.bstatic.com/backend_static/common/flags/new/48-squared/in.png" alt="" />
            <svg width="30px" height="30px" style={{borderRadius:"50%",color:"white"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.75 9a2.25 2.25 0 1 1 3 2.122 2.25 2.25 0 0 0-1.5 2.122v1.006a.75.75 0 0 0 1.5 0v-1.006c0-.318.2-.602.5-.708A3.75 3.75 0 1 0 8.25 9a.75.75 0 1 0 1.5 0zM12 16.5a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path></svg>
            </div> 
        </div>
        <div style={{width:"24%",margin:"auto",marginTop:"70px"}}>
            <h2>Sign in or create an account</h2>
            <div style={{marginTop:"30px"}}>
                <label style={{fontWeight:"bold"}} htmlFor="">Email Address</label><br></br>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} style={{marginTop:"6px",height:"36px",padding:"4px 8px",width:"100%",border:"1px solid #ABAFB2"}} type="email" />
            </div>
            <button onClick={handleLogin} style={{cursor:"pointer",marginTop:"15px",backgroundColor:"#0071C2",border:"0",width:"100%",height:"50px",padding:"10px 0",color:"white",fontWeight:"bold",fontSize:"16px"}}>Continue with Email</button>
            <div style={{display:"flex",gap:"5px",justifyContent:"center",marginTop:"15px"}}>
            <p>-----------</p>
            <p>or use one of the option</p>
            <p>-----------</p>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",marginTop:"30px",padding:"0 22%"}}>
                <div style={{border:"1px solid #B0B7B2",padding:"20px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true" focusable="false" role="img"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"></path></svg>
                </div>
                <div style={{border:"1px solid #B0B7B2",padding:"20px"}}>
                <svg viewBox="0 0 262 262" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" aria-hidden="true" focusable="false" width="24" height="24" role="img"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></svg>
                </div>
                <div style={{border:"1px solid #B0B7B2",padding:"20px"}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="24" height="24" role="img"><path d="M14.25 15.75v4.768a1.982 1.982 0 0 1-1.982 1.982H5.732a1.982 1.982 0 0 1-1.983-1.981V4.983A1.985 1.985 0 0 1 5.733 3H7.5a.75.75 0 0 0 0-1.5H5.733A3.483 3.483 0 0 0 2.25 4.983v15.536A3.482 3.482 0 0 0 5.733 24h6.535a3.482 3.482 0 0 0 3.482-3.482V15.75a.75.75 0 0 0-1.5 0zM3 19.5h12a.75.75 0 0 0 0-1.5H3a.75.75 0 0 0 0 1.5zM20.25 6.75a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0zm1.5 0a6.75 6.75 0 1 0-13.5 0 6.75 6.75 0 0 0 13.5 0zm-4.676-2.194l-2.9 3.873h-.002l-1.499-1.5a.75.75 0 1 0-1.06 1.061l1.5 1.5a1.502 1.502 0 0 0 2.26-.16l2.901-3.874a.75.75 0 0 0-1.2-.9z"></path></svg>
                </div>
            </div>
            <center>
            <p style={{color:"#104982",fontWeight:"bold",marginTop:"24px"}}>More ways to sign in</p>
            </center>
            <div style={{marginTop:"30px",padding:"20px 0",textAlign:"center",borderTop:"1px solid #ABAFB2",borderBottom:"1px solid #ABAFB2"}}>
            <p>By signing in or creating an account, you agree with our Terms & conditions and Privacy statement</p>
            </div>
            <div>
            <p style={{marginTop:"20px",textAlign:"center"}}>All rights reserved.</p>
            <p style={{textAlign:"center"}}>Copyright (2006 - 2022) - Booking.com™</p>
            </div>
            
        </div>
    </div>
  )
}
