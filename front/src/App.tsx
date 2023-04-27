import { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import AddCandidate from "./components/add-candidate.component";
import Candidate from "./components/candidate.component";
import CandidatesList from "./components/candidates-list.component";
import AddProtokoll from "./components/add-protokoll.component";
import Protokoll from "./components/protokoll.component";
import ProtokollsList from "./components/protokolls-list.component";
/////// login registeration /////////
import AuthService from "./services/auth.service";
import IUser from './types/user.type';
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";

import EventBus from "./common/EventBus";

/////// login registeration /////////

import mains from "./components/mains";
/////// login registeration /////////
type Props = {};

type State = {
  showModeratorBoard: boolean,
  showAdminBoard: boolean,
  currentUser: IUser | undefined
}
/////// login registeration /////////


/////// login registeration /////////

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }

    EventBus.on("logout", this.logOut);
  }

  componentWillUnmount() {
    EventBus.remove("logout", this.logOut);
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Akhuwat
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
            <NavDropdown title="Admin" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1" >
                <Link to={"/mains"} >
                Mains
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.1" >
                <Link to={"/candidates"} >
                  List Candidate
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <Link to={"/add"} >
                  Add Candidate
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="4.1" >
                <Link to={"/protokolls"} >
                  List Protokoll
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <Link to={"/addprotokolls"} >
                  Add Protokoll
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="4.1" >
                <Link to={"/committees"} >
                  List Committee
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <Link to={"/addcommittees"} >
                  Add Committee
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="4.1" >
                <Link to={"/actions"} >
                  List Action
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <Link to={"/addactions"} >
                  Add Action
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="4.1" >
                <Link to={"/errorlogs"} >
                  List ErrorLog
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <Link to={"/adderrorlogs"} >
                  Add ErrorLog
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="4.1" >
                <Link to={"/loanunits"} >
                  List LoanUnit
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <Link to={"/loanunits"} >
                  Add LoanUnit
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="4.1" >
                <Link to={"/rfids"} >
                  List RFID
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <Link to={"/addrfids"} >
                  Add RFID
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="4.1" >
                <Link to={"/shareunits"} >
                  List ShareUnit
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <Link to={"/addshareunits"} >
                  Add ShareUnit
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="4.1" >
                <Link to={"/tokens"} >
                  List Token
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <Link to={"/addtokens"} >
                  Add Token
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="4.1" >
                <Link to={"/unknownrfids"} >
                  List UnknownRfid
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <Link to={"/addunknownrfids"} >
                  Add UnknownRfid
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="4.1" >
                <Link to={"/welfarestands"} >
                  List WelfareStand
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <Link to={"/addwelfarestands"} >
                  Add WelfareStand
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

            </NavDropdown>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link" style={{ textTransform: 'uppercase', color: 'yellow' }}>
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>


        <div className="container mt-3">

          <Switch>
            <Route exact path={["/", "/candidates"]} component={CandidatesList} />
            <Route exact path="/add" component={AddCandidate} />
            <Route path="/candidates/:id" component={Candidate} />
            <Route exact path={["/protokolls"]} component={ProtokollsList} />
            <Route exact path="/addprotokolls" component={AddProtokoll} />
            <Route path="/protokolls/:id" component={Protokoll} />
            <Route exact path={["/mains"]} component={mains} />
            <Route exact path={["/","/home"]} component={Home} />
            <Route exact path={["/login"]} component={Login} />
            <Route exact path={["/register"]} component={Register} />
            <Route exact path={["/profile"]} component={Profile} />
            <Route exact path={["/user"]} component={BoardUser} />
            <Route exact path={["/mod"]} component={BoardModerator} />
            <Route exact path={["/admin"]} component={BoardAdmin} />
          </Switch>
        </div>

        { /*<AuthVerify logOut={this.logOut}/> */}
      </div>
    );
/*
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            Akhuwat
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
            <NavDropdown title="Admin" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1" >
                <Link to={"/mains"} >
                CandidatesTests
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.1" >
                <Link to={"/candidates"} >
                  List Candidate
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <Link to={"/add"} >
                  Add Candidate
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="4.1" >
                <Link to={"/protokolls"} >
                  List Protokoll
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <Link to={"/addprotokolls"} >
                  Add Protokoll
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="4.1" >
                <Link to={"/committees"} >
                  List Committee
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <Link to={"/addcommittees"} >
                  Add Committee
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="4.1" >
                <Link to={"/actions"} >
                  List Action
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <Link to={"/addactions"} >
                  Add Action
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="4.1" >
                <Link to={"/errorlogs"} >
                  List ErrorLog
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <Link to={"/adderrorlogs"} >
                  Add ErrorLog
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="4.1" >
                <Link to={"/loanunits"} >
                  List LoanUnit
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <Link to={"/loanunits"} >
                  Add LoanUnit
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="4.1" >
                <Link to={"/rfids"} >
                  List RFID
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <Link to={"/addrfids"} >
                  Add RFID
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="4.1" >
                <Link to={"/shareunits"} >
                  List ShareUnit
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <Link to={"/addshareunits"} >
                  Add ShareUnit
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="4.1" >
                <Link to={"/tokens"} >
                  List Token
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <Link to={"/addtokens"} >
                  Add Token
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="4.1" >
                <Link to={"/unknownrfids"} >
                  List UnknownRfid
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <Link to={"/addunknownrfids"} >
                  Add UnknownRfid
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="4.1" >
                <Link to={"/welfarestands"} >
                  List WelfareStand
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">
                <Link to={"/addwelfarestands"} >
                  Add WelfareStand
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

            </NavDropdown>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link" style={{ textTransform: 'uppercase', color: 'yellow' }}>
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>


        <div className="container mt-3">

          <Switch>
            <Route exact path={["/", "/candidates"]} component={CandidatesList} />
            <Route exact path="/add" component={AddCandidate} />
            <Route path="/candidates/:id" component={Candidate} />
            <Route exact path={["/protokolls"]} component={ProtokollsList} />
            <Route exact path="/addprotokolls" component={AddProtokoll} />
            <Route path="/protokolls/:id" component={Protokoll} />
            <Route exact path={["/mains"]} component={mains} />
            <Route exact path={["/","/home"]} component={Home} />
            <Route exact path={["/login"]} component={Login} />
            <Route exact path={["/register"]} component={Register} />
            <Route exact path={["/profile"]} component={Profile} />
            <Route exact path={["/user"]} component={BoardUser} />
            <Route exact path={["/mod"]} component={BoardModerator} />
            <Route exact path={["/admin"]} component={BoardAdmin} />
          </Switch>
        </div>

        { //<AuthVerify logOut={this.logOut}/> /}
      </div>
    );
    */
  }
}



/////// login registeration /////////
/*
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
            <li className="nav-item">
              <Link to={"/mains"} className="nav-link">
                CandidatesTests
              </Link>
            </li>
      <NavDropdown title="Admin" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1" >
          <Link to={"/candidates"} >
            List Candidate
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">
          <Link to={"/add"} >
            Add Candidate
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Divider />

        <NavDropdown.Item eventKey="4.1" >
          <Link to={"/protokolls"} >
            List Protokoll
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">
          <Link to={"/addprotokolls"} >
            Add Protokoll
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Divider />

        <NavDropdown.Item eventKey="4.1" >
          <Link to={"/committees"} >
            List Committee
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">
          <Link to={"/addcommittees"} >
            Add Committee
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Divider />

        <NavDropdown.Item eventKey="4.1" >
          <Link to={"/actions"} >
            List Action
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">
          <Link to={"/addactions"} >
            Add Action
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Divider />

        <NavDropdown.Item eventKey="4.1" >
          <Link to={"/errorlogs"} >
            List ErrorLog
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">
          <Link to={"/adderrorlogs"} >
            Add ErrorLog
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Divider />

        <NavDropdown.Item eventKey="4.1" >
          <Link to={"/loanunits"} >
            List LoanUnit
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">
          <Link to={"/loanunits"} >
            Add LoanUnit
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Divider />

        <NavDropdown.Item eventKey="4.1" >
          <Link to={"/rfids"} >
            List RFID
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">
          <Link to={"/addrfids"} >
            Add RFID
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Divider />

        <NavDropdown.Item eventKey="4.1" >
          <Link to={"/shareunits"} >
            List ShareUnit
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">
          <Link to={"/addshareunits"} >
            Add ShareUnit
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Divider />

        <NavDropdown.Item eventKey="4.1" >
          <Link to={"/tokens"} >
            List Token
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">
          <Link to={"/addtokens"} >
            Add Token
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Divider />

        <NavDropdown.Item eventKey="4.1" >
          <Link to={"/unknownrfids"} >
            List UnknownRfid
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">
          <Link to={"/addunknownrfids"} >
            Add UnknownRfid
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Divider />

        <NavDropdown.Item eventKey="4.1" >
          <Link to={"/welfarestands"} >
            List WelfareStand
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">
          <Link to={"/addwelfarestands"} >
            Add WelfareStand
          </Link>
        </NavDropdown.Item>
        <NavDropdown.Divider />

      </NavDropdown>

          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/candidates"]} component={CandidatesList} />
            <Route exact path="/add" component={AddCandidate} />
            <Route path="/candidates/:id" component={Candidate} />
            <Route exact path={["/protokolls"]} component={ProtokollsList} />
            <Route exact path="/addprotokolls" component={AddProtokoll} />
            <Route path="/protokolls/:id" component={Protokoll} />
            <Route exact path={["/mains"]} component={mains} />
          </Switch>
        </div>
      </div>
    );
  }
}
*/
export default App;
