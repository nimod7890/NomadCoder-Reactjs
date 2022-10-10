import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// https://github.com/10009ukk/react-movie
// https://keinn51.github.io/React_JS_Movie_Web_Nomad/
// https://github.com/keinn51/React_JS_Movie_Web_Nomad
