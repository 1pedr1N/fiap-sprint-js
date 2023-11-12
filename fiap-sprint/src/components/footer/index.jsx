import { FooterContainer } from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footerLeftPart">
        <p className="footerTitle">Contato</p>
        <p className="footerDesc">+55 11 99999-9999</p>
      </div>
      <div className="footerRightPart">
        <p className="footerTitle">Confira nossa redes</p>
        <div className="footerDesc">
          <img
            src="./src/assets/instagram.png"
            alt="Instagram"
            width="35px"
            className="icon"
          />
          <img
            src="./src/assets/facebook.png"
            alt="Facebook"
            width="35px"
            className="icon"
         />
          <img
            src="./src/assets/linkedin.png"
            alt="Linkedin"
            width="35px"
            className="icon"
          />
          <img
            src="./src/assets/Youtube.png"
            alt="Twitter"
            width="35px"
            className="icon"
         />
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
