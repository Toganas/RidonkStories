import React, { Component } from "react";
import { Card } from 'react-bootstrap';
import StoryAPI from "../utils/StoryAPI";



class Categories extends Component {
  state = {
    stories: [],
    title: "",
    story: "",
    lol: "",
    favorites: "",

  };

  componentDidMount() {
    this.loadStories();
  }

  loadStories = () => {
    StoryAPI.getStory()
      .then(res =>
        this.setState({ stories: res.data, title: "", story: "" })
      ).catch(err => console.log(err));

  };

  render() {
    return (
      <div className="container">

        <div className="StoriesDay">
          {this.state.stories.map(str => (


            <Card style={{ width: 'auto' }} key={str._id}>
              <Card.Body >
                <Card.Title className="title">
                  {str.title}
                </Card.Title>

                <Card.Text className="story">
                  {str.story}
                </Card.Text>

                <Card.Footer className="category">
                  <small>Category: {str.category}</small>
                </Card.Footer>

              </Card.Body>
            </Card>

          ))}



        </div>
      </div>
    )
  }

}

export default Categories;