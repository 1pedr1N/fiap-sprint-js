import * as S from './styles';

const Header = () => {
    return (
        <S.HeaderWrapper>
        <img src="./src/assets/icone 1.png" alt="Logo" width="50px" className="logo" /> 
       <ul>
           <li><a >Problema</a></li>
           <li><a >Solucao</a></li>
           <li><a href="">Impactos</a></li>
           <li><a href="">Perguntas</a></li>
       </ul>
      </S.HeaderWrapper>
    );
    }

    export default Header;