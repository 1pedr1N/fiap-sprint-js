import styled from 'styled-components';

export const FooterContainer = styled.footer`
  height: 25vh;
  width: 100%;
  background-color: #1C2C44;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  .footerTitle{
    color: #52e0ff;
    font-size: 20px;
    font-weight: 700;
}
.footerLeftPart{
    margin-top: 50px;

}
.footerDesc{
display: flex;
flex-direction: row;
justify-content: space-around;
}
.footerRightPart{
    margin-top: 50px;
}


`;