import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Demo from "./components/sample/Demo";

const Page = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/demo" component={Demo} />
  </Switch>
);

export default Page;
