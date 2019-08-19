import React, { Component } from "react";
import { Form, Row, Button } from 'react-bootstrap';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./ShareStories.css"
import StoryAPI from "../utils/StoryAPI";

class ShareStories extends Component {

  state = {
    userId: "",
    title: "",
    titlemsg: " ",
    story: "",
    storymsg: " ",
    category: "",
    msg: " "
  };
  // Set user id as the person who is logged in
  componentDidMount = () => {
    const { user } = this.props.auth;
    this.setState({
      userId: user.id
    })
  }
  loadStories = () => {

    StoryAPI.getStory()
      .then(res =>
        this.setState({ userId: "", title: "", story: res.data, category: "" })
      )
      .catch(err => console.log(err));
  };
  // update page with inpute changes
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };
  // Press submit button
  handleFormSubmit = event => {
    event.preventDefault();
    // If no user is logged in.
    if (this.state.userId === undefined) {
      this.setState({
        msg: "Sorry, you must be logged in to post a story."
      })
      // User is logged in and has input something for the title and story.  Category is defaulted to something
    } else if (this.state.title && this.state.story && this.state.category) {
      StoryAPI.saveStory({
        userId: this.state.user,
        title: this.state.title,
        story: this.state.story,
        category: this.state.category
      })
        .then(this.setState({
          msg: "Story submitted.",
          storymsg: " ",
          titlemsg: " "
        })
        )
        .then(this.props.history.push("/dashboard"))
        .catch(err => console.log(err));
      // User logged in, but no title or story
    } else if (this.state.title === "" && this.state.story === "") {
      this.setState({
        titlemsg: "Please add a title in order to submit your story.",
        storymsg: "Please add a story in order to submit your story.",
        msg: " "
      })
    }
    // User logged in with a story, but no title
    else if (this.state.title === "") {
      this.setState({
        titlemsg: "Please add a title in order to submit your story.",
        msg: " ",
        storymsg: " "
      })
      // User logged in with a title, but no story
    } else if (this.state.story === "") {
      this.setState({
        titlemsg: " ",
        msg: " ",
        storymsg: "Please add a story in order to submit your story."
      })
    }
  };
  render() {
    // display
    return (
      <div className="Row storyForm">
        <div className="Col-md-12 formtowrite">
          <Form>
            <Form.Group as={Row} controlId="exampleForm.ControlInput1">
              <Form.Label className="formText">Title</Form.Label>

              <Form.Control size="lg" type="title"
                name="title"
                onChange={this.handleInputChange}
              />
              <div className="fail">
                {/* If the there is no title, display here, otherwise, blank */}
                {this.state.titlemsg}
              </div>

            </Form.Group>


            <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
              <Form.Label className="formText">Story</Form.Label>
              <Form.Control as="textarea" rows="5"
                name="story"
                onChange={this.handleInputChange}
              />
              <div className="fail">
                {/* If the there is no story, display here, otherwise, blank */}
                {this.state.storymsg}
              </div>
            </Form.Group>

            <Form.Group as={Row} controlId="formGridState">
              <Form.Label className="formText">Categories</Form.Label>
              <Form.Control as="select"
                name="category"
                value={this.state.category}
                onChange={this.handleInputChange}
              >
                {/* list of categories, default to Other,  rest alphabetical */}
                <option name="Other">Other</option>
                <option name="Animals">Animals</option>
                <option name="Children">Children</option>
                <option name="Coding">Coding</option>
                <option name="Drinking">Drinking</option>
                <option name="Driving">Driving</option>
                <option name="Education">Education</option>
                <option name="In-Laws">In-Laws</option>
                <option name="Pregnancy">Pregnancy</option>
                <option name="Sports">Sports</option>
                <option name="Vacation">Vacation</option>
                <option name="Work">Work</option>

              </Form.Control>

            </Form.Group>
            <Button variant="primary"
              type="submit"
              id="subbtn"
              onClick={this.handleFormSubmit}
            >
              Submit
            </Button>
            <div className="fail">
              {/* If there is no one logged in, display here, otherwise, blank */}
              {this.state.msg}
            </div>
          </Form>
        </div>
      </div>

    );
  };
};
ShareStories.propTypes = {
  auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps,
)(ShareStories);

