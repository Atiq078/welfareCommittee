import { Component, ChangeEvent } from "react";
import { RouteComponentProps } from 'react-router-dom';

import TutorialDataService from "../services/tutorial.service";
import ITutorialData from "../types/tutorial.type";

interface RouterProps { // type for `match.params`
  id: string; // must be type `string` since value comes from the URL
}

type Props = RouteComponentProps<RouterProps>;

type State = {
  currentTutorial: ITutorialData;
  message: string;
}

export default class Tutorial extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeInactive = this.onChangeInactive.bind(this);
    this.onChangeMode = this.onChangeMode.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeAddress = this.onChangeAddress.bind(this);
    this.onChangeBankdetails = this.onChangeBankdetails.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.getTutorial = this.getTutorial.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateTutorial = this.updateTutorial.bind(this);
    this.deleteTutorial = this.deleteTutorial.bind(this);

    this.state = {
      currentTutorial: {
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
    this.getTutorial(this.props.match.params.id);
  }

  onChangeTitle(e: ChangeEvent<HTMLInputElement>) {
    const name = e.target.value;

    this.setState(function (prevState) {
      return {
        currentTutorial: {
          ...prevState.currentTutorial,
          name: name,
        },
      };
    });
  }

  //hidden
  onChangeDescription(e: ChangeEvent<HTMLInputElement>) {
    const hidden = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        hidden: hidden,
      },
    }));
  }

  onChangeInactive(e: ChangeEvent<HTMLInputElement>) {
    const inactive = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        inactive: inactive,
      },
    }));
  }

  onChangeMode(e: ChangeEvent<HTMLInputElement>) {
    const mode = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        mode: mode,
      },
    }));
  }

  onChangePhone(e: ChangeEvent<HTMLInputElement>) {
    const phone = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        phone: phone,
      },
    }));
  }

  onChangeAddress(e: ChangeEvent<HTMLInputElement>) {
    const address = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        address: address,
      },
    }));
  }

  onChangeBankdetails(e: ChangeEvent<HTMLInputElement>) {
    const bankdetails = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        bankdetails: bankdetails,
      },
    }));
  }

  onChangeEmail(e: ChangeEvent<HTMLInputElement>) {
    const email = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        email: email,
      },
    }));
  }

  onChangePassword(e: ChangeEvent<HTMLInputElement>) {
    const password = e.target.value;

    this.setState((prevState) => ({
      currentTutorial: {
        ...prevState.currentTutorial,
        password: password,
      },
    }));
  }

  getTutorial(id: string) {
    TutorialDataService.get(id)
      .then((response: any) => {
        this.setState({
          currentTutorial: response.data,
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  updatePublished(status: boolean) {
    const data: ITutorialData = {
      id: this.state.currentTutorial.id,
      name: this.state.currentTutorial.name,
      hidden: this.state.currentTutorial.hidden,
      inactive: this.state.currentTutorial.inactive,//status,
      mode: this.state.currentTutorial.mode,
      phone: this.state.currentTutorial.phone,
      address: this.state.currentTutorial.address,
      bankdetails: this.state.currentTutorial.bankdetails,
      email: this.state.currentTutorial.email,
      password: this.state.currentTutorial.password,
    };

    TutorialDataService.update(data, this.state.currentTutorial.id)
      .then((response: any) => {
        this.setState((prevState) => ({
          currentTutorial: {
            ...prevState.currentTutorial,
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

  updateTutorial() {
    TutorialDataService.update(
      this.state.currentTutorial,
      this.state.currentTutorial.id
    )
      .then((response: any) => {
        console.log(response.data);
        this.setState({
          message: "The tutorial was updated successfully!",
        });
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  deleteTutorial() {
    TutorialDataService.delete(this.state.currentTutorial.id)
      .then((response: any) => {
        console.log(response.data);
        this.props.history.push("/candidates");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  render() {
    const { currentTutorial } = this.state;

    return (
      <div>
        {currentTutorial ? (
          <div className="edit-form">
            <h4>Tutorial</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">NAME</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentTutorial.name}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="hidden">HIDDEN</label>
                <input
                  type="text"
                  className="form-control"
                  id="hidden"
                  value={currentTutorial.hidden}
                  onChange={this.onChangeDescription}
                />
              </div>
              <div className="form-group">
                <label htmlFor="inactive">INACTIVE</label>
                <input
                  type="text"
                  className="form-control"
                  id="inactive"
                  value={currentTutorial.inactive}
                  onChange={this.onChangeInactive}
                />
              </div>
              <div className="form-group">
                <label htmlFor="mode">MODE</label>
                <input
                  type="text"
                  className="form-control"
                  id="mode"
                  value={currentTutorial.mode}
                  onChange={this.onChangeMode}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">PHONE</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  value={currentTutorial.phone}
                  onChange={this.onChangePhone}
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">ADDRESS</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  value={currentTutorial.address}
                  onChange={this.onChangeAddress}
                />
              </div>
              <div className="form-group">
                <label htmlFor="bankdetails">BANK DETAILS</label>
                <input
                  type="text"
                  className="form-control"
                  id="bankdetails"
                  value={currentTutorial.bankdetails}
                  onChange={this.onChangeBankdetails}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">EMAIL</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  value={currentTutorial.email}
                  onChange={this.onChangeEmail}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">PASSWORD</label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  value={currentTutorial.password}
                  onChange={this.onChangePassword}
                />
              </div>

              
            </form>

            {currentTutorial.inactive ? (
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
              onClick={this.deleteTutorial}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateTutorial}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Tutorial...</p>
          </div>
        )}
      </div>
    );
  }
}
