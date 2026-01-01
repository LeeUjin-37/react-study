import React, { useRef, useState } from "react";
import Hobby from "./Hobby";

// 3번 실습
// hobbies를 문자열이 아닌 li태그(컴포넌트)로 분리하여 출력한다.

const CheckBoxRef03 = () => {
  const [hobbies, setHobbies] = useState([]);
  const inputRef = useRef([])

  const handleHobbiesOnChange = (e) => {
    if(e.target.checked){
      setHobbies([...hobbies, e.target.value])
    }else{
      setHobbies(hobbies.filter((hobby) => hobby !== e.target.value))
    }
  } 
  
  const hobbyList = hobbies.map((hobby, i) => (
    <Hobby key={i} hobby={hobby} />
  ))

  return (
    <div>
      <ul>
        {hobbyList}
      </ul>
      <div>
        <label>
          <span>게임</span><input type="checkbox" onChange={(e) => { handleHobbiesOnChange(e) }} value="게임" name="hobby" ref={(el) => inputRef.current[0] = el} />
        </label>
        <label>
          <span>음악감상</span><input type="checkbox" onChange={(e) => { handleHobbiesOnChange(e) }} value="음악감상" name="hobby" ref={(el) => inputRef.current[1] = el} />
        </label>
        <label>
          <span>운동</span><input type="checkbox" onChange={(e) => { handleHobbiesOnChange(e) }} value="운동" name="hobby" ref={(el) => inputRef.current[2] = el} />
        </label>
      </div>
    </div>
  );
};

export default CheckBoxRef03;
