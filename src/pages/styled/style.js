import styled from "styled-components";
import { flexCenter, flexCenterColumn, flexColumn, h1Bold, h3Regular } from "../../styles/common";
import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import { fadeIn } from "../../keyframes/keyframes";
import { media } from "../../styles/breakpoint";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const S = {}

  S.Wrapper = styled.form`
    ${flexColumn}
    width: 200px;
  `

  S.InputWrap = styled.div`
    ${flexColumn}
  `

  S.Img = styled.img`
    width: ${({width}) => width};
  `


  S.ImgBg = styled.div`
    width: ${({width}) => width};
    height: ${({height}) => height};
    /* / : public 경로 */
    background-image: url("/assets/images/styled/cat.jpeg");

  `



  S.ImageWrapper = styled.div`
    width: 800px;
    height: 800px;
    border: solid 1px blue;
    ${flexCenter}
  `

  S.IconWrapper = styled.div`
    ${flexCenterColumn}
  `
 

  S.Title = styled.p`
    ${h1Bold }
    animation: ${fadeIn} 3s ease-in forwards;

    @media ${media.mobile}{
      font-size : 10px;
    }
  `

  S.SubTitle = styled.p`
    ${h3Regular}
  `

  // 아이콘 스타일링
  S.BellIcon = styled(FontAwesomeIcon)`
      font-size: 40px;
      color: pink;
  `
  

export default S;