import React from 'react';
import S from './style';


// styled Components로 2행 3열 box 구현하기


const Box = () => {
 return (
  <div>
   <S.Container>
    <S.Box $color={"red"}>red</S.Box> 
    <S.Box $color={"orange"}>orange</S.Box>
    <S.Box $color={"blue"}>blue</S.Box>
    <S.Box $color={"green"}>green</S.Box>
    <S.Box $color={"yellow"}>yellow</S.Box>
    <S.Box $color={"purple"}>purple</S.Box>
   </S.Container>
  </div>
 );
};

export default Box;