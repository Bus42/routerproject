import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import data from './friendslist';

const Home = () => (
  <div id="home">
    <h2>Home Component</h2>
  </div>
);

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => setFriends(data), []);

  return (
    <div id="friends">
      <h2>Friends Component</h2>
      {friends.map((friend, index) => (
        <Friend
          key={index}
          name={friend.name}
          thumbnail={friend.thumbnail}
          id={friend.id}
        />
      ))}
    </div>
  );
};

const Friend = ({ name, thumbnail, id }) => {
  return (
    <div className="friend">
      <img src={thumbnail} alt={name} />
      <h3>{name}</h3>
      <Link to={`/friends/${id}`}>Details</Link>
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
            <Route exact path="/friends" component={Friends} />
            <Route path="/friends/:id" component={FriendDetail} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
