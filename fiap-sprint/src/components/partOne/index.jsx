import * as S from './styles';
const PartOne = () => {
    return (
        <S.DivOneContainer> 
        <div className="leftPart"> <p className="title">Reduzindo o tráfego e promovendo a sustentabilidade ambiental. </p>
            <p className="subtitle">Mobilidade Urbana. Cidades enfrentam problemas com congestionamento, que acaba gerando a poluicão do ar, poluição sonora, e muito estresse para quem está parado no trânsito</p>
            <button className="btn">Quero mais informacoes</button>
        </div>
        <div className="rightPart">
            <img src="./src/assets/bg-farol.png" alt="Farol" width="500px" /> 
        </div>
        </S.DivOneContainer>
    );
    }
export default PartOne;