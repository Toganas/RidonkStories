import React, { Component } from "react";
import { Form, Row, Button } from 'react-bootstrap';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./ShareStories.css"
import StoryAPI from "../utils/StoryAPI";
// import { CREATE_STORIES } from '../actions/types';
// ---------------------------------
// Is this needed?  If we can get this working without it, make sure to delete the file as well
// import StoryForm from '../components/stories/StoryForm';
//----------------------------------


class ShareStories extends Component {
  //const { user } = this.props.auth;
  state = {
    userId: "",
    title: "",
    story: "",
    category: ""
  };
  componentDidMount = () => {
    const { user } = this.props.auth;
    this.setState({
      userId: user.id
    })

  }
  loadStories = () => {

    StoryAPI.getStory()
      .then(res =>
        this.setState({ userId: "", title: "", stories: res.data, category: "" })
      )
      .catch(err => console.log(err));
  };
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state)
    if (this.state.title && this.state.story && this.state.category) {
      StoryAPI.saveStory({
        userId: this.state.user,
        title: this.state.title,
        story: this.state.story,
        category: this.state.category
      })
        .then(res => this.loadStories())
        .catch(err => console.log(err));
    }


  };
  render() {

    return (

      <div className="Row storyForm">
        <div className="Col-md-12 formtowrite">
          <Form>
            <Form.Group as={Row} controlId="exampleForm.ControlInput1">
              <Form.Label className="formText">Title</Form.Label>
              <Form.Control size="lg" type="title"
                name={this.state.title}
                value={this.state.title}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
              <Form.Label className="formText">Story</Form.Label>
              <Form.Control as="textarea" rows="5"
                name={this.state.story}
                value={this.state.story}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group as={Row} controlId="formGridState">
              <Form.Label className="formText">Categories</Form.Label>
              <Form.Control as="select"
                name={this.state.category}  // not sure if this will do anything
                value={this.state.category}
                onChange={this.handleInputChange}
              >
                <option>Choose...</option>
                <option name="Animal">Animal</option>
                <option name="Baby/Kids">Baby/Kids</option>
                <option name="Driving">Driving</option>
                <option name="Work">Work</option>
                <option name="Pregnancy">Pregnancy</option>
                <option name="Education">Education</option>
                <option name="Sports">Sports</option>
                <option name="Drinking">Drinking</option>
                <option name="Coding">Coding</option>
                <option name="Vacation">Vacation</option>
                <option name="In-Laws">In-Laws</option>
                <option name="Other">Other</option>
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit"
              onClick={this.handleFormSubmit}
            >
              Submit
  </Button>
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
  // { CREATE_STORIES }
)(ShareStories);

