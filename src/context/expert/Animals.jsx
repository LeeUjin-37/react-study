import React, { useContext } from 'react';
import AnimalsContext from './AnimalsContext';

// 실습
// Context에 저장된 동물 세 마리를 버튼으로 출력하기
// input에 동물을 입력 후 엔터를 누르면 동물 버튼이 추가된다.
// 동물 버튼을 클릭하면 해당 버튼이 삭제된다.
// 추가, 삭제는 Context에서 제공하는 insert(), remove()를 사용해야한다.

const Animals = () => {

 const {state, actions} = useContext(AnimalsContext)
 const {animals} = state;
 const {insert, remove} = actions;

 const animalList = animals.map((animal,i) => <button key={i}>{animal}</button>)

 const handleInsertOnKeyDown = (e) => {
    if(e.key === "Enter"){
      insert(e.target.value)
    }
 }

 return (
  <div>
   <input 
   onKeyDown={handleInsertOnKeyDown}
   type="text" />
   {animalList}
  </div>
 );
};

export default Animals;