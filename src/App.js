import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/home" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
