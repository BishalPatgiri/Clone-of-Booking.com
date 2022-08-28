import React, {  useRef } from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import PinInput from './PinInput';

const Pin = ({ length, setOtp, isOtpVaild }) => {
    const [inputBoxLength] =useState(new Array(length).fill(1));
    const inputRef = useRef([]);
    const [inputData] = useState(new Array(length).fill("")); 
    const changeHandler = (e,index) => {
        inputData[index] = e.target.value;
        

        if(e.target.value.length > 0 && index < length - 1){
            inputRef.current[index + 1].focus(); 
        }
        setOtp(inputData.join(""))


       
    }
    const handleBackspace=(e,index) =>{
        if(index > 0){
            inputRef.current[index-1].focus();
        }
        inputData[index] = e.target.value;

        setOtp(inputData.join(""))

        
    }

    const handlePasteContent = (e) =>{
        const data = e.clipboarData.getData("text").split("").filter((_, index)=>index <length);
            data.forEach((item, index)=>{
            inputData[index] = item; 

            inputRef.current[index].value = item; 

            if (index < length -1){
                inputRef.current[index + 1].focus();
            }
        })
    }
  return (
    <div onPaste = {handlePasteContent}>
        {inputBoxLength.map((_, index) => {
            return ( 
            <PinInput
            ref={(HTMLElement) => {
                inputRef.current[index] = HTMLElement;
            }}
            isOtpVaild={isOtpVaild}
            key={index}
            singleInputHandler={(e)=> changeHandler(e,index)} 
            onBackspaceHandler={(e)=> handleBackspace(e,index)}
            />
            );
        })}
    </div>
  )
}

export default Pin;


Pin.propTypes ={
    length : PropTypes.number.isRequired,
    setOtp : PropTypes.func,
}; 