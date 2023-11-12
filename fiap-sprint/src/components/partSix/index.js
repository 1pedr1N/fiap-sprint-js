import styled from 'styled-components';

export const DivSixContainer = styled.div`
  width: 100%;
  height: 50vh;
  background-color: #1c2c44;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .titleSix{
    max-width: 570px;
    font-size: 32px;
    color: #fff;
    font-weight: 700;
    text-align: center;
}
.btnSix{
    width: 200px;
    height: 50px;
    background-color: #1C2C44;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    color:   #00D1FF;
    border: 1px solid #00D1FF;
    
}
.btnSix:hover{
    background-color: #00D1FF;
    color: #1C2C44;
    transition: 0.5s;
    cursor: pointer;
}
`;