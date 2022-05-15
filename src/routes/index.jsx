import { Components } from "../pages/Components";
import { DashboardPrestador } from "../pages/dashboardPrestador";
import { Route, Switch } from "react-router-dom";
import { IndexProposalClients } from "../components/indexProposalClients";
import { IndexProposalCookers } from "../components/indexProposalCooker";

import Login from "../pages/login";
import Signup from "../pages/register";

export const Routes = () => {
  return (
    <Switch>
      {/* <Route exact path="/">
        <Home authenticated={authenticated} />
      </Route> */}

      <Route path="/register">
        <Signup />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/teste">
        <Components />
      </Route>

      <Route path="/admin">
        <DashboardPrestador />
      </Route>

      <Route path="/proposals-clients">
        <IndexProposalClients />
      </Route>

      <Route path="/proposals-cookers">
        <IndexProposalCookers />
      </Route>
    </Switch>
  );
};
