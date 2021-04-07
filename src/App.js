/* eslint-disable eqeqeq */
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "./Data/friendslist";
import Home from "./Components/Home";
import Friends from "./Components/Friends";
import FriendDetail from "./Components/FriendDetail";

function App() {
  const [friends, setFriends] = useState([]);
  useEffect(() => setFriends(data), []);
  return (
    <div className="App">
      <Router>
        <nav className="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="friends">Friends</Link>
          </li>
        </nav>
        <div className="app">
          <Switch>
            <Route path="/friends/:id">
              <FriendDetail friends={friends} />
            </Route>
            <Route path="/friends">
              <Friends friends={friends} />
            </Route>
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
