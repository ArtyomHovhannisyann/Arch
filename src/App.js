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

function resize(i18n) {
  const w = window.innerWidth;
  if (w <= 950) {
    document.documentElement.style.setProperty(
      "--menu-4th-column-width",
      i18n.language === "am" ? "12vw" : "130px"
    );
  }
}

function App() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.cookie = `token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuYXJjaC5oZWxwQGdtYWlsLmNvbSIsInRva2VuIjoiJDJiJDEwJDVqYTRIS0xKanFXek9xWlVNV3ZTVGVqajJ4a0hzVkhrOHhCa0xlcGlkRGY3d0dDOWM4RFp5IiwiaWF0IjoxNjI3NzIyMDg1LCJleHAiOjE2Mjc3MjIzODV9.-_RPYrEYrSMMOJRv1sb9o_AyI1hjS3n2ZEdKbn70Hw8`;
    //remove Am font
    // document.documentElement.style.setProperty(
    //   "--bac-font",
    //   i18n.language === "am" ? "Arial" : "Browallia New"
    // );
    document.documentElement.style.setProperty(
      "--font-size",
      i18n.language === "am" ? ".8vw" : "1.3vw"
    );
    document.documentElement.style.setProperty(
      "--bold-font",
      i18n.language === "am" ? "Arial" : "Aharoni"
    );
    document.documentElement.style.setProperty(
      "--menu-4th-column-width",
      i18n.language === "am" ? "7.9vw" : "130px"
    );
    document.documentElement.style.setProperty(
      "--menu-4th-5th-column-width",
      i18n.language === "am" ? "15vw" : "130px"
    );

    const app = document.querySelector(`#root > .App`);
    if (app) {
      if (i18n.language === `am`) {
        app.classList.add(`lang-am`);
        app.classList.remove(`lang-eng`);
      } else {
        app.classList.add(`lang-eng`);
        app.classList.remove(`lang-am`);
      }
    }

    resize(i18n);
  }, [i18n.language]);

  useEffect(() => {
    resize(i18n);
    window.addEventListener(`resize`, resize.bind(null, i18n));
    return function () {
      window.removeEventListener(`resize`, resize);
    };
  }, []);

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
