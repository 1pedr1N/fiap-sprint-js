import styled from 'styled-components';
export const DivOneContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  background-color: #1b2033;
  color: #fff;
  .leftPart{
width: 60%;
color:#fff;
display: flex;
justify-content: center;
height: 100vh;
flex-direction: column;
padding: 30px ;
}
.title{
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 20px;
}
.subTitle{
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 20px;
}
.rightPart{
    width: 40%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
        
}
`;
