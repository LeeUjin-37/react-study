import React from 'react';
import styled from 'styled-components';
import S from './style';

const Home = () => {
 return (
  <>
   <S.StyledDiv>
     스타일 컴포넌트 안 쓰는 정말 외워서 쓰는 하드 코딩 스타일!
   </S.StyledDiv>
     <S.StyledButton>스타일로 꾸며볼게요!</S.StyledButton>
  </>
 );
};

export default Home;