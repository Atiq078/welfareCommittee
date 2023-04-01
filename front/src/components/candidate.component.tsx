import { Component, ChangeEvent } from "react";
import { RouteComponentProps } from 'react-router-dom';

import CandidateDataService from "../services/candidate.service";
import ICandidateData from "../types/candidate.type";

interface RouterProps { // type for `match.params`
  id: string; // must be type `string` since value comes from the URL
}

type Props = RouteComponentProps<RouterProps>;

type State = {
  currentCandidate: ICandidateData;
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

    this.state = {
      currentCandidate: {
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
      },
      message: "",
    };
  }

  componentDidMount() {
    this.getCandidate(this.props.match.params.id);
  }

  onChangeName(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentCandidate: {
          ...prevState.currentCandidate,
          name: name,
        },
      };
    });
  }

  //hidden
  onChangeHidden(e: ChangeEvent<HTMLInputElement>) {
    const hidden = e.target.value;

    this.setState((prevState) => ({
      currentCandidate: {
        ...prevState.currentCandidate,
        hidden: hidden,
      },
    }));
  }

  onChangeInactive(e: ChangeEvent<HTMLInputElement>) {
    const inactive = e.target.value;

    this.setState((prevState) => ({
      currentCandidate: {
        ...prevState.currentCandidate,
        inactive: inactive,
      },
    }));
  }

  onChangeMode(e: ChangeEvent<HTMLInputElement>) {
    const mode = e.target.value;

    this.setState((prevState) => ({
      currentCandidate: {
        ...prevState.currentCandidate,
        mode: mode,
      },
    }));
  }

  onChangePhone(e: ChangeEvent<HTMLInputElement>) {
    const phone = e.target.value;

    this.setState((prevState) => ({
      currentCandidate: {
        ...prevState.currentCandidate,
        phone: phone,
      },
    }));
  }

  onChangeAddress(e: ChangeEvent<HTMLInputElement>) {
    const address = e.target.value;

    this.setState((prevState) => ({
      currentCandidate: {
        ...prevState.currentCandidate,
        address: address,
      },
    }));
  }

  onChangeBankdetails(e: ChangeEvent<HTMLInputElement>) {
    const bankdetails = e.target.value;

    this.setState((prevState) => ({
      currentCandidate: {
        ...prevState.currentCandidate,
        bankdetails: bankdetails,
      },
    }));
  }

  onChangeEmail(e: ChangeEvent<HTMLInputElement>) {
    const email = e.target.value;

    this.setState((prevState) => ({
      currentCandidate: {
        ...prevState.currentCandidate,
        email: email,
      },
    }));
  }

  onChangePassword(e: ChangeEvent<HTMLInputElement>) {
    const password = e.target.value;

    this.setState((prevState) => ({
      currentCandidate: {
        ...prevState.currentCandidate,
        password: password,
      },
    }));
  }

  getCandidate(id: string) {
    CandidateDataService.get(id)
      .then((response: any) => {
        this.setState({
          currentCandidate: response.data,
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  updatePublished(status: boolean) {
    const data: ICandidateData = {
      id: this.state.currentCandidate.id,
      name: this.state.currentCandidate.name,
      hidden: this.state.currentCandidate.hidden,
      inactive: this.state.currentCandidate.inactive,//status,
      mode: this.state.currentCandidate.mode,
      phone: this.state.currentCandidate.phone,
      address: this.state.currentCandidate.address,
      bankdetails: this.state.currentCandidate.bankdetails,
      email: this.state.currentCandidate.email,
      password: this.state.currentCandidate.password,
    };

    CandidateDataService.update(data, this.state.currentCandidate.id)
      .then((response: any) => {
        this.setState((prevState) => ({
          currentCandidate: {
            ...prevState.currentCandidate,
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

  updateCandidate() {
    CandidateDataService.update(
      this.state.currentCandidate,
      this.state.currentCandidate.id
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
    CandidateDataService.delete(this.state.currentCandidate.id)
      .then((response: any) => {
        console.log(response.data);
        this.props.history.push("/candidates");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  render() {
    const { currentCandidate } = this.state;

    return (
      <div>
        {currentCandidate ? (
          <div className="edit-form">
            <h4>Candidate</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">NAME</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentCandidate.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="hidden">HIDDEN</label>
                <input
                  type="text"
                  className="form-control"
                  id="hidden"
                  value={currentCandidate.hidden}
                  onChange={this.onChangeHidden}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inactive">INACTIVE</label>
                <input
                  type="text"
                  className="form-control"
                  id="inactive"
                  value={currentCandidate.inactive}
                  onChange={this.onChangeInactive}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mode">MODE</label>
                <input
                  type="text"
                  className="form-control"
                  id="mode"
                  value={currentCandidate.mode}
                  onChange={this.onChangeMode}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">PHONE</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  value={currentCandidate.phone}
                  onChange={this.onChangePhone}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">ADDRESS</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  value={currentCandidate.address}
                  onChange={this.onChangeAddress}
                />
              </div>
              <div className="form-group">
                <label htmlFor="bankdetails">BANK DETAILS</label>
                <input
                  type="text"
                  className="form-control"
                  id="bankdetails"
                  value={currentCandidate.bankdetails}
                  onChange={this.onChangeBankdetails}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">EMAIL</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={currentCandidate.email}
                  onChange={this.onChangeEmail}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">PASSWORD</label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  value={currentCandidate.password}
                  onChange={this.onChangePassword}
                />
              </div>

              
            </form>

            {currentCandidate.inactive ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
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
