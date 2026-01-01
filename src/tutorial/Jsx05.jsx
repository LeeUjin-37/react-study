import React from 'react';
import LuckyComponent from './LuckyComponent';
import UnLuckyComponent from './UnLuckyComponent';
import PassComponent from './PassComponent';
import NotPassComponent from './NotPassComponent';

// 화면의 동적제어
// age 상수로 나이를 설정한다(임의)
// 19세 초과 성인이라면 "입장 가능"
// 성인이 아니라면 "입장 불가"
// 성인과 관계 없이 age가 짝수라면 "당첨"을 출력
const age = 22;
// const [unLucky, pass, notPass] = ["당첨", "꽝", "입장 가능", "입장 불가"]

// 컴포넌트 분리 실습
// const luckyComponent = <p>{lucky}</p>;
// const unLuckyComponent = <p>{unLucky}</p>;
// const passComponent = <p>{pass}</p>;
// const notPassComponent = <p>{notPass}</p>;

const isAdult = age > 19
const isLucky = age % 2 === 0
const enter = isAdult ? <PassComponent /> : <NotPassComponent />
const win = isLucky ? <LuckyComponent /> : <UnLuckyComponent />

const Jsx05 = () => {
  return (
    <div>
      {enter}
      {win}
    </div>
  );
};

export default Jsx05;