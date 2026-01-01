import React, { useState } from 'react';

const Count = () => {

 
 // 상태를 바꾸는 React의 Hook함수
 const [number, setNumber] = useState(0)
 console.log("number", number)
 console.log("setNumber", setNumber)

 // 1. selector -> DOM API
 // 2. addEventListener
 // 3. +=, -=

 const subtract = document.querySelector("#subtract")
 const sum = document.querySelector("#sum")

 const increase = () =>{ setNumber(number + 1)}
 const decrease = () =>{ setNumber(number - 1)}


 return (
  <div>
   <button id="subtract" onClick={decrease}> -1 </button>
   {number}
   <button id="sum" onClick={increase}> +1 </button>
   
  </div>
 );
};

export default Count;