import React from "react";
import Home from "./Home";
import Recipes from "./Recipes";
import About from "./About";
import { Switch, Route } from "react-router-dom";

const Main = () => {
    return (
        <div id="main">
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/recipes" component={Recipes}></Route>
                <Route path="/about" component={About}></Route>
            </Switch>
        </div>
    );
};

export default Main;
