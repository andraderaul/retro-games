import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Home from "../pages/Home";
import MemoryGame from "../pages/MemoryGame";
import WhackAMole from "../pages/WhackAMole";

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/memory-game" component={MemoryGame} />
        <Route path="/whack-a-mole" component={WhackAMole} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
