import React, { useState } from 'react';

// 사용자가 이름을 입력하고 완료 버튼을 누르면 이름 뒤에 "님"을 붙인다.
// 완료 버튼을 여러번 눌러도 님자가 한 번만 붙을 수 있도록 수정하기

const Name = () => {
  const [name, setName] = useState("")
  const [count, setCount] = useState(0)

  const handleNameChange = (e) => { 
    setName(e.target.value) 
    setCount(0)
  }
  const handleNameOnClick = (e) => {
    setCount(count + 1)
    if(!(count > 0)){
      if(name.includes("님")){
        setName(name + name.slice(name.length, -1).replaceAll("님", "") + "님")
      }else{
        setName(name + "님")
      }
    }
  }

  return (
    <div>
      <input type="text" 
        placeholder='이름을 입력하세요'
        onChange={handleNameChange}
      />
      <p>{name}</p>
      <button onClick={handleNameOnClick}>완료 버튼</button>
    </div>
  );
};

export default Name;