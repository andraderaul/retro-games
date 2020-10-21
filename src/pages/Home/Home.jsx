import React from "react";
import { Link } from "react-router-dom";

import Title from "../../components/Title";
import { Content, Container } from "./Home.style";
const Home = () => {
  return (
    <Container>
      <Content>
        <Link to="/memory-game">
          <Title>Memory Game</Title>
        </Link>
      </Content>
      <Content>
        <Link to="/whack-a-mole">
          <Title>Whack A Mole!</Title>
        </Link>
      </Content>
      <Content>
        <Link to="/connect-four">
          <Title>Connect Four</Title>
        </Link>
      </Content>
      <Content>
        <Link to="/snake">
          <Title>Snake</Title>
        </Link>
      </Content>
    </Container>
  );
};

export default Home;
