import React, { useState } from 'react';

const Person = () => {
  
  // 사용자가 이름을 입력했다면 name의 컬러를 블루로 변경하기
  // 사용자가 나이를 입력했다면 age의 폰트 사이즈를 30px로 변경하기
  // ex) 홍길동 -> 이름 -> 컬러 블루
  // ex) 20 -> 나이 -> 폰트사이즈 30px
  const [info, setInfo] = useState({
    name : "",
    age : 0
  })
  const [nameStyle, setNameStyle] = useState({color: ""})
  const [ageStyle, setAgeStyle] = useState({fontSize: ""})

  // 1. 사용자가 입력한 값을 먼저 들고와서 확인한다.
  const [target, setTarget] = useState("")

  const handleInfoChange = (e) => {
    setTarget(e.target.value)
  }

  const handleInfoKeyDown = (e) => {
    const isNumber = target - 0
    if(e.key === 'Enter'){
      if(isNumber){
        setInfo({...info, age: target})
        setAgeStyle({color: "blue"})
        setNameStyle({fontSize: ""})
      }else{
        setInfo({...info, name: target})
        setNameStyle({fontSize: "30px"})
        setAgeStyle({color: ""})
      }
    }
  }

  return (
    <div>
      <h3 style={nameStyle}>이름: {info.name}</h3>
      <h3 style={ageStyle}>나이: {info.age}</h3>
      <input
        placeholder="사용자의 정보를 입력하세요"
        onKeyDown={handleInfoKeyDown}
        type="text" onChange={handleInfoChange}
      />
    
    </div>
  );
};

export default Person;