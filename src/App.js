import React, { Suspense } from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { routes } from "./Router";

function App() {
  return (
    <Suspense fallback="loading">
      <div className="App">
        <Router>
          <Switch>
            {routes.map((el, i) => {
              return <Route path={el.path} component={el.component} key={i} />;
            })}
            <Redirect  from="/" to="/home" />
          </Switch>
        </Router>
      </div>
    </Suspense>
  );
}

export default App;
