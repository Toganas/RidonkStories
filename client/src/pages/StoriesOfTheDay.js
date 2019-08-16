import React, {Component} from "react";
import { Card } from 'react-bootstrap';
import StoryAPI from "../utils/StoryAPI";


class StoriesOfTheDay extends Component {

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
      this.setState({stories: res.data, title: "", story: ""})
      ).catch (err => console.log(err));
      
  };

  render() {
    return(
      <div class="container">

<div className="Stories of the Day">

<Card style={{ width: '18rem' }}>
  <Card.Body >
    <Card.Title>

    </Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Need to figure out how to show only three of the latest data here. 
</Card.Text>


  </Card.Body>
</Card>

</div>
      </div>
    )
  }

}

// export const StoriesOfTheDay = () => (

//   <div>
//     <div className="Stories of the Day">

//       <Card style={{ width: '18rem' }}>
//         <Card.Body >
//           <Card.Title>

//           </Card.Title>
//           <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
//           <Card.Text>
//             Some quick example text to build on the card title and make up the bulk of
//             the card's content.
//     </Card.Text>


//         </Card.Body>
//       </Card>

//     </div>
//   </div>
// );


export default StoriesOfTheDay;