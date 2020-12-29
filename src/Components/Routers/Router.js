import React from "react";
import { Route, Switch } from "react-router-dom";

import Film from "../Pages/Film/Film";
import Serial from "../Pages/Serial/Serial";

function Router() {
  return (
    <div>
        <Switch>
      <Route path="/Film" render={() => <Film />} />
      <Route path="/Serial" render={() => <Serial />} />
      </Switch>
    </div>
  );
}

export default Router;
