import React from 'react';

const PropsComponent3 = (props) => {

 // 구조 분해 할당
 // const {name, age} = props
 const foodList = props.foodList
 foodList.forEach((_,i) => {
  console.log(foodList[i])
 })

 for(let food of foodList){
  console.log("for문 - " + food)
 }




 return (
  <div>
  
  </div>
 );
};

export default PropsComponent3;