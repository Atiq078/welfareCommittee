import { Component, ChangeEvent } from "react";
import CandidateDataService from "../services/candidate.service";
import { Link } from "react-router-dom";
import ICandidateData from '../types/candidate.type';
import React from "react";

import Table from 'react-bootstrap/Table';

//import ListGroup from 'react-bootstrap/ListGroup';
import "./component.css";

type Props = {};

type State = {
  candidates: Array<ICandidateData>,
  currentCandidate: ICandidateData | null,
  currentIndex: number,
  searchName: string,
  userName1: string
};

export default class CandidatesList extends Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveCandidates = this.retrieveCandidates.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveCandidate = this.setActiveCandidate.bind(this);
    this.removeAllCandidates = this.removeAllCandidates.bind(this);
    this.searchName = this.searchName.bind(this);

    this.state = {
      candidates: [],
      currentCandidate: null,
      currentIndex: -1,
      searchName: "",
      userName1: ""
    };
  }

  componentDidMount() {
    this.retrieveCandidates();
  }

  onChangeSearchName(e: ChangeEvent<HTMLInputElement>) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  retrieveCandidates() {
    CandidateDataService.getAll()



      .then((response: any) => {
        var loopData = ''
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].name==="Anees") {
            loopData += `<h4>${response.data[i].name}</h4>`   
          }
        }  
        this.setState({
          candidates: response.data,
          userName1: loopData
        });
        console.log(response.data);
  
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveCandidates();
    this.setState({
      currentCandidate: null,
      currentIndex: -1
    });
  }

  setActiveCandidate(candidate: ICandidateData, index: number) {
    this.setState({
      currentCandidate: candidate,
      currentIndex: index
    });
  }

  removeAllCandidates() {
    CandidateDataService.deleteAll()
      .then((response: any) => {
        console.log(response.data);
        this.refreshList();
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  searchName() {
    this.setState({
      currentCandidate: null,
      currentIndex: -1
    });

    CandidateDataService.findByTitle("Anees")
    //CandidateDataService.findByTitle(this.state.searchName)
      .then((response: any) => {
        this.setState({
          candidates: response.data
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  

 
  render() {
    const { searchName, candidates, currentCandidate, currentIndex,userName1 } = this.state;
    

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              value={searchName}
              onChange={this.onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Candidates List{userName1}</h4>


          <ol>
      {candidates && candidates.map((reptile: ICandidateData, index: number) => (
        <li key={index}>{(reptile.mode) === "admin" ? "Administrator" : "" }</li>
      ))}
    </ol>

          <ul className="list-group">
          
            {candidates &&
              candidates.map((candidate: ICandidateData, index: number) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveCandidate(candidate, index)}
                  key={index}
                >
                  {candidate.name}
                </li>
              ))}
          </ul>



          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllCandidates}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentCandidate ? (
            <div>
              <h4>Candidate</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentCandidate.name}
              </div>
              <div>
                <label>
                  <strong>InActive:</strong>
                </label>{" "}
                {currentCandidate.inactive}
              </div>
              <div>
                <label>
                  <strong>Hidden:</strong>
                </label>{" "}
                {currentCandidate.hidden}
              </div>
              <div>
                <label>
                  <strong>Phone:</strong>
                </label>{" "}
                {currentCandidate.phone}
              </div>
              <div>
                <label>
                  <strong>Address:</strong>
                </label>{" "}
                {currentCandidate.address}
              </div>
              <div>
                <label>
                  <strong>Bank Details:</strong>
                </label>{" "}
                {currentCandidate.bankdetails}
              </div>
              <div>
                <label>
                  <strong>Email:</strong>
                </label>{" "}
                {currentCandidate.email}
              </div>
              <div>
                <label>
                  <strong>Password:</strong>
                </label>{" "}
                {currentCandidate.password}
              </div>
              <div>
                <label>
                  <strong>Mode:</strong>
                </label>{" "}
                {currentCandidate.mode==="admin" ? "Published" : "Pending"}
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
          <td>{currentCandidate.name}</td>
          <td>{currentCandidate.hidden}</td>
          <td>@{currentCandidate.inactive}</td>
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
                to={"/candidates/" + currentCandidate.id}
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
