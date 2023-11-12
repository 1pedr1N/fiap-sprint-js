import styled from 'styled-components';

export const DivFiveContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  padding: 30px;
  .titleFive{
    font-size: 50px;
    font-weight: 700;
    color:  #0A4B75;
    margin-bottom: 20px;
    margin-top: 50px;
}
.gridFive{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    margin-top: 50px;
}
.checkboxFive{
    width: 400px;
   
    display: flex;
    flex-direction: row;
    align-items: center;
    
}
.boxTextFive{
    margin-left: 10px;
    font-size: 22px;
    font-weight: 700;
    color: #1B2033;


}
`;