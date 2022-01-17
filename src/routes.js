import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home";
import Contato from "./Pages/Contato";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contato" exact component={Contato} />
      </Switch>
    </BrowserRouter>
  );
}
