/* eslint-disable eqeqeq */
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import data from "./Data/friendslist";
import Home from "./Components/Home";
import Friends from "./Components/Friends";
import FriendDetail from "./Components/FriendDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
        </nav>
        <div className="app">
          <Switch>
            <Route path="/friends/:friendId">
              <FriendDetail friends={data} />
            </Route>
            <Route path="/friends">
              <Friends friends={data} />
            </Route>
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
