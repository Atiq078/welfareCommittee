import { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import AddProtokoll from "./components/add-protokoll.component";
import Protokoll from "./components/protokoll.component";
import ProtokollsList from "./components/protokolls-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/candidates"} className="navbar-brand">
            Akhuwat
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/candidates"} className="nav-link">
                Candidates
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add Candidate
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/protokolls"} className="nav-link">
                Protokolls
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/addprotokolls"} className="nav-link">
                Add Protokolls
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/candidates"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route path="/candidates/:id" component={Tutorial} />
            <Route exact path={["/protokolls"]} component={ProtokollsList} />
            <Route exact path="/addprotokolls" component={AddProtokoll} />
            <Route path="/protokolls/:id" component={Protokoll} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
