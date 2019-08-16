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
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      StoryAPI.saveStory({
        title: this.state.title,
        story: this.state.story,
        lol: this.state.lol,
        favorite: this.state.lol
      })
        .then(res => this.loadStories())
        .catch(err => console.log(err));
    }
  };


  render() {
    return (
      <div>

        <div className="row storyForm">
          <div className="col-md-10 formtowrite">


            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label class="formText">Title:</Form.Label>

                <Form.Control size="lg" type="title" 
                name={this.state.title}
                onChange={this.handleInputChange}
                />

              </Form.Group>


              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label class="formText">Story:</Form.Label>
                <Form.Control as="textarea" rows="5"
                 name={this.state.story}
                 onChange={this.handleInputChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label class="formText">Categories</Form.Label>
                <Form.Control as="select"
                 name={this.state.category}  // not sure if this will do anything
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
              onSubmit={this.handleFormSubmit}
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





// export const ShareStories = () => (

//   <Styles>

//     <div className="row storyForm">
//       <div className="col-md-12 formtowrite">


//         <Form>
//           <Form.Group controlId="exampleForm.ControlInput1">
//             <Form.Label>Title:</Form.Label>

//             <Form.Control size="lg" type="title" />

//           </Form.Group>


//           <Form.Group controlId="exampleForm.ControlTextarea1">
//             <Form.Label>Story:</Form.Label>
//             <Form.Control as="textarea" rows="3" />
//           </Form.Group>

//           <Form.Group as={Col} controlId="formGridState">
//             <Form.Label>Categories</Form.Label>
//             <Form.Control as="select">
//               <option>Choose...</option>
//               <option>Animal</option>
//               <option>Baby/Kids</option>
//               <option>Driving</option>
//               <option>Work</option>
//               <option>Pregnancy</option>
//               <option>Education</option>
//               <option>Sports</option>
//               <option>Drinking</option>
//               <option>Coding</option>
//               <option>Vacation</option>
//               <option>In-Laws</option>
//               <option>Other</option>
//             </Form.Control>
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Submit
//   </Button>
//         </Form>
//       </div>
//     </div>

//   </Styles>

// )