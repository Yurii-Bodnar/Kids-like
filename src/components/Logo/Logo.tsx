import { useNavigate } from "react-router-dom";
import logo from "../../images/sprite.svg";
import { Container, SvgLogo, Title } from "./Logo.styled";

const Logo: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container onClick={(): void => navigate("/")}>
      <Title>KidsLike</Title>
      <SvgLogo>
        <use href={logo + "#icon-logo"}></use>
      </SvgLogo>
    </Container>
  );
};

export default Logo;
