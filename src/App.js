import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Routes } from "./common/Routes";
import { Home } from "./screens/Home";
import { About } from "./screens/About";
import { Services } from "./screens/Services";
import { Blog } from "./screens/Blog";
import { Contact } from "./screens/Contact";

function App() {
  return (
    <Switch>
      <Route path={Routes.HOME} component={Home} />
      <Route path={Routes.ABOUT} component={About} />
      <Route path={Routes.SERVICES} component={Services} />
      <Route path={Routes.BLOG} component={Blog} />
      <Route path={Routes.CONTACT} component={Contact} />

      <Redirect to={Routes.HOME} />
    </Switch>
  );
}

export default App;
