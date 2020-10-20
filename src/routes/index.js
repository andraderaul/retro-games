import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../pages/Home";
import MemoryGame from "../pages/MemoryGame";
import WhackAMole from "../pages/WhackAMole";
import ConnectFour from "../pages/ConnectFour";
import Snake from "../pages/Snake";

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/memory-game" component={MemoryGame} />
        <Route path="/whack-a-mole" component={WhackAMole} />
        <Route path="/connect-four" component={ConnectFour} />
        <Route path="/snake" component={Snake} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
