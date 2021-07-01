import { Route, Switch } from "react-router";
import Profile from "./pages/profile";
import AuthPage from "./pages/auth";


import Theme from "./components/theme";
import Navigation from "./components/navigation";
import Store from "./pages/store";

function App() {
  return (
    <div className="container">
      <Navigation />
      <hr />
      <Theme>
        <Switch>
          <Route path="/profile">
            <Profile title="Protected Page" />
          </Route>

          <Route path="/auth">
            <AuthPage />
          </Route>


          <Route path="/store">
            <Store/>
          </Route>

          <Route path="/">
            <AuthPage />
          </Route>
        </Switch>
      </Theme>
    </div>
  );
}

export default App;
