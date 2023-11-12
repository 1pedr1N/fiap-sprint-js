import styled from 'styled-components';

export const HeaderWrapper = styled.header`
 display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 3%;
    background-color: #D6DEE7;
    .logo{
    margin-bottom:-30px;
}
ul{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style: none;

    width: 40%;

font-weight: 800;


}
li{
    cursor: pointer;
}
a{
    color: #000;
}
    `