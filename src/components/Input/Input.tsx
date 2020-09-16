import React, { InputHTMLAttributes } from 'react'

// import { Container } from './styles';

const Input: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
 placeholder,
 ...rest
}) => {
 return (
  <>
   <input {...rest} placeholder={placeholder}></input>
  </>
 )
}

export default Input
