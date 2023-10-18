import React, { useState } from 'react'

function About () {
  const[count,setCount]=useState(0);

  let newTime=new Date().toLocaleTimeString();
  const[Time,setTime]=useState(newTime)
  
  let cTime=new Date().toLocaleTimeString();
  const[clock,setClock]=useState(cTime)

  const Increment=()=>{setCount(count+1) }
  const Decrement=()=>{setCount(count-1)}
  
  const exactTime=()=>{
     newTime=new Date().toLocaleTimeString();   
    setTime(newTime)
  }

const currentTime=()=>{

   cTime=new Date().toLocaleTimeString();
   setClock(cTime)
}

setInterval(currentTime,1000)


  return (
    <>
    <div className='counter'>
       <div><h1>{count}</h1></div>
       <div className='button-container'>
       <div><button onClick={Increment}>INCREMENT</button></div>
       <div><button onClick={Decrement}>DECREMENT</button></div>
       </div>
     </div>
     <div className='timer'>
      <h1>{Time}</h1>
      <button onClick={exactTime}>Set Time</button>
     </div>
     <div className='clock'>
        <h1>{cTime}</h1>
     </div>
     </>
  )
}

export default About 