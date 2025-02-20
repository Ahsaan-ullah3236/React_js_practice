import React, { useState } from 'react'
import "./Button.css";

function Button() {
  const [Counter ,setCounter] = useState(100)

  const addValue = () =>{
    console.log("update vlue  after the 3 second");
   setTimeout(() => {
    setCounter(Counter + 1 )
   }, 3000);
  }
  const removeValue = () =>{
    console.log("update vlue  after the 3 second");
    setTimeout(() => {
     setCounter(Counter - 1 )
    }, 3000);
  }
  return (
    <>
    <div className='div'>
    <h1>React UseState_Practice</h1>
    <h2>Counter Value {Counter}</h2>
    <button className='btn1' onClick={addValue}>Add me </button>
    <button className='' onClick={removeValue}>Remove me </button>
    </div>
    </>
  )
}
export default Button;

// export default Button
// const [Counter, setCounter] = useState(15);
//     const addValue = () => {
//       setCounter(Counter + 1);
//     };
//     const removeValue = () => {
//       setCounter(Counter - 1);
//     };
//     return (
//       <>
//         <h1>React </h1>
//         <h2> Counter Value {Counter}</h2>
  
//         <button onClick={addValue}>Add value </button>
//         <br />
//         <button onClick={removeValue}>Remove value </button>
//       </>
