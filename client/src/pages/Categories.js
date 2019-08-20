import React, { Component } from "react";
import { Card } from 'react-bootstrap';



class Categories extends Component {
  state = {
    stories: [],
    title: "",
    story: "",
    lol: "",
    favorites: "",

  };

  componentDidMount() {
    const { cat } = this.props.match.params
    this.loadStories(cat);
    console.log(cat);
    console.log("some words");
  }

  loadStories = cat => {
    fetch("/api/story/category/" + cat).then(res => res.json()).then(data => {
      data.map(ele => {
        return this.setState({ stories: [...this.state.stories, ele] })
      })
    })

    // this.setState((prevState, props) => {
    //   return { counter: prevState.counter + props.step };
    // })
    // StoryAPI.getCategory(cat)
    //   .then(res =>
    //     this.setState({ stories: res.data, title: "", story: "" })
    //   ).catch(err => console.log(err));

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