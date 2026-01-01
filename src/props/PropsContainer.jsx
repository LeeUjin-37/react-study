import React from 'react';
import PropsComponent1 from './PropsComponent1';
import PropsComponent3 from './PropsComponent3';

const PropsContainer = () => {

 const name = "이유진"
 const age = 29
 // foodList를 PropsComponent3.jsx 파일을 만들어 Props로 값을 넘기고
 // 콘솔에 모든 값을 하나씩 출력하기
 const foodList = ['김치찌개', '된장찌개', '고추장찌개']

 return (
  <div>
   <PropsComponent1 name={name} age={age} />
   <PropsComponent3 foodList={foodList}/>
  </div>
 );
};

export default PropsContainer;