import React, { Suspense, useEffect } from 'react';
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { routes } from "./Router";
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  useEffect( ()=>{
    document.documentElement.style.setProperty("--bac-font", i18n.language === "am" ? "Arial AM" : "Browallia New" ); 
    document.documentElement.style.setProperty("--font-size", i18n.language === "am" ? "18px" : "25px" ); 
    document.documentElement.style.setProperty("--bold-font", i18n.language === "am" ? "ArTarumianHelevetacia" : "Aharoni" ); 
  },[i18n.language]);

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
