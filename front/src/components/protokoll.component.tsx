import { Component, ChangeEvent } from "react";
import { RouteComponentProps } from 'react-router-dom';

import ProtokollDataService from "../services/protokoll.service";
import ProtokollData from "../types/protokoll.type";

interface RouterProps { // type for `match.params`
  id: string; // must be type `string` since value comes from the URL
}

type Props = RouteComponentProps<RouterProps>;

type State = {
  currentProtokoll: ProtokollData;
  message: string;
}

export default class Protokoll extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.onChangeKommentar = this.onChangeKommentar.bind(this);
    this.onChangeUserid = this.onChangeUserid.bind(this);
    this.onChangeTimestamp = this.onChangeTimestamp.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onChangeActionid = this.onChangeActionid.bind(this);

    this.getProtokoll = this.getProtokoll.bind(this);
    this.updatePublished = this.updatePublished.bind(this);
    this.updateProtokoll = this.updateProtokoll.bind(this);
    this.deleteProtokoll = this.deleteProtokoll.bind(this);

    this.state = {
      currentProtokoll: {
        id: null,
        kommentar: "",
        userid: "",
        timestamp: "",
        value: "",
      actionid: "",
      cid: "1",
      approved: false,

      },
      message: "",
    };
  }

  componentDidMount() {
    this.getProtokoll(this.props.match.params.id);
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

  //userid
  onChangeUserid(e: ChangeEvent<HTMLInputElement>) {
    const userid = e.target.value;

    this.setState((prevState) => ({
      currentProtokoll: {
        ...prevState.currentProtokoll,
        userid: userid,
      },
    }));
  }

  onChangeTimestamp(e: ChangeEvent<HTMLInputElement>) {
    const timestamp = e.target.value;

    this.setState((prevState) => ({
      currentProtokoll: {
        ...prevState.currentProtokoll,
        timestamp: timestamp,
      },
    }));
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

  onChangeActionid(e: ChangeEvent<HTMLInputElement>) {
    const actionid = e.target.value;

    this.setState((prevState) => ({
      currentProtokoll: {
        ...prevState.currentProtokoll,
        actionid: actionid,
      },
    }));
  }


  getProtokoll(id: string) {
    ProtokollDataService.get(id)
      .then((response: any) => {
        this.setState({
          currentProtokoll: response.data,
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  updatePublished(status: boolean) {
    const data: ProtokollData = {
      id: this.state.currentProtokoll.id,
      kommentar: this.state.currentProtokoll.kommentar,
      userid: this.state.currentProtokoll.userid,
      timestamp: this.state.currentProtokoll.timestamp,//status,
      value: this.state.currentProtokoll.value,
      actionid: this.state.currentProtokoll.actionid,
      cid: this.state.currentProtokoll.cid,
      approved: status,

    };

    ProtokollDataService.update(data, this.state.currentProtokoll.id)
      .then((response: any) => {
        this.setState((prevState) => ({
          currentProtokoll: {
            ...prevState.currentProtokoll,
            approved: status,
          },
          message: "The status was updated successfully!"
        }));
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  updateProtokoll() {
    ProtokollDataService.update(
      this.state.currentProtokoll,
      this.state.currentProtokoll.id
    )
      .then((response: any) => {
        console.log(response.data);
        this.setState({
          message: "The protokoll was updated successfully!",
        });
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  deleteProtokoll() {
    ProtokollDataService.delete(this.state.currentProtokoll.id)
      .then((response: any) => {
        console.log(response.data);
        this.props.history.push("/protokolls");
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  render() {
    const { currentProtokoll } = this.state;

    return (
      <div>
        {currentProtokoll ? (
          <div className="edit-form">
            <h4>Protokoll</h4>
            <form>
              <div className="form-group">
                <label htmlFor="kommentar">Kommentar</label>
                <input
                  type="text"
                  className="form-control"
                  id="kommentar"
                  value={currentProtokoll.kommentar}
                  onChange={this.onChangeKommentar}
                />
              </div>
              <div className="form-group">
                <label htmlFor="userid">User ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="userid"
                  value={currentProtokoll.userid}
                  onChange={this.onChangeUserid}
                />
              </div>
              <div className="form-group">
                <label htmlFor="timestamp">Timestamp</label>
                <input
                  type="text"
                  className="form-control"
                  id="timestamp"
                  value={currentProtokoll.timestamp}
                  onChange={this.onChangeTimestamp}
                />
              </div>
              <div className="form-group">
                <label htmlFor="value">Value</label>
                <input
                  type="text"
                  className="form-control"
                  id="value"
                  value={currentProtokoll.value}
                  onChange={this.onChangeValue}
                />
              </div>
              <div className="form-group">
                <label htmlFor="actionid">Action ID</label>
                <input
                  type="text"
                  className="form-control"
                  id="actionid"
                  value={currentProtokoll.actionid}
                  onChange={this.onChangeActionid}
                />
              </div>
              

              
            </form>

            {currentProtokoll.approved ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                Un-Approve
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Approve
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteProtokoll}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateProtokoll}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Protokoll...</p>
          </div>
        )}
      </div>
    );
  }
}
