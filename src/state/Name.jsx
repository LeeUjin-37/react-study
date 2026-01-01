import React, { useState } from 'react';

const Name = () => {

 const [name, setName] = useState("")

 // 실습
 // 사용자가 입력한 이름을 화면에 출력하기
 
 const writeName = (e) => { setName(e.target.value)}
 

 return (
  <div>
   <input type='text' onChange = {writeName} />
   {name}
  </div>
 );
};

export default Name;