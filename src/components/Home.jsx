import React from "react";
import "./Home.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Apply from "./Apply";
import Money from "./Money";
import Setting from "./Setting";
import HomePage from "./HomePage";

const Home = () => {
  return (
    <div className="homeContainer">
      <Header />
      <div className="contentContainer">
        <Sidebar />
        <div className="mainContent">
          <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/home/apply" component={Apply} />
            <Route exact path="/home/money" component={Money} />
            <Route exact path="/home/setting" component={Setting} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Home;
