import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch , useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import data from './friendslist';

const Home = () => (
  <div id="home">
    <h2>Home Component</h2>
  </div>
);

const Friends = ({friends}) => {

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

const FriendDetail = ({friends}) => {
  const friendID = useParams();
  const activeFriend = friends.filter(fr => fr.id === friendID)[0];
  
  console.log(activeFriend)
  return (
    <div className="friendDetail">
      FRIEND_DETAIL
    </div>
  );
};

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
            <Route exact path='/friends' >
              <Friends friends={friends} />
            </Route>
            {/* <Route path="/friends/:id" component={FriendDetail} /> */}
            <Route path="/friends/:id" >
              <FriendDetail friends={friends} />
            </Route>
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
