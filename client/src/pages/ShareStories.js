import React, {Component} from "react";
import { Form, Col, Button } from 'react-bootstrap';
import "./ShareStories.css"
import StoryAPI from "../utils/StoryAPI";


class ShareStories extends Component {

  state = {

    user: "",
    title: "",
    story: "",
    lol: "",
    favorite: "",
    category: ""
  };

  loadStories = () => {
    StoryAPI.getStory()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
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
    const newStory = {
      title: this.state.title,
      story: this.state.story,
      category: this.state.category
    }
    
    console.log(newStory)
    // if (this.state.title && this.state.author) {
    //   StoryAPI.saveStory({
    //     title: this.state.title,
    //     story: this.state.story,
    //     lol: this.state.lol,
    //     favorite: this.state.lol
    //   })
    //     .then(res => this.loadStories())
    //     .catch(err => console.log(err));
    // }
  };


  render() {
    return (
      <div>

        <div className="row storyForm">
          <div className="col-md-12 formtowrite">


            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label class="formText">Title:</Form.Label>

                <Form.Control size="lg" type="title" 
                name="title"
                onChange={this.handleInputChange}
                />

              </Form.Group>


              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label class="formText">Story:</Form.Label>
                <Form.Control as="textarea" rows="5"
                 name="story"
                 onChange={this.handleInputChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label class="formText">Categories</Form.Label>
                <Form.Control as="select"
                 name="category"  // not sure if this will do anything
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

      </div>

    );
  };


};

export default ShareStories;
