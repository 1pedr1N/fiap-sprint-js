import styled from 'styled-components';

export const PartFourContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 60vh;
  margin-top: 50px;
  .position{
    width: 100%;
    display: flex;
    align-items: initial;
    
}
.line{
    width: 30vw;
    display: flex;
    height: 5px;
    background-color: #52E0FF;
}
.leftPartFour{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 60vh;
}
.rightPartFour{
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 60%;
    height: 60vh;
}
.titlePartFour{
    text-align: left;
    width: 100%;
    font-size:32px;
    font-weight: 700;
    color: #1B2033;
}
.subtitlePartFour{
    text-align: left;
    width: 100%;
    font-size: 35px;
    margin-top: 30px;
    font-weight: 400;
    color: #1B2033;
}
.textPartFour{
    text-align: left;
    width: 100%;
    font-size: 20px;
    margin-top: 30px;
    font-weight: 400;
    color: #1B2033;
}

`;