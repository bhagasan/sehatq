import React from "react";
// import Styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./component/pages/Login";
import Homepage from "./component/pages/Homepage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/homepage" component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

// const Wrapper = Styled.div`
//   position: relative;
//   width: 100%;
//   height: 100vh;
//   overflow: auto;
// `;

export default App;
