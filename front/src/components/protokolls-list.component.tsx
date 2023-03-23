import { Component, ChangeEvent } from "react";
import ProtokollDataService from "../services/protokoll.service";
import { Link } from "react-router-dom";
import ProtokollData from '../types/protokoll.type';
import React from "react";

import Table from 'react-bootstrap/Table';
//import ListGroup from 'react-bootstrap/ListGroup';
import "./component.css";

type Props = {};

type State = {
  protokolls: Array<ProtokollData>,
  currentProtokoll: ProtokollData | null,
  currentIndex: number,
  searchKommentar: string
};

export default class ProtokollsList extends Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.onChangeSearchKommentar = this.onChangeSearchKommentar.bind(this);
    this.retrieveProtokolls = this.retrieveProtokolls.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveProtokoll = this.setActiveProtokoll.bind(this);
    this.removeAllProtokolls = this.removeAllProtokolls.bind(this);
    this.searchKommentar = this.searchKommentar.bind(this);

    this.state = {
      protokolls: [],
      currentProtokoll: null,
      currentIndex: -1,
      searchKommentar: ""
    };
  }

  componentDidMount() {
    this.retrieveProtokolls();
  }

  onChangeSearchKommentar(e: ChangeEvent<HTMLInputElement>) {
    const searchKommentar = e.target.value;

    this.setState({
      searchKommentar: searchKommentar
    });
  }

  retrieveProtokolls() {
    ProtokollDataService.getAll()
      .then((response: any) => {
        this.setState({
          protokolls: response.data
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveProtokolls();
    this.setState({
      currentProtokoll: null,
      currentIndex: -1
    });
  }

  setActiveProtokoll(protokoll: ProtokollData, index: number) {
    this.setState({
      currentProtokoll: protokoll,
      currentIndex: index
    });
  }

  removeAllProtokolls() {
    ProtokollDataService.deleteAll()
      .then((response: any) => {
        console.log(response.data);
        this.refreshList();
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  searchKommentar() {
    this.setState({
      currentProtokoll: null,
      currentIndex: -1
    });

    ProtokollDataService.findByTitle(this.state.searchKommentar)
      .then((response: any) => {
        this.setState({
          protokolls: response.data
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  

 
  render() {
    const { searchKommentar, protokolls, currentProtokoll, currentIndex } = this.state;
    

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by kommentar"
              value={searchKommentar}
              onChange={this.onChangeSearchKommentar}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchKommentar}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Protokoll List</h4>

          <ul className="list-group">
            {protokolls &&
              protokolls.map((protokoll: ProtokollData, index: number) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveProtokoll(protokoll, index)}
                  key={index}
                >
                  {protokoll.kommentar}
                </li>
              ))}
          </ul>



          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllProtokolls}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentProtokoll ? (
            <div>
              <h4>Candidate</h4>
              <div>
                <label>
                  <strong>Kommentar:</strong>
                </label>{" "}
                {currentProtokoll.kommentar}
              </div>
              <div>
                <label>
                  <strong>Timestamp:</strong>
                </label>{" "}
                {currentProtokoll.timestamp}
              </div>
              <div>
                <label>
                  <strong>UserId:</strong>
                </label>{" "}
                {currentProtokoll.userid}
              </div>
              <div>
                <label>
                  <strong>ActioID:</strong>
                </label>{" "}
                {currentProtokoll.actionid}
              </div>
              
              <div>
                <label>
                  <strong>Value:</strong>
                </label>{" "}
                {currentProtokoll.value==="admin" ? "Published" : "Pending"}
              </div>

              <div className="table-wrapper">
      <Table className="table table-earnings table-earnings__challenge">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{currentProtokoll.kommentar}</td>
          <td>{currentProtokoll.userid}</td>
          <td>@{currentProtokoll.timestamp}</td>
        </tr>
        
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </div>
    <div>
              <br />
            </div>

              <Link
                to={"/protokolls/" + currentProtokoll.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Candidate...</p>
            </div>
          )}
        </div>




      </div>
      
    );
  }

}
