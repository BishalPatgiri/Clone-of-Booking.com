import { Input } from '@chakra-ui/react';
import React,{ forwardRef} from 'react'
import "./Pin.css"

const PinInput = forwardRef(({ singleInputHandler, onBackspaceHandler, isOtpVaild }, ref)=> {
    const handleKeyUp =(e)=>{

        if(e.keyCode === 8 && !e.target.value){
          onBackspaceHandler(e)
        }
        else{
          singleInputHandler(e)
        }
       
    }
  return (
    <Input h="45px" w="45px" m="1rem 0.5rem" className={isOtpVaild ? 'correctOtp' :"" }  ref={ref} maxLength={1}
    onKeyUp={handleKeyUp}
     onChange={(e)=>singleInputHandler(e)}
      />
  )
});

export default PinInput;