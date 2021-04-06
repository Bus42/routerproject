import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Home = () => (
  <div id="home">
    <h2>Home Component</h2>
  </div>
);

const Friends = () => (
  <div id="friends">
    <h2>Friends Component</h2>
  </div>
);

function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar">
          <li>
            <Link to='/' >Home</Link>
          </li>
          <li>
            <Link to='friends' >Friends</Link>
          </li>
        </nav>
        <div className="app">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/friends' component={Friends} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
