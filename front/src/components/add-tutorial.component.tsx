import { Component, ChangeEvent } from "react";
import TutorialDataService from "../services/tutorial.service";
import ITutorialData from '../types/tutorial.type';

type Props = {};

type State = ITutorialData & {
  submitted: boolean
};

export default class AddTutorial extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

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
      password: "",
      submitted: false
    };
  }

  onChangeTitle(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeDescription(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      hidden: e.target.value
    });
  }

  saveTutorial() {
    const data: ITutorialData = {
      name: this.state.name,
      hidden: this.state.hidden,
      inactive: this.state.inactive,
      mode: this.state.mode,
      phone: this.state.phone,
      address: this.state.address,
      bankdetails: this.state.bankdetails,
      email: this.state.email,
      password: this.state.password,
    };

    TutorialDataService.create(data)
      .then((response: any) => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          hidden: response.data.hidden,
          inactive: response.data.inactive,
          submitted: true
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      name: "",
      hidden: "",
      inactive: "",
      submitted: false
    });
  }

  render() {
    const { submitted, name, hidden } = this.state;

    return (
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Title</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={name}
                onChange={this.onChangeTitle}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="hidden">Description</label>
              <input
                type="text"
                className="form-control"
                id="hidden"
                required
                value={hidden}
                onChange={this.onChangeDescription}
                name="hidden"
              />
            </div>

            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
