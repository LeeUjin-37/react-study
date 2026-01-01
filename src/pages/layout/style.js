import styled from "styled-components";
import { flexColumn } from "../../styles/common";

const S = {}

S.Wrapper = styled.div`
  ${flexColumn}
  height: 100vh;
  font-size: 20px;
`
S.Header = styled.header`
  display: flex;
  width: 100dvw;
  height: 60px;
  border-bottom: solid 1px #333;
  padding: 0 12px;
  align-items: center;
  `
S.MainContent = styled.main`
  flex: 1;
  padding: 0 12px;
  overflow: auto;
  `


S.Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100dvw;
  height: 60px;
  padding: 0 12px;
  border-top: solid 1px #333;

  & path {
   color : #bec4c9
  }


  & .active path {
   color: purple;
  }





`



export default S;
