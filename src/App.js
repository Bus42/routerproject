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
    fetch("friendslist.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => setFriends(res.data));
  }, []);

  const Friend = ({ name, thumbnail }) => {
    return (
      <div className="friend">
        <img src={thumbnail} alt={name} />
        <h3>{name}</h3>
      </div>
    );
  };

  const FriendDetail = ({ id, name, nickname, description, img, movies }) => {
    return (
      <div className="friendDetail">
        <h2>
          {name}, aka {nickname}
        </h2>
        <img src={img} alt={name} />
        <p>{description}</p>
        <ul>
          Movies
          {movies.map((movie, index) => (
            <li className="movie" key={`${id}_${index}`}>
              {movie}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div id="friends">
      <h2>Friends Component</h2>
      {friends.map((friend, index) => (
        <Friend key={index} name={friend.name} thumbnail={friend.thumbnail} />
      ))}
    </div>
  );
};

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
