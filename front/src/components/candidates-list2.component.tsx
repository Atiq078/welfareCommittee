import { Component, ChangeEvent } from "react";
import CandidateDataService from "../services/candidate.service";
import ActionDataService from "../services/action.service";
import ProtokollDataService from "../services/protokoll.service";
import ProtokollData from '../types/protokoll.type';

import SqlDataService from "../services/misc.service";
import SqlDataService0 from "../services/misc0.service";
import SqlDataService1 from "../services/misc1.service";
import SqlDataService2 from "../services/misc2.service";
//import { Link } from "react-router-dom";
import ICandidateData from '../types/candidate.type';
import IActionData from '../types/action.type';
import IProtokollData from '../types/protokoll.type';

import {ILoanLeft , ILastLoan,   IMaxInst ,   IMaxLoan ,  ILoanDuration ,  IInstPaid ,   IDueMonths ,
  IMinInstAmount,  ITotalBal ,  IAllMonthlyDues ,  IOverallBal,  IOverallLoan,IOverallLoanDues,
  IMembersCount} from "../types/misc.type"

import ILoanLeft0 from "../types/misc0.type"
import ILastLoan1 from "../types/misc1.type"
import ILastLoan2 from "../types/misc2.type"

import React from "react";

//import Table from 'react-bootstrap/Table';

import "./component.css";
//import { green, red } from "@material-ui/core/colors";

type Props = {};


type State = {
  candidates: Array<ICandidateData>,
  protokolls: Array<IProtokollData>,
  currentCandidate: ICandidateData | null,
  currentIndex: number,
  searchName: string,
  
  actions: Array<IActionData>,
  currentAction: IActionData | null,
  currentIndexAction: number,
  searchAction: string,

  loanLeft0: ILoanLeft0,
  lastLoan1: ILastLoan1,
  lastLoan2: ILastLoan2,
  loanLeft: ILoanLeft| null,
  lastLoan: ILastLoan| null,   
  maxInst: IMaxInst| null,   
  maxLoan: IMaxLoan| null,  
  loanDuration:ILoanDuration| null,  
  instPaid: Array<IInstPaid>| null, 
  dueMonths: IDueMonths| null,
  minInstAmount: IMinInstAmount| null,  
  totalBal: ITotalBal| null,  
  allMonthlyDues: Array<IAllMonthlyDues>| null,  
  overallBal: Array<IOverallBal>| null,  
  overallLoan: Array<IOverallLoan>| null,
  overallLoanDues: Array<IOverallLoanDues>| null,
  membersCount: Array<IMembersCount> | null,

  currentCommittee: string,
  currentCandidate1: ICandidateData| null,
  message: string,
  //button
  
  currentProtokoll: ProtokollData ,
  submitted: boolean,
};


export default class CandidatesList extends Component<Props, State>{
  constructor(props: Props) {
    super(props);
    //this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveCandidates = this.retrieveCandidates.bind(this);
    this.retrieveProtokolls = this.retrieveProtokolls.bind(this);
    //this.refreshList = this.refreshList.bind(this);
    //this.setActiveCandidate = this.setActiveCandidate.bind(this);
    //this.removeAllCandidates = this.removeAllCandidates.bind(this);
    //this.searchName = this.searchName.bind(this);
    this.getLoanLeft0 = this.getLoanLeft0.bind(this);
    this.getLastLoan1 = this.getLastLoan1.bind(this);
    this.getLastLoan2 = this.getLastLoan2.bind(this);
    this.getCandidate = this.getCandidate.bind(this);
    //Admin
    this.getMembersCount = this.getMembersCount.bind(this);
    this.getOverallLoanDues = this.getOverallLoanDues.bind(this);
    this.getOverallLoan = this.getOverallLoan.bind(this);
    this.getOverallBal = this.getOverallBal.bind(this);
    this.getAllMonthlyDues = this.getAllMonthlyDues.bind(this);
    this.getTotalBal = this.getTotalBal.bind(this);
    //User
    this.getMinInstAmount = this.getMinInstAmount.bind(this);
    this.getDueMonths = this.getDueMonths.bind(this);
    this.getInstPaid = this.getInstPaid.bind(this);
    this.getLoanDuration = this.getLoanDuration.bind(this);
    this.getMaxLoan = this.getMaxLoan.bind(this);
    this.getMaxInst = this.getMaxInst.bind(this);
    this.getLastLoan = this.getLastLoan.bind(this);
    this.getLoanLeft = this.getLoanLeft.bind(this);
    //cand
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.onChangeSearchName2 = this.onChangeSearchName2.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveCandidate = this.setActiveCandidate.bind(this);
    this.searchName = this.searchName.bind(this);
    //actions
    this.onChangeSearchAction = this.onChangeSearchAction.bind(this);
    this.setActiveAction = this.setActiveAction.bind(this);
    this.searchAction = this.searchAction.bind(this);
    //payment protokol
    this.addPayment = this.addPayment.bind(this);
    this.onChangeKommentar = this.onChangeKommentar.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.saveProtokoll = this.saveProtokoll.bind(this);
    this.newProtokoll = this.newProtokoll.bind(this);



    this.state = {
      candidates: [],
      protokolls: [],
      currentCandidate: null,
      currentIndex: -1,
      searchName: "",
      
      actions: [],
      currentAction: null,
      currentIndexAction: -1,
      searchAction: "",
      loanLeft0: {
        loan_left: null,
      },
      lastLoan1: {
        name: "",
        address: "",
        username: "",
      },
      lastLoan2: {
        timestamp: "",
        value: "",
        kommentar: "",
      },     
      loanLeft: null,
      lastLoan: null,   
      maxInst: null,   
      maxLoan: null,  
      loanDuration:null,  
      instPaid: null, 
      dueMonths: null,
      minInstAmount: null,  
      totalBal: null,  
      allMonthlyDues: null,  
      overallBal: null,  
      overallLoan: null,
      overallLoanDues: null,
      membersCount: null,

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
      /*protokoll. payments*/
      currentProtokoll :{
        id: null,
        kommentar: "",
        userid: "",
        timestamp: "",
        value: "",
        actionid: "",
        cid: "1",
      },
      submitted: false
    };
  }
 
  componentDidMount() {
    
    let id: string; 
    let cid:string;
    id = "22"
    cid = "1"
    this.retrieveCandidates();
    this.retrieveProtokolls();
    this.retrieveActions();
    this.getCandidate("13");
    this.getLoanLeft0(id, cid);
    this.getLastLoan1(id, cid);
    this.getLastLoan2(id, cid);
    //User Individuals
    this.getLoanLeft(id, cid);
    this.getLastLoan(id, cid);
    this.getMaxInst(cid);
    this.getMaxLoan(cid) ;
    this.getLoanDuration(id, cid); 
    this.getInstPaid(id, cid) ;
    this.getDueMonths(id, cid) ;
    this.getMinInstAmount(id,cid); 
    //Admin
    this.getTotalBal(cid);
    this.getAllMonthlyDues(cid);
    this.getOverallBal(cid);
    this.getOverallLoan(cid);
    this.getOverallLoanDues(cid);
    this.getMembersCount();
  }
  
  refreshList() {
    this.retrieveCandidates();
    this.retrieveProtokolls();
    this.retrieveActions();
    this.setState({
      currentCandidate: null,
      currentIndex: -1,
      
      currentAction: null,
      currentIndexAction: -1
    });
  }
  
  //Action
  onChangeSearchAction(e: ChangeEvent<HTMLInputElement>) {
    const searchAction = e.target.value;

    this.setState({
      searchAction: searchAction
    });
  }

  
  retrieveActions() {
    ActionDataService.getAll()

      .then((response: any) => {
        this.setState({
          actions: response.data,
        });
        console.log(response.data);
  
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }



  setActiveAction(action: IActionData, index: number) {
    this.setState({
      currentAction: action,
      currentIndexAction: index,
      
    });
  }


  searchAction() {
    this.setState({
      currentAction: null,
      currentIndexAction: -1
    });

    ActionDataService.findByTitle(this.state.searchAction)
      .then((response: any) => {
        this.setState({
          actions: response.data
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }
  //Protokolls
  retrieveProtokolls() {
    ProtokollDataService.getAll()

      .then((response: any) => {
        this.setState({
          protokolls: response.data,
        });
        console.log(response.data);
  
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }
  //Candidates
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

  setActiveCandidate(candidate: ICandidateData, index: number) {
    this.setState({
      currentCandidate: candidate,
      currentIndex: index,
      //submitted: false,
    });
  }

  
  
  onChangeSearchName(e: ChangeEvent<HTMLInputElement>) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }
  
  
  onChangeSearchName2(e: ChangeEvent<HTMLInputElement>) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName,
      currentCandidate: null,
      currentIndex: -1
    });
    CandidateDataService.findByTitle(this.state.searchName)
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

  searchName() {
    this.setState({
      currentCandidate: null,
      currentIndex: -1
    });

    CandidateDataService.findByTitle(this.state.searchName)
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
  //tests
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

  getLoanLeft0(id:string, cid:string) {
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

getLastLoan1(id:string, cid:string) {
    SqlDataService1.findLastLoanByIdandCid(id,cid)
      .then((response: any) => {
        this.setState({
          lastLoan1: response.data,
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

  //User Individuals
getLoanLeft(id:string, cid:string) {
  SqlDataService.findLoanLeftByIdandCid(id,cid)
    .then((response: any) => {
      this.setState({
        loanLeft: response.data,
      });
      console.log(response.data);
    })
    .catch((e: Error) => {
      console.log(e);
    });
}

getLastLoan(id:string, cid:string) {
  SqlDataService.findLastLoanByIdandCid(id,cid)
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

getMaxInst(cid:string) {
  SqlDataService.findMaxInstByCid(cid)
    .then((response: any) => {
      this.setState({
        maxInst: response.data,
      });
      console.log(response.data);
    })
    .catch((e: Error) => {
      console.log(e);
    });
}

getMaxLoan(cid:string) {
  SqlDataService.findMaxLoanByCid(cid)
    .then((response: any) => {
      this.setState({
        maxLoan: response.data,
      });
      console.log(response.data);
    })
    .catch((e: Error) => {
      console.log(e);
    });
}

getLoanDuration(id:string, cid:string) {
  SqlDataService.findLoanDurationByIdandCid(id,cid)
    .then((response: any) => {
      this.setState({
        loanDuration: response.data,
      });
      console.log(response.data);
    })
    .catch((e: Error) => {
      console.log(e);
    });
}

getInstPaid(id:string, cid:string) {
  SqlDataService.findInstPaidByIdandCid(id,cid)
    .then((response: any) => {
      this.setState({
        instPaid: response.data,
      });
      console.log(response.data);
    })
    .catch((e: Error) => {
      console.log(e);
    });
}

getDueMonths(id:string, cid:string) {
  SqlDataService.findDueMonthsByIdandCid(id,cid)
    .then((response: any) => {
      this.setState({
        dueMonths: response.data,
      });
      console.log(response.data);
    })
    .catch((e: Error) => {
      console.log(e);
    });
}


getMinInstAmount(id:string, cid:string) {
  SqlDataService.findMinInstAmountByIdandCid(id,cid)
    .then((response: any) => {
      this.setState({
        minInstAmount: response.data,
      });
      console.log(response.data);
    })
    .catch((e: Error) => {
      console.log(e);
    });
}

//Admin

getTotalBal(cid:string) {
  SqlDataService.findTotalBalByCid(cid)
    .then((response: any) => {
      this.setState({
        totalBal: response.data,
      });
      console.log(response.data);
    })
    .catch((e: Error) => {
      console.log(e);
    });
}

getAllMonthlyDues(cid:string) {
  SqlDataService.findAllMonthlyDuesByCid(cid)
    .then((response: any) => {
      this.setState({
        allMonthlyDues: response.data,
      });
      console.log(response.data);
    })
    .catch((e: Error) => {
      console.log(e);
    });
}

getOverallBal(cid:string) {
  SqlDataService.findOverallBalByCid(cid)
    .then((response: any) => {
      this.setState({
        overallBal: response.data,
      });
      console.log(response.data);
    })
    .catch((e: Error) => {
      console.log(e);
    });
}

getOverallLoan(cid:string) {
  SqlDataService.findOverallLoanByCid(cid)
    .then((response: any) => {
      this.setState({
        overallLoan: response.data,
      });
      console.log(response.data);
    })
    .catch((e: Error) => {
      console.log(e);
    });
}
getOverallLoanDues(cid:string) {
  SqlDataService.findOverallLoanDuesByCid(cid)
    .then((response: any) => {
      this.setState({
        overallLoanDues: response.data,
      });
      console.log(response.data);
    })
    .catch((e: Error) => {
      console.log(e);
    });
}
getMembersCount() {
  SqlDataService.findMembersCount()
    .then((response: any) => {
      this.setState({
        membersCount: response.data,
      });
      console.log("test1");
      console.log(response.data);
      console.log("test2");
    })
    .catch((e: Error) => {
      console.log(e);
    });
}
//Protokoll/Payment
addPayment(candidate_id:string,action_id:string,committee_id:string,)
{

}


onChangeKommentar(e: ChangeEvent<HTMLInputElement>) {
  const kommentar = e.target.value;

  this.setState(function (prevState) {
    return {
      currentProtokoll: {
        ...prevState.currentProtokoll,
        kommentar: kommentar,
      },
    };
  });
}

onChangeValue(e: ChangeEvent<HTMLInputElement>) {
  const value = e.target.value;

  this.setState((prevState) => ({
    currentProtokoll: {
      ...prevState.currentProtokoll,
      value: value,
    },
  }));
}

saveProtokoll() {
  const data: ProtokollData = {
    //id: this.state.currentProtokoll.id,
    kommentar: this.state.currentProtokoll.kommentar,
    //userid: this.state.currentProtokoll.userid,
    userid: this.state.currentCandidate?.id,
    //timestamp: this.state.currentProtokoll.timestamp,//status,
    value: this.state.currentProtokoll.value,
    //actionid: this.state.currentProtokoll.actionid,
    actionid: this.state.currentAction?.id,
    cid: this.state.currentCommittee,
    //approved: status,

  };

  
  ProtokollDataService.create(data)
    .then((response: any) => {
      this.setState((prevState) => ({
        currentProtokoll: {
          ...prevState.currentProtokoll,
        },
        submitted: true,
      }));
      console.log(response.data);
    })
    .catch((e: Error) => {
      console.log(e);
    });
}

newProtokoll() {
  this.setState({
    currentProtokoll :{
      id: null,
      kommentar: "",
      userid: "",
      timestamp: "",
      value: "",
      actionid: "",
      cid: "1",
    },
    submitted: false}
  );
}

  render() {
  const {  searchName, candidates, protokolls, currentCandidate,currentCandidate1, currentIndex, 
    /*searchAction,*/ actions, currentAction, currentIndexAction,
    loanLeft0, lastLoan1, lastLoan2,
    //User
    loanLeft,
    lastLoan,   
    maxInst,   
    maxLoan,  
    loanDuration,  
    instPaid, 
    dueMonths,
    minInstAmount, 
    //Admin
    totalBal,  allMonthlyDues,  overallBal,  overallLoan, overallLoanDues, membersCount,
    //Protokoll/Payment
    submitted, currentProtokoll } = this.state;
    
    return (
 

      <div>

        <div>
        <h3 style={{color: '#ffCC00',background: '#00CC00'}}>Current Candidate</h3>
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
            <p>User Name: {currentCandidate1.username}</p>
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
        <h3 style={{color: '#ffCC00',background: '#00CC00'}}>Tests</h3>
        <h5>Current Loan Left</h5>
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
        <h5>Last Loan</h5>
        {lastLoan1 ? (
          <div>
            <p></p>
            <p>Timestamp: {lastLoan1.name}</p>
            <p>loan: {lastLoan1.address}</p>
            <p>kommentar: {lastLoan1.username}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Candidate...</p>
          </div>
        )}
        </div>

        <div>
        <h5>Last Loan2</h5>
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



        <div>
        <h3 style={{color: '#ffCC00',background: '#00CC00'}}>Individual Details</h3>
        <h5>Members Count</h5>
        {membersCount ? (
          <div>
            <p></p>
            <p>Active Members: {membersCount[0].active_members}</p>
            <p>InActive Members: {membersCount[0].inactive_members}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Member Count is not retrieved...</p>
          </div>
        )}
        </div>


        <div>
        <h5>Max Installments</h5>
        {maxInst ? (
          <div>
            <p></p>
            <p>Max No. of Inst: {maxInst.maxinst}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Max Installments is not retrieved...</p>
          </div>
        )}
        </div>
        <div>
        <h5>Max Loan</h5>
        {maxLoan ? (
          <div>
            <p></p>
            <p>Max Possible Loan: {maxLoan.loan}</p>
            <p>Max No. of Inst: {maxLoan.maxinst}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Max Loan  is not retrieved...</p>
          </div>
        )}
        </div>

        <div>
        <h5>The Last Loan Taken</h5>
        {lastLoan ? (
          <div>
            <p></p>
            <p>Comment: {lastLoan.kommentar}</p>
            <p>Loan Amount: {lastLoan.loan}</p>
            <p>Time Stamp: {lastLoan.timestamp}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Last loan is not retrieved...</p>
          </div>
        )}
        </div>

        <div>
        <h5>Last Loan Duration</h5>
        {loanDuration ? (
          <div>
            <p></p>
            <p>Start Month: {loanDuration.loan_start}</p>
            <p>End Month: {loanDuration.loan_end}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Loan duration is not retrieved...</p>
          </div>
        )}
        </div>

        <div>
        <h5>Min. Installment Amount</h5>
        {minInstAmount ? (
          <div>
            <p></p>
            <p>Installment Amount: {minInstAmount.min_instal}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Min Installment Amount is not retrieved...</p>
          </div>
        )}
        </div>


        <div>
        <h5>Loan Due Till Now</h5>
        {loanLeft ? (
          <div>
            <p></p>
            <p>Amount Due: {loanLeft.loan_left}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Loan Left is not retrieved...</p>
          </div>
        )}
        </div>


        <div>
        <h5>Total Installments Paid</h5>
        {instPaid ? (
          <div>
            <p></p>
            <p>timestamp: {instPaid[0].timestamp}</p>
            <p>installment: {instPaid[0].installment}</p>
            <p>kommentar: {instPaid[0].kommentar}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Installment Paid is not retrieved...</p>
          </div>
        )}
        </div>

        <div>
        <h5>Due Monthly Shares</h5>
        {dueMonths ? (
          <div>
            <p></p>
            <p>No. of Due Months: {dueMonths.due_months}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Due Months is not retrieved...</p>
          </div>
        )}
        </div>


        <div>
        <h3 style={{color: '#ffCC00',background: '#00CC00'}}>Administration</h3>
        <h5>Members Count</h5>
        {membersCount ? (
          <div>
            <p></p>
            <p>Active Members: {membersCount[0].active_members}</p>
            <p>InActive Members: {membersCount[0].inactive_members}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Member Count is not retrieved...</p>
          </div>
        )}
        </div>


        <div>
        <h5>Max Installments</h5>
        {maxInst ? (
          <div>
            <p></p>
            <p>Max No. of Inst: {maxInst.maxinst}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Max Installments is not retrieved...</p>
          </div>
        )}
        </div>
        <div>
        <h5>Max Loan</h5>
        {maxLoan ? (
          <div>
            <p></p>
            <p>Max Possible Loan: {maxLoan.loan}</p>
            <p>Max No. of Inst: {maxLoan.maxinst}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Max Loan is not retrieved...</p>
          </div>
        )}
        </div>

        <div>
        <h5>Welfare Total Balance</h5>
        {totalBal ? (
          <div>
            <p></p>
            <p>Total Balance: {totalBal.total_bal}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Total Balance is not retrieved...</p>
          </div>
        )}
        </div>
        
        <div>
        <h5>All Monthly Dues using Tables</h5>
        {allMonthlyDues ? (
          
        <div className="table-wrapper">
        <table className="table table-earnings table-earnings__challenge">
        <tr key={"header"}>
                {Object.keys(allMonthlyDues[0]).map((key) => (
                  <th>{key}</th>
                ))}
              </tr>

          {allMonthlyDues.map((item =>
          <tr key={item.id}> 
          {Object.values(item).map((val) => (
                    <td>{val}</td>
                  ))}

          </tr>
          ))}
        </table>        
        </div>
        ) : (
          <div>
            <br />
            <p>All Monthly Dues is not retrieved...</p>
          </div>
        )}
        </div>

        <div>
        <h5>Overall Balance Using Tables</h5>
        {overallBal ? (
          
        <div className="table-wrapper">
        <table className="table table-earnings table-earnings__challenge">
        <tr key={"header"}>
                {Object.keys(overallBal[0]).map((key) => (
                  <th>{key}</th>
                ))}
              </tr>

          {overallBal.map((item =>
          <tr key={item.id}> 
          {Object.values(item).map((val) => (
                    <td>{val}</td>
                  ))}

          </tr>
          ))}
        </table>        
        </div>
        ) : (
          <div>
            <br />
            <p>Overall Balance is not retrieved...</p>
          </div>
        )}
        </div>

        <div>
        <h5>Overall Loan Using Tables</h5>
        {overallLoan ? (
          
        <div className="table-wrapper">
        <table className="table table-earnings table-earnings__challenge">
        <tr key={"header"}>
                {Object.keys(overallLoan[0]).map((key) => (
                  <th>{key}</th>
                ))}
              </tr>

          {overallLoan.map((item =>
          <tr key={item.id}> 
          {Object.values(item).map((val) => (
                    <td>{val}</td>
                  ))}

          </tr>
          ))}
        </table>        
        </div>
        ) : (
          <div>
            <br />
            <p>Overall loan is not retrieved...</p>
          </div>
        )}
        </div>
        
        
        <div>
        <h5>Overall Loan Left</h5>
        {overallLoanDues ? (
          
        <div className="table-wrapper">
        <table className="table table-earnings table-earnings__challenge">
        <tr key={"header"}>
                {Object.keys(overallLoanDues[0]).map((key) => (
                  <th>{key}</th>
                ))}
              </tr>

          {overallLoanDues.map((item =>
          <tr key={item.id}> 
          {Object.values(item).map((val) => (
                    <td>{val}</td>
                  ))}

          </tr>
          ))}
        </table>        
        </div>
        ) : (
          <div>
            <br />
            <p>Overall Loan Dues is not retrieved...</p>
          </div>
        )}
        </div>
        
        <div>
        <h3 style={{color: '#ffCC00',background: '#00CC00'}}>Payments</h3>
        <h5>Select User</h5>
        <div className="col-md-6">
          <div className="col-md-8">

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              value={searchName}
              onChange={this.onChangeSearchName2}
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
        </div>
        </div>

        <div>
        <h5>Select Action</h5>
        <div className="col-md-6">
          <ul className="list-group">
            {actions &&
              actions.map((action: IActionData, index: number) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndexAction ? "active" : "")
                  }
                  onClick={() => this.setActiveAction(action, index)}
                  key={index}
                >
                  {action.description}
                </li>
              ))}
          </ul>
        </div>
        </div>

        <div>
        {currentCandidate && currentAction ? (
            <div>
              <h5>Selected Candidate</h5>              
              <div>
              <p>ID: {currentCandidate.id}</p>
              <p>Name: {currentCandidate.name}</p>
              </div>
              <h5>Selected Action</h5>
              <div>
              <p>ID: {currentAction.id}</p>
              <p>Description: {currentAction.description}</p>
              </div>
              {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newProtokoll}>
              Add
            </button>
          </div>
        ) : (
          <div >
            <h5>Enter the Amount and relevant comment.</h5> 
            <div className="form-group" style={{width: '300px'}}>
              <label htmlFor="kommentar">Comments</label>
              <input
                type="text"
                className="form-control"
                id="kommentar"
                required
                value={currentProtokoll.kommentar}
                onChange={this.onChangeKommentar}
                name="kommentar"
              />
            </div>

            <div className="form-group" style={{width: '300px'}}>
              <label htmlFor="value">Amount (in 1000s, e.g., for 5000 just enter 5.)</label>
              <input
                type="text"
                className="form-control"
                id="value"
                required
                value={currentProtokoll.value}
                onChange={this.onChangeValue}
                name="value"
              />
            </div>

            <button onClick={this.saveProtokoll} className="btn btn-success">
              Submit
            </button>
          </div>
        )}

            </div>
          ) : (
            <div>
              <br />
              <p>Please select an Action and Candidate...</p>
            </div>
          )}
        </div>


        <div>
        <h3 style={{color: '#ffCC00',background: '#00CC00'}}>All Candidates and Protokolls</h3>
        <h5>All Candidates</h5>
        {candidates.length > 0 ? (
          
          <div className="table-wrapper" style={{width: '80%'}}>
        <table className="table table-earnings table-earnings__challenge">
        <tr key={"header"}>
                {Object.keys(candidates[0]).map((key) => (
                  <th>{key}</th>
                ))}
              </tr>

          {candidates.map((item =>
          <tr key={item.id}> 
          {Object.values(item).map((val) => (
                    <td>{val}</td>
                  ))}

          </tr>
          ))}
        </table>        
        </div>
        ) : (
          <div>
            <br />
            <p>Candidates is not retrieved...</p>
          </div>
        )}
        </div>


        <div>
        <h5>All Protokolls logs</h5>
        {protokolls.length > 0 ? (
          
        <div className="table-wrapper" style={{width: '80%'}}>
        <table className="table table-earnings table-earnings__challenge">
        <tr key={"header"}>
                {Object.keys(protokolls[0]).map((key) => (
                  <th>{key}</th>
                ))}
              </tr>

          {protokolls.map((item =>
          <tr key={item.id}> 
          {Object.values(item).map((val) => (
                    <td>{val}</td>
                  ))}

          </tr>
          ))}
        </table>        
        </div>
        ) : (
          <div>
            <br />
            <p>Protokolls is not retrieved...</p>
          </div>
        )}
        </div>

      </div>
    );
  }

}
