import { Component, ChangeEvent } from "react";
import ProtokollDataService from "../services/protokoll.service";
import ProtokollData from '../types/protokoll.type';

type Props = {};

type State = ProtokollData & {
  submitted: boolean
};

export default class AddProtokoll extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onChangeKommentar = this.onChangeKommentar.bind(this);
    this.onChangeUserId = this.onChangeUserId.bind(this);//userid
    this.onChangeTimestamp = this.onChangeTimestamp.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onChangeActionid = this.onChangeActionid.bind(this);

    this.saveProtokoll = this.saveProtokoll.bind(this);
    this.newProtokoll = this.newProtokoll.bind(this);

    this.state = {
      id: null,
      kommentar: "",
      userid: "",
      timestamp: "",
      value: "",
      actionid: "",
      cid: "1",
      submitted: false
    };
  }

  onChangeKommentar(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      kommentar: e.target.value
    });
  }

  //userid
  onChangeUserId(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      userid: e.target.value
    });
  }

  onChangeTimestamp(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      timestamp: e.target.value
    });
  }

  onChangeValue(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      value: e.target.value
    });
  }

  onChangeActionid(e: ChangeEvent<HTMLInputElement>) {
    this.setState({
      actionid: e.target.value
    });
  }


  saveProtokoll() {
    const data: ProtokollData = {
      kommentar: this.state.kommentar,
      userid: this.state.userid,
      //timestamp: this.state.timestamp,
      value: this.state.value,
      actionid: this.state.actionid,
      cid: this.state.cid,

    };

    ProtokollDataService.create(data)
      .then((response: any) => {
        this.setState({
          id: response.data.id,
          kommentar: response.data.kommentar,
          userid: response.data.userid,
          //timestamp: response.data.timestamp,
          value: response.data.value,
          actionid: response.data.actionid,

          submitted: true
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  newProtokoll() {
    this.setState({
      id: null,
      kommentar: "",
      userid: "",
      timestamp: "",
      value: "",
      actionid: "",

      submitted: false
    });
  }

  render() {
    const { submitted, kommentar, userid, /*timestamp,*/ 
            value, actionid } = this.state;

    return (
      <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newProtokoll}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="kommentar">Kommentar</label>
              <input
                type="text"
                className="form-control"
                id="kommentar"
                required
                value={kommentar}
                onChange={this.onChangeKommentar}
                name="kommentar"
              />
            </div>

            <div className="form-group">
              <label htmlFor="userid">User ID</label>
              <input
                type="text"
                className="form-control"
                id="userid"
                required
                value={userid}
                onChange={this.onChangeUserId}
                name="userid"
              />
            </div>

            <div className="form-group">
              <label htmlFor="timestamp">TimeStamp</label>
              <input
                type="text"
                className="form-control"
                id="timestamp"
                required
                
                onChange={this.onChangeTimestamp}
                name="timestamp"
              />
            </div>

            <div className="form-group">
              <label htmlFor="value">Value</label>
              <input
                type="text"
                className="form-control"
                id="value"
                required
                value={value}
                onChange={this.onChangeValue}
                name="value"
              />
            </div>

            <div className="form-group">
              <label htmlFor="actionid">Action ID</label>
              <input
                type="text"
                className="form-control"
                id="actionid"
                required
                value={actionid}
                onChange={this.onChangeActionid}
                name="actionid"
              />
            </div>


            <button onClick={this.saveProtokoll} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
