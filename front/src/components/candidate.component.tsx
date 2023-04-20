import { Component, ChangeEvent } from "react";
import { RouteComponentProps } from 'react-router-dom';

import CandidateDataService from "../services/candidate.service";
import ICandidateData from "../types/candidate.type";
import UserRoleDataService from "../services/userrole.service";
import IUserRoleData from "../types/userrole.type";
import "./component.css";
interface RouterProps { // type for `match.params`
  id: string; // must be type `string` since value comes from the URL
}

type Props = RouteComponentProps<RouterProps>;

type State = {
  currentCandidate1: ICandidateData;
  currentUserRole1: IUserRoleData;
  message: string;
}

export default class Candidate extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeHidden = this.onChangeHidden.bind(this);
    this.onChangeInactive = this.onChangeInactive.bind(this);
    this.onChangeMode = this.onChangeMode.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeBankdetails = this.onChangeBankdetails.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.getCandidate = this.getCandidate.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateCandidate = this.updateCandidate.bind(this);
    this.deleteCandidate = this.deleteCandidate.bind(this);
    //user roles
    this.updateUserRole = this.updateUserRole.bind(this);
    this.getUserRole = this.getUserRole.bind(this);

    this.state = {
      currentCandidate1: {
        id: null,
        name: "",
        hidden: "",
        inactive: "",
        mode: "",
      phone: "",
      address: "",
      bankdetails: "",
      email: "",
      username: "",
      },
      currentUserRole1: {
        createdAt: null,
        updatedAt: null,
        userId: "",
        roleId: "",
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getCandidate(this.props.match.params.id);
    this.getUserRole(this.props.match.params.id);
    this.updateUserRole("3")
  }

  onChangeName(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCandidate1: {
          ...prevState.currentCandidate1,
          name: name,
        },
      };
    });
  }

  //hidden
  onChangeHidden(e: ChangeEvent<HTMLInputElement>) {
    const hidden = e.target.value;

    this.setState((prevState) => ({
      currentCandidate1: {
        ...prevState.currentCandidate1,
        hidden: hidden,
      },
    }));
  }

  onChangeInactive(e: ChangeEvent<HTMLInputElement>) {
    const inactive = e.target.value;

    this.setState((prevState) => ({
      currentCandidate1: {
        ...prevState.currentCandidate1,
        inactive: inactive,
      },
    }));
  }

  onChangeMode(e: ChangeEvent<HTMLInputElement>) {
    const mode = e.target.value;

    this.setState((prevState) => ({
      currentCandidate1: {
        ...prevState.currentCandidate1,
        mode: mode,
      },
    }));
  }

  onChangePhone(e: ChangeEvent<HTMLInputElement>) {
    const phone = e.target.value;

    this.setState((prevState) => ({
      currentCandidate1: {
        ...prevState.currentCandidate1,
        phone: phone,
      },
    }));
  }

  onChangeAddress(e: ChangeEvent<HTMLInputElement>) {
    const address = e.target.value;

    this.setState((prevState) => ({
      currentCandidate1: {
        ...prevState.currentCandidate1,
        address: address,
      },
    }));
  }

  onChangeBankdetails(e: ChangeEvent<HTMLInputElement>) {
    const bankdetails = e.target.value;

    this.setState((prevState) => ({
      currentCandidate1: {
        ...prevState.currentCandidate1,
        bankdetails: bankdetails,
      },
    }));
  }

  onChangeEmail(e: ChangeEvent<HTMLInputElement>) {
    const email = e.target.value;

    this.setState((prevState) => ({
      currentCandidate1: {
        ...prevState.currentCandidate1,
        email: email,
      },
    }));
  }

  onChangePassword(e: ChangeEvent<HTMLInputElement>) {
    const password = e.target.value;

    this.setState((prevState) => ({
      currentCandidate1: {
        ...prevState.currentCandidate1,
        password: password,
      },
    }));
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
  
  getUserRole(id: string) {
    UserRoleDataService.get(id)
      .then((response: any) => {
        this.setState({
          currentUserRole1: response.data,
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  updatePublished(status: boolean) {
    const data: ICandidateData = {
      id: this.state.currentCandidate1.id,
      name: this.state.currentCandidate1.name,
      hidden: this.state.currentCandidate1.hidden,
      inactive: this.state.currentCandidate1.inactive,//status,
      mode: this.state.currentCandidate1.mode,
      phone: this.state.currentCandidate1.phone,
      address: this.state.currentCandidate1.address,
      bankdetails: this.state.currentCandidate1.bankdetails,
      email: this.state.currentCandidate1.email,
      username: this.state.currentCandidate1.username,
    };

    CandidateDataService.update(data, this.state.currentCandidate1.id)
      .then((response: any) => {
        this.setState((prevState) => ({
          currentCandidate1: {
            ...prevState.currentCandidate1,
            inactive: "",//status,
          },
          message: "The status was updated successfully!"
        }));
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  updateUserRole(status: string) {
    const data: IUserRoleData = {
      createdAt: this.state.currentUserRole1.createdAt,
      updatedAt: this.state.currentUserRole1.updatedAt,
      userId: this.state.currentUserRole1.userId,
      roleId: status//this.state.currentUserRole1.roleId,//status,
    };

    UserRoleDataService.update(data, this.state.currentUserRole1.userId)
      .then((response: any) => {
        this.setState((prevState) => ({
          currentUserRole1: {
            ...prevState.currentUserRole1,
            roleId: status,
          },
          message: "The UserRole was updated successfully!"
        }));
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  updateCandidate() {
    CandidateDataService.update(
      this.state.currentCandidate1,
      this.state.currentCandidate1.id
    )
      .then((response: any) => {
        console.log(response.data);
        this.setState({
          message: "The candidate was updated successfully!",
        });
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  deleteCandidate() {
    CandidateDataService.delete(this.state.currentCandidate1.id)
      .then((response: any) => {
        console.log(response.data);
        this.props.history.push("/candidates");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  render() {
    const { currentCandidate1,currentUserRole1 } = this.state;

    return (
      <div>
        {currentCandidate1 ? (
          <div className="edit-form">
            <h4>Candidate</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">NAME</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentCandidate1.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="hidden">HIDDEN</label>
                <input
                  type="text"
                  className="form-control"
                  id="hidden"
                  value={currentCandidate1.hidden}
                  onChange={this.onChangeHidden}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inactive">INACTIVE</label>
                <input
                  type="text"
                  className="form-control"
                  id="inactive"
                  value={currentCandidate1.inactive}
                  onChange={this.onChangeInactive}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mode">MODE</label>
                <input
                  type="text"
                  className="form-control"
                  id="mode"
                  value={currentCandidate1.mode}
                  onChange={this.onChangeMode}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">PHONE</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  value={currentCandidate1.phone}
                  onChange={this.onChangePhone}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">ADDRESS</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  value={currentCandidate1.address}
                  onChange={this.onChangeAddress}
                />
              </div>
              <div className="form-group">
                <label htmlFor="bankdetails">BANK DETAILS</label>
                <input
                  type="text"
                  className="form-control"
                  id="bankdetails"
                  value={currentCandidate1.bankdetails}
                  onChange={this.onChangeBankdetails}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">EMAIL</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={currentCandidate1.email}
                  onChange={this.onChangeEmail}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">PASSWORD</label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  value={currentCandidate1.username}
                  onChange={this.onChangePassword}
                />
              </div>

              
            </form>

            {currentUserRole1.roleId ==="2"? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateUserRole("1")}
              >
                User+{currentUserRole1.roleId}
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateUserRole("2")}
              >
                Moderator+{currentUserRole1.roleId}
              </button>
            )}




            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteCandidate}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateCandidate}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Candidate...</p>
          </div>
        )}
      </div>
    );
  }
}
