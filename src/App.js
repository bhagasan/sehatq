import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./component/pages/Login";
import Homepage from "./component/pages/Homepage";
import DetailPage from "./component/pages/DetailPage";
import PurchasedHistory from "./component/pages/PurchasedHistory";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/homepage" component={Homepage} />
          <Route exact path="/barang/detail/:id" component={DetailPage} />
          <Route exact path="/purchased-history" component={PurchasedHistory} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
