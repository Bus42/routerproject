import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => (
  <div id="home">
    <h2>Home Component</h2>
  </div>
);

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch('friendslist.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => setFriends(res.data))
  }, [])

  return (
  <div id="friends">
    <h2>Friends Component</h2>
    {friends.map((friend, index) => (
      <div className="friend" key={index} >
        <h3>{friend.firstName} {friend.lastName}</h3>
        <p>Hometown: {friend.hometown}</p>
      </div>
    ))}
  </div>
)};

function App() {
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
            <Route exact path="/" component={Home} />
            <Route path="/friends" component={Friends} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
