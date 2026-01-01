import React from 'react';

const Amount = ({
    props, // { amount, coupon }이 들어있는 객체
    pStyle, // p 태그 스타일
    divStyle, // 전체 박스 스타일
    buttonStyle, // 버튼 스타일
    handleAddAmountOnClick, // 수량 + 함수
    handleSubtractAmountOnClick, // 수량 - 함수
    handleAddCouponOnClick, // 쿠폰 + 함수
    handleSubtractCouponOnClick // 쿠폰 - 함수
  }) => {

  console.log("자식 랜더링👶")   // 자식 컴포넌트가 렌더링될 때마다 출력
  const {amount, coupon} = props;  // props 객체에서 amount와 coupon만 꺼낸다.

  return (
    <div style={divStyle}>

      {/* 수량 감소 버튼: 누르면 부모의 setAmount가 실행됩니다. */}
      <button style={buttonStyle} onClick={handleSubtractAmountOnClick}>-</button>

      {/* 현재 수량 표시 */}
      <p style={pStyle}>수량: {amount}</p>

      {/* 수량 증가 버튼 */}
      <button style={buttonStyle} onClick={handleAddAmountOnClick}>+</button>

      {/* 쿠폰 감소 버튼 */}
      <button style={buttonStyle} onClick={handleSubtractCouponOnClick}>-</button>

      {/* 현재 쿠폰 표시 */}
      <p style={pStyle}>쿠폰: {coupon}</p>

      {/* 쿠폰 증가 버튼 */}
      <button style={buttonStyle} onClick={handleAddCouponOnClick}>+</button>
    </div>
  );
};

export default Amount;
