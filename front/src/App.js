import Shop from "./Pages/Shop/Shop";
import Home from "./Pages/Home/Home";
import Single from "./Pages/Single/Single";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Cart from "./Pages/Cart/Cart";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(state => state.user.currentUser);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {user? <Home/> : <Login/>}
          </Route>
          <Route exact path="/products/:category">
            <Shop/>
          </Route>
          <Route exact path="/product/:id">
            <Single/>
          </Route>
          <Route exact path="/cart">
            <Cart/>
          </Route>
          <Route exact path="/login">
            {user? <Home/>: <Login/>}
          </Route>
          <Route exact path="/register">
            {user? <Home/> : <Register/>}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
