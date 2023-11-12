import styled from 'styled-components';

export const DivThreeContainer = styled.div`
  background-color: #1c2c44;
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #fff;
  .leftPartThree {
  width: 50%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
}
.titlePartThree {
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: left;
  width: 100%;
}
.subtitleThree {
  font-size: 36px;
  font-weight: 600;
  color: #00b6de;
  margin-bottom: 20px;
}
.descThree {
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 20px;
}
.rightPartThree {
  width: 60%;
  height: 80vh;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  width: 50%;
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1c2c44;
    border-radius: 13px;
    color: #00b6de;
    border: 1px solid #00b6de;
        width: 240px;
        height: 240px;

}
.boxText{
    font-size: 28px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
}
`;