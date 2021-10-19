import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./components/Main";
import Demo from "./components/sample/Demo";
import Completed from "./components/details/Completed";
import AllRank from "./components/details/AllRank";
import AllGames from "./components/details/AllGames";
import Smash from "./components/details/Smash";
import LeaderBoard from "./components/details/LeaderBoard";
import PriceDetail from "./components/details/PriceDetail";

const Page = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/demo" component={Demo} />
    <Route path="/completed" component={Completed} />
    <Route path="/allrank" component={AllRank} />
    <Route path="/allgames" component={AllGames} />
    <Route path="/smash" component={Smash} />
    <Route path="/leaderboard" component={LeaderBoard} />
    <Route path="/pricedetail" component={PriceDetail} />
  </Switch>
);

export default Page;
