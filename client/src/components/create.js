import React, { Component } from "react";
// This will require to npm install axios
import axios from "axios";

export default class Create extends Component {
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
    };
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

    // When post request is sent to the create url, axios will add a new record(newperson) to the database.
    const newperson = {
      course_code: this.state.course_code,
      course_number: this.state.course_number,
      resource_link: this.state.resource_link,
      comments: this.state.comments,
    };

    axios
      .post("http://localhost:4000/record/add", newperson)
      .then((res) => console.log(res.data));

    // We will empty the state after posting the data to the database
    this.setState({
      course_code: "",
      course_number: "",
      resource_link: "",
      comments: "",
    });
  }

  // This following section will display the form that takes the input from the user.
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Record</h3>
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
          <div className="form-group">
            <input
              type="submit"
              value="Add resource"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
