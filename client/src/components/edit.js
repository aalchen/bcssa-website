import React, { Component } from "react";
// This will require to npm install axios
import axios from "axios";
import { withRouter } from "react-router";
import ResourceList from "./resourceList";
import Create from "./create";


class Edit extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);

    this.onChangeCourseCode = this.onChangeCourseCode.bind(this);
    this.onChangeCourseNum = this.onChangeCourseNum.bind(this);
    this.onChangeLink = this.onChangeLink.bind(this);
    this.onChangeComments = this.onChangeComments.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      course_code: "",
      course_number: "",
      resource_link: "",
      comments: "",
      records: [],
    };
  }
  // This will get the record based on the id from the database.
  componentDidMount() {
    axios
      .get("http://localhost:4000/record/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          course_code: response.data.course_code,
          course_number: response.data.course_number,
          resource_link: response.data.resource_link,
          comments: response.data.comments,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // These methods will update the state properties.
  onChangeCourseCode(e) {
    this.setState({
      course_code: e.target.value,
    });
  }

  onChangeCourseNum(e) {
    this.setState({
      course_number: e.target.value,
    });
  }

  onChangeLink(e) {
    this.setState({
      resource_link: e.target.value,
    });
  }

  onChangeComments(e) {
    this.setState({
      comments: e.target.value,
    });
  }

  // This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();
    const newEditedResource = {
      course_code: this.state.course_code,
      course_number: this.state.course_number,
      resource_link: this.state.resource_link,
      comments: this.state.comments,
    };
    console.log(newEditedResource);

    // This will send a post request to update the data in the database.
    axios
      .post(
        "http://localhost:4000/update/" + this.props.match.params.id,
        newEditedResource
      )
      .then((res) => console.log(res.data));

    this.props.history.push("/");
  }

  // This following section will display the update-form that takes the input from the user to update the data.
  render() {
    return (
      <div>
        <p
          class="f5 lh-copy center fw3"
          style={{ width: "inherit", overflowY: "scroll", height: "425px" }}
        >
          <div class="pa5">
            <p class="f3 fw6">Resources</p>
            <p class="f4">
            <a href="/resources">
              <button
                class="ph3 f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib black"
              >
                Return!
              </button>
              </a>
            </p>

          
      
        <div>
          <h3 align="center">Update Record</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Course Code: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.course_code}
                onChange={this.onChangeCourseCode}
              />
            </div>
            <div className="form-group">
              <label>Course Num: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.course_number}
                onChange={this.onChangeCourseNum}
              />
            </div>
            <div className="form-group">
              <label>Link: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.resource_link}
                onChange={this.onChangeLink}
              />
            </div>
            <div className="form-group">
              <label>Comments: </label>
              <input
                type="text"
                className="form-control"
                value={this.state.comments}
                onChange={this.onChangeComments}
              />
            </div>
            <br />

            <div className="form-group">
              <input
                type="submit"
                value="Update Record"
                className="btn btn-primary"
              />
            </div>
          </form>
        </div>
        </div>
        </p>
      </div>
    );
  }
}

// You can get access to the history object's properties and the closest <Route>'s match via the withRouter
// higher-order component. This makes it easier for us to edit our records.

export default withRouter(Edit);
