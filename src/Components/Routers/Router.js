import React from "react";
import { Route, Switch } from "react-router-dom";

import NavCont from "../Nav-Cont/NavCont";
import Film from "../Pages/Film/Film";
import Serial from "../Pages/Serial/Serial";
import Clip from "../Pages/Clip/Clip";
import Music from "../Pages/Music/Music";
import NotFound from "../Pages/NotFound/NotFound";

function Router() {
  return (
    <div>
        <Switch>
      <Route exact path="/" render={() => <NavCont /> } />
      <Route path="/Home" render={() => <NavCont /> } />
      <Route path="/Film" render={() => <Film />} />
      <Route path="/Serial" render={() => <Serial />} />
      <Route path="/Clip" render={() => <Clip />} />
      <Route path="/Music" render={() => <Music />} />
      <Route path="/*" render={() => <NotFound />} />
      </Switch>
    </div>
  );
}

export default Router;
