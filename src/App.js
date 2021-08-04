import React, { Suspense, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { routes } from "./Router";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.cookie = `token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuYXJjaC5oZWxwQGdtYWlsLmNvbSIsInRva2VuIjoiJDJiJDEwJDVqYTRIS0xKanFXek9xWlVNV3ZTVGVqajJ4a0hzVkhrOHhCa0xlcGlkRGY3d0dDOWM4RFp5IiwiaWF0IjoxNjI3NzIyMDg1LCJleHAiOjE2Mjc3MjIzODV9.-_RPYrEYrSMMOJRv1sb9o_AyI1hjS3n2ZEdKbn70Hw8`;
    document.documentElement.style.setProperty(
      "--bac-font",
      i18n.language === "am" ? "Arial AM" : "Browallia New"
    );
    document.documentElement.style.setProperty(
      "--font-size",
      i18n.language === "am" ? "18px" : "25px"
    );
    document.documentElement.style.setProperty(
      "--bold-font",
      i18n.language === "am" ? "ArTarumianHelevetacia" : "Aharoni"
    );
  }, [i18n.language]);

  return (
    <Suspense fallback="loading">
      <div className="App">
        <Router>
          <Switch>
            {routes.map((el, i) => {
              return <Route path={el.path} component={el.component} key={i} />;
            })}
            <Redirect from="/" to="/home" />
          </Switch>
        </Router>
      </div>
    </Suspense>
  );
}

export default App;
