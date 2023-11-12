import { DivThreeContainer } from "./styles";

const PartThree = () => {
  return (
    <DivThreeContainer>
      <div className="leftPartThree">
        <p className="titlePartThree">TRAFO</p>
        <p className="subtitleThree">
          Sistema Inteligente de gerenciamento de trânsito.{" "}
        </p>
        <p className="descThree">
          Tecnologias como sensores, câmeras e sistemas de inteligencia
          artificial para monitoramento do trânsito em tempo real e otimização
          do fluxo de veiculos nas ruas.{" "}
        </p>
      </div>
      <div className="rightPartThree">
        <div className="grid">
          <div className="box">
            <img src="./src/assets/energy.png" alt="Energia" width="112px" />
              {" "}
            <p className="boxText">Sistema de Protecao</p>
          </div>
          <div className="box">
            <img src="./src/assets/wifi.png" alt="Energia" width="112px" />
              {" "}
            <p className="boxText">Integracao de Dados</p>
          </div>
          <div className="box">
            <img src="./src/assets/chip.png" alt="Energia" width="112px" />
            <p className="boxText">Gestão e Controle de fluxo</p>
          </div>
          <div className="box">
            <img src="./src/assets/engine.png" alt="Energia" width="112px" />
            <p className="boxText">Comunicação inteligente</p>
          </div>
        </div>
      </div>
    </DivThreeContainer>
  );
};
export default PartThree;
