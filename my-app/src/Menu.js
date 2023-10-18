import React, { useEffect, useState } from 'react'

function Menu() {

const[digit,setDigit]=useState(0)
// const[digits,setDigits]=useState(0)

useEffect(()=>{
  // alert("you have clicked")
  document.title=`you clicked me ${digit} times`
})

  return (
    <div>
      <button onClick={()=>{setDigit(digit+1)}}
      >click me {digit}</button>
      <br/>
      {/* <button onClick={()=>{setDigits(digits+1)}}
      >click me {digits}</button> */}
    </div>
  )
}

export default Menu