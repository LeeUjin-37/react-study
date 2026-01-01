import React, { useRef } from 'react';

const Check = () => {

 // 아이디, 비밀번호를 버튼을 눌렀을 때 유효성 검사
 const expressionRef = useRef([])
 const formRef = useRef()

 const handleSubmitOnClick = () =>{
  for(let input of expressionRef.current){
   if(!input.value){
    console.error(`${input.name}의 값이 없습니다.`)
    alert(`${input.name}의 값이 없습니다.`)
    return;
   }
  }
  // 데이터 전송
  formRef.current.submit()
 }

 return (
  <div>
   <form action="" ref={formRef}>
    <div>
     <span>아이디</span><input ref={(el) => {expressionRef.current[0] = el}} type="text" name='id'/>
     </div>
    <div>
     <span>비밀번호</span><input ref={(el) => {expressionRef.current[1] = el}} type="text" name='password'/>
     </div>
     <button type='button' onClick={handleSubmitOnClick}>완료</button>
   </form>
  </div>
 );
};

export default Check;