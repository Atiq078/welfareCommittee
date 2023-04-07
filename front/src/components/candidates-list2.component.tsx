import { Component, ChangeEvent } from "react";
import CandidateDataService from "../services/candidate.service";
import SqlDataService0 from "../services/misc0.service";
import SqlDataService1 from "../services/misc1.service";
import SqlDataService2 from "../services/misc2.service";
import { Link } from "react-router-dom";
import ICandidateData from '../types/candidate.type';
//import {ILoanLeft , /*ILastLoan,   IMaxInst ,   IMaxLoan ,  ILoanDuration ,  IInstPaid ,   IDueMonths ,IMinInstAmount,  ITotalBal ,  IAllMonthlyDues ,  IOverallBal,  IOverallLoan,IOverallLoanDues,*/} from "../types/misc.type"
import ILoanLeft0 from "../types/misc0.type"
import ILastLoan from "../types/misc1.type"
import ILastLoan2 from "../types/misc2.type"

import React from "react";

import Table from 'react-bootstrap/Table';

import "./component.css";

type Props = {};

type State = {
  candidates: Array<ICandidateData>,
  currentCandidate: ICandidateData | null,
  loanLeft0: ILoanLeft0,
  lastLoan: ILastLoan,
  lastLoan2: ILastLoan2,
  currentIndex: number,
  searchName: string,
  currentCommittee: string,
  currentCandidate1: ICandidateData| null,
  message: string,
};

export default class CandidatesList extends Component<Props, State>{
  constructor(props: Props) {
    super(props);
    //this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveCandidates = this.retrieveCandidates.bind(this);
    //this.refreshList = this.refreshList.bind(this);
    //this.setActiveCandidate = this.setActiveCandidate.bind(this);
    //this.removeAllCandidates = this.removeAllCandidates.bind(this);
    //this.searchName = this.searchName.bind(this);
    this.getLoanLeft = this.getLoanLeft.bind(this);
    this.getLastLoan = this.getLastLoan.bind(this);
    this.getLastLoan2 = this.getLastLoan2.bind(this);
    this.getCandidate = this.getCandidate.bind(this);

    this.state = {
      candidates: [],
      currentCandidate: null,
      loanLeft0: {
        loan_left: null,
      },
      lastLoan: {
        name: "",
        address: "",
        username: "",
      },
      lastLoan2: {
        timestamp: "",
        value: "",
        kommentar: "",
      },     
      currentIndex: -1,
      searchName: "",
      currentCommittee: "1",
      currentCandidate1: null,/* {
        id: null,
        name: "",
        hidden: "",
        inactive: "",
        mode: "",
      phone: "",
      address: "",
      bankdetails: "",
      email: "",
      password: "",
      },*/
      message: "",
    };
  }
 
  componentDidMount() {
    //this.retrieveCandidates();
    //this.getCandidate("13");
    this.getLoanLeft("22","1");
    this.getLastLoan("22","1");
    this.getLastLoan2("22","1");

  }

  
  getCandidate(id: string) {
    CandidateDataService.get(id)
      .then((response: any) => {
        this.setState({
          currentCandidate1: response.data,
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  getLoanLeft(id:string, cid:string) {
    SqlDataService0.findLoanLeftByIdandCid(id,cid)
      .then((response: any) => {
        this.setState({
          loanLeft0: response.data,
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  getLastLoan(id:string, cid:string) {
    SqlDataService1.findLastLoanByIdandCid(id,cid)
      .then((response: any) => {
        this.setState({
          lastLoan: response.data,
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  getLastLoan2(id:string, cid:string) {
    SqlDataService2.findLastLoan2ByIdandCid(id,cid)
      .then((response: any) => {
        this.setState({
          lastLoan2: response.data,
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  
  retrieveCandidates() {
    CandidateDataService.getAll()

      .then((response: any) => {
        this.setState({
          candidates: response.data,
        });
        console.log(response.data);
  
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

 
  render() {
  const {  currentCandidate1, currentIndex, loanLeft0, lastLoan, lastLoan2 } = this.state;
    
    return (
 

      <div>
        <div>
        <h3>Current Candidate</h3>
        {currentCandidate1 ? (
          <div>
            <p></p>
            <p>Name: {currentCandidate1.name}</p>
            <p>Hidden: {currentCandidate1.hidden}</p>
            <p>Inactive: {currentCandidate1.inactive}</p>
            <p>Mode: {currentCandidate1.mode}</p>
            <p>Phone: {currentCandidate1.phone}</p>
            <p>Address: {currentCandidate1.address}</p>
            <p>Bank Details: {currentCandidate1.bankdetails}</p>
            <p>Email: {currentCandidate1.email}</p>
            <p>Password: {currentCandidate1.password}</p>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Candidate...</p>
          </div>
        )}
        </div>


        <div>
        <h2>Tests</h2>
        <h3>Current Loan Left</h3>
        {loanLeft0 ? (
          <div>
            <p></p>
            <p>Loan Left: {loanLeft0.loan_left}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Candidate...</p>
          </div>
        )}
        </div>


        <div>
        <h3>Last Loan</h3>
        {lastLoan ? (
          <div>
            <p></p>
            <p>Timestamp: {lastLoan.name}</p>
            <p>loan: {lastLoan.address}</p>
            <p>kommentar: {lastLoan.username}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Candidate...</p>
          </div>
        )}
        </div>

        <div>
        <h3>Last Loan2</h3>
        {lastLoan2 ? (
          <div>
            <p></p>
            <p>Timestamp: {lastLoan2.timestamp}</p>
            <p>loan: {lastLoan2.value}</p>
            <p>kommentar: {lastLoan2.kommentar}</p>
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
