import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/memory-game">Memory Game</Link>
      <Link to="/whack-a-mole">Whack A Mole!</Link>
    </div>
  );
};

export default Home;
