import React, { useRef, useState } from 'react';


const Name2 = () => {
  const [name, setName] = useState("")
  const handleNameChage = (e) => {
   setName(e.target.value)
  }

  const nameRef = useRef();
  const handleNameOnClick = () => {
   setName(nameRef.current.innerText + "님")
  }


  return (
    <div>
      <input type="text" 
        placeholder='이름을 입력하세요'
        onChange={handleNameChage}
      />
      <p ref={nameRef}>{name}</p>
      <button onClick={handleNameOnClick}>완료 버튼</button>
    </div>
  );
};

export default Name2;