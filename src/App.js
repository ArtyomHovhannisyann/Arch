import "./App.css";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import { routes } from "./Router";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((el, i) => {
            return <Route path={el.path} component={el.component} key={i} />;
          })}
        </Switch>
        <Redirect from = "/" to = "/home"/>
      </Router>
    </div>
  );
}

export default App;
