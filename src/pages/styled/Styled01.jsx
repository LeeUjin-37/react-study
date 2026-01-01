import React from 'react';
import S from './style';

const Styled01 = () => {
 return (
  <div>
    <S.Wrapper>
     <S.InputWrap>
      <span>아이디</span>
      <input type="text" />
     </S.InputWrap>
     <S.InputWrap>
      <span>비밀번호</span>
      <input type="password" />
     </S.InputWrap>
     <button>전송</button>
    </S.Wrapper>
  </div>
 );
};

export default Styled01;