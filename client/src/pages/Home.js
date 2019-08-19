import React from "react";
import { Jumbotron, Container, Breadcrumb, BreadcrumbItem } from 'react-bootstrap';
import Modal from '../components/StoryModal/StoryModal';

import "./Home.css";




//---------------------------------
// const testRoute = () => {
//   API.getTest()
//     .then(res =>
//       console.log(res)
//       )

//     // .catch(() =>
//     //   this.setState({
//     //     books: [],
//     //     message: "No New Books Found, Try a Different Query"
//     //   })
//     // );
// };
//--------------------------------------

const Home = () => (
  <React.Fragment>

   
    <div className="row One bg-info">
      <Jumbotron fluid>
        <Container>
          <h1>About</h1>
          <p>Welcome to Ridonk Stories where you can post funny, gross or weird stories anonymously. Here at Ridonk Stories we believe in making people laugh but none laughed at. We understand the satisfaction of sharing your most ridiculous stories and that sometimes we aren’t able to due to fear of judgement. Well fear no more! Now you can anonymously do so. Simply signup for an account and create your story and post it! The post will only appear with your story.
          </p>
        </Container>
      </Jumbotron>

      <br>
      </br>
      
      <div className="row Two">
        <div className="col-md-6 today">
          <Breadcrumb tag="nav" listtag="div">
            <BreadcrumbItem tag="a" href="/StoriesOfTheDay"><h3>Stories of the Day</h3></BreadcrumbItem>

          </Breadcrumb>
           
          <p>probably do the state.this.today's story deal here..connect to backend</p>
          {/* <button onClick={testRoute}>click me</button> */}
          <Modal />

        </div>

        <div className="col-md-6 allTimeFav">
          <Breadcrumb tag="nav" listtag="div">
            <BreadcrumbItem tag="a" href="/StoriesOfTheDay"> <h3>Fav Stories</h3></BreadcrumbItem>

          </Breadcrumb>

          <p>List of all time fav stories...again connect to backend to show few stories here...</p>

          <Modal />
        </div>
      </div>

      </div> 

    

  </React.Fragment>
)

export default Home;