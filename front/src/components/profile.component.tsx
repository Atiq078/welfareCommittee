import { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";
import IUser from "../types/user.type";
//Sajjad.1
import CandidateDataService from "../services/candidate.service";
import SqlDataService from "../services/misc.service";
import ICandidateData from '../types/candidate.type';

import {ILoanLeft , ILastLoan,   IMaxInst ,   IMaxLoan ,  ILoanDuration ,  IInstPaid ,   IDueMonths ,
  IMinInstAmount,  
  IMembersCount} from "../types/misc.type"

import "./component.css";
//Sajjad.1 End

type Props = {};

type State = {
  redirect: string | null,
  userReady: boolean,
  currentUser: IUser & { accessToken: string },
  //Sajjad.2
  candidates: Array<ICandidateData>,
  currentCandidate: ICandidateData | null,
  loanLeft: ILoanLeft,
  lastLoan: ILastLoan| null,   
  maxInst: IMaxInst| null,   
  maxLoan: IMaxLoan| null,  
  loanDuration:ILoanDuration| null,  
  instPaid: Array<IInstPaid>, 
  dueMonths: IDueMonths,
  minInstAmount: IMinInstAmount, 
  membersCount: Array<IMembersCount> | null,
  currentCommittee: string,

  message: string,
  submitted: boolean,
  //Sajjad.2 End
}
export default class Profile extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    //Sajjad.3
    this.retrieveCandidates = this.retrieveCandidates.bind(this);

    //User
    this.getMembersCount = this.getMembersCount.bind(this);
    this.getMinInstAmount = this.getMinInstAmount.bind(this);
    this.getDueMonths = this.getDueMonths.bind(this);
    this.getInstPaid = this.getInstPaid.bind(this);
    this.getLoanDuration = this.getLoanDuration.bind(this);
    this.getMaxLoan = this.getMaxLoan.bind(this);
    this.getMaxInst = this.getMaxInst.bind(this);
    this.getLastLoan = this.getLastLoan.bind(this);
    this.getLoanLeft = this.getLoanLeft.bind(this);
    //Sajjad.3 End

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { accessToken: "" },
      //Sajjad.4
      candidates: [],
      currentCandidate: null,
          
      loanLeft: {loan_left:""},
      lastLoan: null,   
      maxInst: null,   
      maxLoan: null,  
      loanDuration:null,  
      instPaid: [], 
      dueMonths: {due_months:""},
      minInstAmount: {min_instal:""},  
      membersCount: null,

      currentCommittee: "1",
      message: "",
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
    //User Individuals
    this.getLoanLeft(currentUser.id, cid);
    this.getLastLoan(currentUser.id, cid);
    this.getMaxInst(cid);
    this.getMaxLoan(cid) ;
    this.getLoanDuration(currentUser.id, cid); 
    this.getInstPaid(currentUser.id, cid) ;
    this.getDueMonths(currentUser.id, cid) ;
    this.getMinInstAmount(currentUser.id,cid); 
    this.getMembersCount();
  }
  
  refreshList() {
    this.retrieveCandidates();
    this.setState({
      currentCandidate: null,
      
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
      //submitted: false,
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


getMembersCount() {
  SqlDataService.findMembersCount()
    .then((response: any) => {
      this.setState({
        membersCount: response.data,
      });
      console.log(response.data);
    })
    .catch((e: Error) => {
      console.log(e);
    });
}



//Sajjad.5 End
render() {
    //Sajjad.8
    const {  
      //User
      loanLeft,
      lastLoan,   
      maxInst,   
      maxLoan,  
      loanDuration,  
      instPaid, 
      dueMonths,
      minInstAmount, 
      membersCount,
      } = this.state;
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
