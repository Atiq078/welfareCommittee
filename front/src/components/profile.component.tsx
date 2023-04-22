import { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";
import IUser from "../types/user.type";
//Sajjad.1
import { ChangeEvent } from "react";
import React from "react";

import CandidateDataService from "../services/candidate.service";
import ActionDataService from "../services/action.service";
import ProtokollDataService from "../services/protokoll.service";
import ProtokollData from '../types/protokoll.type';

import SqlDataService from "../services/misc.service";
import SqlDataService0 from "../services/misc0.service";
import SqlDataService1 from "../services/misc1.service";
import SqlDataService2 from "../services/misc2.service";
import ICandidateData from '../types/candidate.type';
import IActionData from '../types/action.type';
import IProtokollData from '../types/protokoll.type';

import {ILoanLeft , ILastLoan,   IMaxInst ,   IMaxLoan ,  ILoanDuration ,  IInstPaid ,   IDueMonths ,
  IMinInstAmount,  ITotalBal ,  IAllMonthlyDues ,  IOverallBal,  IOverallLoan,IOverallLoanDues,
  IMembersCount} from "../types/misc.type"

import ILoanLeft0 from "../types/misc0.type"
import ILastLoan1 from "../types/misc1.type"
import ILastLoan2 from "../types/misc2.type"

import "./component.css";
//Sajjad.1 End

type Props = {};

type State = {
  redirect: string | null,
  userReady: boolean,
  currentUser: IUser & { accessToken: string },
  //Sajjad.2
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
  loanLeft: ILoanLeft,
  lastLoan: ILastLoan| null,   
  maxInst: IMaxInst| null,   
  maxLoan: IMaxLoan| null,  
  loanDuration:ILoanDuration| null,  
  instPaid: Array<IInstPaid>, 
  dueMonths: IDueMonths,
  minInstAmount: IMinInstAmount,  
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
  //Sajjad.2 End
}
export default class Profile extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    //Sajjad.3
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
    //Sajjad.3 End

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { accessToken: "" },
      //Sajjad.4
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
      loanLeft: {loan_left:""},
      lastLoan: null,   
      maxInst: null,   
      maxLoan: null,  
      loanDuration:null,  
      instPaid: [], 
      dueMonths: {due_months:""},
      minInstAmount: {min_instal:""},  
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
      //Sajjad.4 End
    };
  }

  //Sajjad.6
  /*componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }*/
  //Sajjad.6 End
  //Sajjad.5
  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })

    //let id: string; 
    let cid:string;
    //id = "22"
    cid = "1"
    this.retrieveCandidates();
    this.retrieveProtokolls();
    this.retrieveActions();
    this.getCandidate(currentUser.id);//"13");
    this.getLoanLeft0(currentUser.id, cid);
    this.getLastLoan1(currentUser.id, cid);
    this.getLastLoan2(currentUser.id, cid);
    //User Individuals
    this.getLoanLeft(currentUser.id, cid);
    this.getLastLoan(currentUser.id, cid);
    this.getMaxInst(cid);
    this.getMaxLoan(cid) ;
    this.getLoanDuration(currentUser.id, cid); 
    this.getInstPaid(currentUser.id, cid) ;
    this.getDueMonths(currentUser.id, cid) ;
    this.getMinInstAmount(currentUser.id,cid); 
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
//Sajjad.5 End
render() {
    //Sajjad.8
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
    //Sajjad.8 End
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div className="container">
        {(this.state.userReady) ?
          <div>
            <header className="jumbotron">
              <h3>
                <strong style={{ textTransform: 'uppercase'}}>{currentUser.name}'s</strong> Profile
              </h3>
            </header>
            <p>
              <strong>Token:</strong>{" "}
              {currentUser.accessToken.substring(0, 20)} ...{" "}
              {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
            </p>
            <p>
              <strong>Id:</strong>{" "}
              {currentUser.id}
            </p>
            <p>
              <strong>Name:</strong>{" "}
              {currentUser.name}
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              {currentUser.phone}
            </p>
            <p>
              <strong>Address:</strong>{" "}
              {currentUser.address}
            </p>
            <p>
              <strong>BankDetails:</strong>{" "}
              {currentUser.bankdetails}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              {currentUser.email}
            </p>
            <strong>Authorities:</strong>
            <ul>
              {currentUser.roles &&
                currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
            </ul>
          </div> : null}
        
        
        <div>
        <h3 style={{color: '#CECECE',background: '#353A40'}}>Individual Details</h3>
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
        {minInstAmount.min_instal ? (
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
        {loanLeft.loan_left ? (
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
        {instPaid.length>0 ? (
          
        <div className="table-wrapper">
        <table className="table table-earnings table-earnings__challenge">
        <tr key={"header"}>
                {Object.keys(instPaid[0]).map((key) => (
                  <th>{key}</th>
                ))}
              </tr>

          {instPaid.map((item =>
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
            <p>Total Installments Paid is not retrieved...</p>
          </div>
        )}
        </div>

        <div>
        <h5>Due Monthly Shares</h5>
        {dueMonths.due_months ? (
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

      </div>
    );
  }
}
