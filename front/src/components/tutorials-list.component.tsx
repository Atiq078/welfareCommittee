import { Component, ChangeEvent } from "react";
import TutorialDataService from "../services/tutorial.service";
import { Link } from "react-router-dom";
import ITutorialData from '../types/tutorial.type';

type Props = {};

type State = {
  tutorials: Array<ITutorialData>,
  currentTutorial: ITutorialData | null,
  currentIndex: number,
  searchTitle: string
};

export default class TutorialsList extends Component<Props, State>{
  constructor(props: Props) {
    super(props);
    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
    this.removeAllTutorials = this.removeAllTutorials.bind(this);
    this.searchTitle = this.searchTitle.bind(this);

    this.state = {
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveTutorials();
  }

  onChangeSearchTitle(e: ChangeEvent<HTMLInputElement>) {
    const searchTitle = e.target.value;

    this.setState({
      searchTitle: searchTitle
    });
  }

  retrieveTutorials() {
    TutorialDataService.getAll()
      .then((response: any) => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveTutorials();
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });
  }

  setActiveTutorial(tutorial: ITutorialData, index: number) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index
    });
  }

  removeAllTutorials() {
    TutorialDataService.deleteAll()
      .then((response: any) => {
        console.log(response.data);
        this.refreshList();
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  searchTitle() {
    this.setState({
      currentTutorial: null,
      currentIndex: -1
    });

    TutorialDataService.findByTitle(this.state.searchTitle)
      .then((response: any) => {
        this.setState({
          tutorials: response.data
        });
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  }

  render() {
    const { searchTitle, tutorials, currentTutorial, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              value={searchTitle}
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Candidates List</h4>

          <ul className="list-group">
            {tutorials &&
              tutorials.map((tutorial: ITutorialData, index: number) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveTutorial(tutorial, index)}
                  key={index}
                >
                  {tutorial.name}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllTutorials}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentTutorial ? (
            <div>
              <h4>Candidate</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentTutorial.name}
              </div>
              <div>
                <label>
                  <strong>InActive:</strong>
                </label>{" "}
                {currentTutorial.inactive}
              </div>
              <div>
                <label>
                  <strong>Hidden:</strong>
                </label>{" "}
                {currentTutorial.hidden}
              </div>
              <div>
                <label>
                  <strong>Phone:</strong>
                </label>{" "}
                {currentTutorial.phone}
              </div>
              <div>
                <label>
                  <strong>Address:</strong>
                </label>{" "}
                {currentTutorial.address}
              </div>
              <div>
                <label>
                  <strong>Bank Details:</strong>
                </label>{" "}
                {currentTutorial.bankdetails}
              </div>
              <div>
                <label>
                  <strong>Email:</strong>
                </label>{" "}
                {currentTutorial.email}
              </div>
              <div>
                <label>
                  <strong>Password:</strong>
                </label>{" "}
                {currentTutorial.password}
              </div>
              <div>
                <label>
                  <strong>Mode:</strong>
                </label>{" "}
                {currentTutorial.mode==="admin" ? "Published" : "Pending"}
              </div>

              <Link
                to={"/candidates/" + currentTutorial.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Candidate...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
