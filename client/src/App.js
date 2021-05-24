// import Home from "./components/home/Home";
import "./App.css";
import Header from "./components/header/Header";
import Players from "./components/players/Players";
import Teams from "./components/teams/Teams";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Players} />
          <Route path="/teams" component={Teams} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
