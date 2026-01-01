import React from 'react';

const PropsComponent2 = ({name, age}) => {

 // 구조 분해 할당
 // const {name, age} = props
 console.log(props)


 return (
  <div>
   {name}님 환영합니다. {age + 1}살이 되시겠네요?
  </div>
 );
};

export default PropsComponent2;