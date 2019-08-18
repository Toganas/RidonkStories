import React, { Component } from "react";
import { Form, Row, Button } from 'react-bootstrap';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./ShareStories.css"
import StoryAPI from "../utils/StoryAPI";
//____________________________
import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';
//----------------------------------


class ShareStories extends Component {
  //const { user } = this.props.auth;
  state = {
    user: "",
    title: "",
    story: "",
    category: ""
  };
  componentDidMount = () => {
    const { user } = this.props.auth;
    this.setState({
      user: user.id
    })

  }
  loadStories = () => {

    StoryAPI.getStory()
      .then(res =>
        this.setState({ user: "", title: "", stories: res.data, category: "" })
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
    if (this.state.title && this.state.story && this.state.category) {
      StoryAPI.saveStory({
        user: this.state.user,
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
              <Form.Label class="formText">Title</Form.Label>
              <Form.Control size="lg" type="title"
                name="title"
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
              <Form.Label class="formText">Story</Form.Label>
              <Form.Control as="textarea" rows="5"
                name="story"
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Form.Group as={Row} controlId="formGridState">
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

    );
  };
};
ShareStories.propTypes = {
  auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  auth: state.auth
});

// import React, {Component} from "react";

// import { Form, Row, Button } from 'react-bootstrap';
// import PropTypes from "prop-types";
// import { connect } from "react-redux";

// import "./ShareStories.css"
// import StoryAPI from "../utils/StoryAPI";


// class ShareStories extends Component {
// //const { user } = this.props.auth;

//   state = {

//     user: "",
//     title: "",
//     story: "",
//     category: ""
//   };

//   componentDidMount = () => {
//     const { user } = this.props.auth;
//     this.setState({
//       user: user.id
//     })

//   }

//   loadStories = () => {

//     StoryAPI.getStory()
//       .then(res =>
//         this.setState({ user: "" , title: "", stories: res.data, category: "" })
//       )
//       .catch(err => console.log(err));
//   };

//   handleInputChange = event => {
//     const name = event.target.name;
//     const value = event.target.value;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.title && this.state.story && this.state.category) {

//       StoryAPI.saveStory ({
//         user: this.state.user,
//         title: this.state.title,
//         story: this.state.story,
//         category: this.state.category
//       })
//       .then(res => this.loadStories())
//       .catch(err => console.log(err));

//     }


//   };


//   render() {

//     return (


//         <div className="Row storyForm rounded">
//           <div className="Col-md-12 formtowrite">


//             <Form>
//               <Form.Group as={Row} controlId="exampleForm.ControlInput1">
//                 <Form.Label className="formText">Title</Form.Label>

//                 <Form.Control size="lg" type="title" 
//                 name="title"
//                 onChange={this.handleInputChange}
//                 />

//               </Form.Group>


//               <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
//                 <Form.Label class="formText">Story</Form.Label>

//                 <Form.Control as="textarea" rows="5"
//                  name="story"
//                  onChange={this.handleInputChange}
//                 />

//               </Form.Group>

//               <Form.Group as={Row} controlId="formGridState">
//                 <Form.Label class="formText">Categories</Form.Label>

//                 <Form.Control as="select"
//                  name="category"  // not sure if this will do anything
//                  onChange={this.handleInputChange}
//                 >
//                   <option>Choose...</option>
//                   <option name="Animal">Animal</option>
//                   <option name="Baby/Kids">Baby/Kids</option>
//                   <option name="Driving">Driving</option>
//                   <option name="Work">Work</option>
//                   <option name="Pregnancy">Pregnancy</option>
//                   <option name="Education">Education</option>
//                   <option name="Sports">Sports</option>
//                   <option name="Drinking">Drinking</option>
//                   <option name="Coding">Coding</option>
//                   <option name="Vacation">Vacation</option>
//                   <option name="In-Laws">In-Laws</option>
//                   <option name="Other">Other</option>
//                 </Form.Control>

//               </Form.Group>

//               <Button variant="primary" type="submit"
//               onClick={this.handleFormSubmit}
//               >
//                 Submit
//   </Button>
//             </Form>
//           </div>
//         </div>



//     );
//   };


// };

// ShareStories.propTypes = {
//   auth: PropTypes.object.isRequired
// }

// const mapStateToProps = state => ({
//   auth: state.auth
// });

// export default connect(mapStateToProps)(ShareStories);
>>>>>>> 762e751a08475d65e0c558b67e7df5e93b491bc8
=======
>>>>>>> f356c252a3e2be49009eebbc2c8587b289008246
