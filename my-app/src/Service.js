import React, { useState } from 'react'

function Service() {

const[color,setColor]=useState("yellow");
const[name,setName]=useState("click me");

const changeBackground=()=>{
  let newBg="purple";
  setColor(newBg);
  let newName="ouch!!";
  setName(newName);
}

const newColor=()=>{
  let bgNew="green";
  setColor(bgNew);
}

  return (
    <div className='service-container'>
    <div style={{backgroundColor:color}}>
      <button onMouseEnter={changeBackground} onMouseLeave={newColor}>{name}</button>
    </div>
    </div>
  )
}

export default Service