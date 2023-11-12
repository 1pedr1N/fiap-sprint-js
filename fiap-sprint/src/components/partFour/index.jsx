import { PartFourContainer } from "./styles";
const PartFour = () => {
    return (
        <PartFourContainer>
        <div className="leftPartFour">
            <img src="./src/assets/bg-two.png" alt="Transito" width="300px" /> 
        </div>
  <div className="rightPartFour">
    <p className="titlePartFour">TRAFO</p>
    <div className="position">
        <div className="line" ></div>
    </div>

    <p className="subtitlePartFour">Complementos da  nossa solução   </p>
    <p className="textPartFour">Sensores para monitotar a disponibilidade de vagas de estacionamento nas ruas e estacionamentos públicos. </p>
    <p className="textPartFour">Sistema de câmera com sensor de proximidade que aplica multas á veiculos que fiquem em cima da faixa de pedestres.</p>
    </div>
    </PartFourContainer>
    );
    }
export default PartFour;