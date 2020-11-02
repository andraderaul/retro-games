import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import { ROUTES } from "../helpers/Utils/Routes";
import Home from "../pages/Home";
import MemoryGame from "../pages/MemoryGame";
import WhackAMole from "../pages/WhackAMole";
import ConnectFour from "../pages/ConnectFour";
import Snake from "../pages/Snake";
import SpaceInvaders from "../pages/SpaceInvaders";

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={ROUTES.home} component={Home} />
        <Route path={ROUTES.memoryGame} component={MemoryGame} />
        <Route path={ROUTES.whackAMole} component={WhackAMole} />
        <Route path={ROUTES.connectFour} component={ConnectFour} />
        <Route path={ROUTES.snake} component={Snake} />
        <Route path={ROUTES.spaceInvaders} component={SpaceInvaders} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
