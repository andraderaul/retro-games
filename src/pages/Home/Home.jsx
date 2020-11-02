import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../helpers/Utils/Routes";
import Title from "../../components/Title";
import { Content, Container } from "./Home.style";
const Home = () => {
  return (
    <Container>
      <Content>
        <Link to={ROUTES.memoryGame}>
          <Title>Memory Game</Title>
        </Link>
      </Content>
      <Content>
        <Link to={ROUTES.whackAMole}>
          <Title>Whack A Mole!</Title>
        </Link>
      </Content>
      <Content>
        <Link to={ROUTES.connectFour}>
          <Title>Connect Four</Title>
        </Link>
      </Content>
      <Content>
        <Link to={ROUTES.snake}>
          <Title>Snake</Title>
        </Link>
      </Content>
      <Content>
        <Link to={ROUTES.spaceInvaders}>
          <Title>Space Invaders</Title>
        </Link>
      </Content>
    </Container>
  );
};

export default Home;
