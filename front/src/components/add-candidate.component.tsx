import { Component, ChangeEvent } from "react";
import CandidateDataService from "../services/candidate.service";
import ICandidateData from '../types/candidate.type';

type Props = {};

type State = ICandidateData & {
  submitted: boolean
};

export default class AddCandidate extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeHidden = this.onChangeHidden.bind(this);//hidden
    this.onChangeInactive = this.onChangeInactive.bind(this);
    this.onChangeMode = this.onChangeMode.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeBankdetails = this.onChangeBankdetails.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.saveCandidate = this.saveCandidate.bind(this);
    this.newCandidate = this.newCandidate.bind(this);

    this.state = {
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
      submitted: false
    };
  }

  onChangeName(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      name: e.target.value
    });
  }

  //hidden
  onChangeHidden(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      hidden: e.target.value
    });
  }

  onChangeInactive(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      inactive: e.target.value
    });
  }

  onChangeMode(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      mode: e.target.value
    });
  }

  onChangePhone(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      phone: e.target.value
    });
  }

  onChangeAddress(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      address: e.target.value
    });
  }

  onChangeBankdetails(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      bankdetails: e.target.value
    });
  }

  onChangeEmail(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeUsername(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      username: e.target.value
    });
  }

  saveCandidate() {
    const data: ICandidateData = {
      name: this.state.name,
      hidden: this.state.hidden,
      inactive: this.state.inactive,
      mode: this.state.mode,
      phone: this.state.phone,
      address: this.state.address,
      bankdetails: this.state.bankdetails,
      email: this.state.email,
      username: this.state.username,
    };

    CandidateDataService.create(data)
      .then((response: any) => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          hidden: response.data.hidden,
          inactive: response.data.inactive,
          mode: response.data.mode,
          phone: response.data.phone,
          address: response.data.address,
          bankdetails: response.data.bankdetails,
          email: response.data.email,
          username: response.data.username,
          submitted: true
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  newCandidate() {
    this.setState({
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
      submitted: false
    });
  }

  render() {
    const { submitted, name, hidden, inactive, mode, phone, address, bankdetails, email, username } = this.state;

    return (
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newCandidate}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="hidden">Hidden</label>
              <input
                type="text"
                className="form-control"
                id="hidden"
                required
                value={hidden}
                onChange={this.onChangeHidden}
                name="hidden"
              />
            </div>

            <div className="form-group">
              <label htmlFor="inactive">Inactive</label>
              <input
                type="text"
                className="form-control"
                id="inactive"
                required
                value={inactive}
                onChange={this.onChangeInactive}
                name="inactive"
              />
            </div>

            <div className="form-group">
              <label htmlFor="mode">Mode</label>
              <input
                type="text"
                className="form-control"
                id="mode"
                required
                value={mode}
                onChange={this.onChangeMode}
                name="mode"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                required
                value={phone}
                onChange={this.onChangePhone}
                name="phone"
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                required
                value={address}
                onChange={this.onChangeAddress}
                name="address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="bankdetails">Bank Details</label>
              <input
                type="text"
                className="form-control"
                id="bankdetails"
                required
                value={bankdetails}
                onChange={this.onChangeBankdetails}
                name="bankdetails"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                required
                value={email}
                onChange={this.onChangeEmail}
                name="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">User Name</label>
              <input
                type="text"
                className="form-control"
                id="password"
                required
                value={username}
                onChange={this.onChangeUsername}
                name="password"
              />
            </div>


            <button onClick={this.saveCandidate} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
