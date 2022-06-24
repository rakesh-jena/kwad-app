import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, ForgotPassword, Register, PostSignUp, ConfirmEmail } from "./Views/Auth";

const Routes = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/forgotpassword" exact>
          <ForgotPassword />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/confirmemail" exact>
          <ConfirmEmail />
        </Route>
        <Route path="*" exact>
          <NoPageFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
