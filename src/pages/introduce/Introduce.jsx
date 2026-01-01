import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Introduce = () => {

 const [searchParams] = useSearchParams()
 const name = searchParams.get("name")
 const age = searchParams.get("age")


 return (
  <div>
   <p>{age}살 {name}님의 만 나이는 {age-1}살</p>
  </div>
 );
};

export default Introduce;