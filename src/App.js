import "./App.css";
import SignIn from "./pages/SignIn/SignIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "./component/Header/Header";
import Animal from "./pages/Animal/Animal";

function App() {
  // const dispatch = useDispatch();
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfor } = userLogin;
  // useEffect(() => {
  //   // dispatch(getUser());
  // }, []);

  

  return (
    <div className="App">
      <div className="app-body">
        <Router>
          {/* {userInfor ? ( */}
            <Switch>
              <Route exact path="/">
                <SignIn />
              </Route>
              <Route exact path="/animal">
                <Header />
                <Animal />
              </Route>
            </Switch>
          {/* ) : (
            <Switch>
              <Route exact path="/">
                <SignIn />
              </Route>
            </Switch>
          )} */}
        </Router>
      </div>
    </div>
  );
}

export default App;
