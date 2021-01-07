import React from "react";
import { Route, Switch } from "react-router-dom";

import NavCont from "../Nav-Cont/NavCont";
import Film from "../Pages/Film/Film";
import Serial from "../Pages/Serial/Serial";
import Marvel from "../Pages/Marvel/Marvel";
import Netflix from "../Pages/Netflix/Netflix";
import NotFound from "../Pages/NotFound/NotFound";

function Router() {
  return (
    <div>
        <Switch>
      <Route exact path="/" render={() => <NavCont /> } />
      <Route path="/Home" render={() => <NavCont /> } />
      <Route path="/Film" render={() => <Film />} />
      <Route path="/Serial" render={() => <Serial />} />
      <Route path="/Marvel" render={() => <Marvel />} />
      <Route path="/Netflix" render={() => <Netflix />} />
      <Route path="/*" render={() => <NotFound />} />
      </Switch>
    </div>
  );
}

export default Router;
