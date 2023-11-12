import { DivTwoContainer } from "./styles";

const PartTwo = () => {
  return (
    <DivTwoContainer>
      <div className="leftPartTwo">
        <img src="./src/assets/bg-one.png" alt="Transito" width="500px" />
      </div>
      <div className="rightPartTwo">
        <p className="titlePartTwo">Era do Tráfego Inteligente</p>
        <p className="descriptionTwo">
          O objetivo final é garantir uma mobilidade mais eficiente e segura
          para todos os usuários das vias públicas.
        </p>
        <p className="descriptionTwo">
          Solução tecnológica que utiliza diversas técnicas e ferramentas para
          monitorar e controlar o fluxo de tráfego em vias públicas.
        </p>
      </div>
    </DivTwoContainer>
  );
};
export default PartTwo;
