import React, { useState } from "react";
import { Jumbotron, Container, Breadcrumb, BreadcrumbItem, Button, Card } from 'react-bootstrap';
import ModalExample from '../components/StoryModal/StoryModal';

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

function Home() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")


  const handleClose = () => setShow(false);
  const handleShow = () => {
    fetch("/api/story/top").then(res => res.json()).then(data => {
      setTitle(data.title)
      setContent(data.story)
      setShow(true)
    })

  };

  return (
    <React.Fragment>

      <div className="Container">
        <div className="row One">
          <div class="col-md-12">
            <Jumbotron fluid>
              <Container>
                <h1>About</h1>
                <p>Welcome to Ridonk Stories where you can post funny, gross or weird stories anonymously. Here at Ridonk Stories we believe in making people laugh but none laughed at. We understand the satisfaction of sharing your most ridiculous stories and that sometimes we aren’t able to due to fear of judgement. Well fear no more! Now you can anonymously do so. Simply signup for an account and create your story and post it! The post will only appear with your story.
                                  </p>
              </Container>
            </Jumbotron>
          </div>

        </div>
       

        <div className="row Two">
          <div className="col-md-6 today">


            <Card>
              <Card.Body>
                <Card.Title>

                  <Card.Link href="/StoriesOfTheDay">Stories of the Day</Card.Link>

                </Card.Title>

                <Card.Text>

                  <Button variant="primary" onClick={handleShow}>
                    Random Story of the day.
            </Button>

                  <ModalExample show={show} handleClose={handleClose} title={title} content={content} />
                  {/* <Modal /> */}

                </Card.Text>

              </Card.Body>
            </Card>



          </div>

          <div className="col-md-6 allTimeFav">
            <Card>
              <Card.Body>
                <Card.Title>

                  <Card.Link href="/StoriesOfTheDay">View More Stories</Card.Link>

                </Card.Title>


              </Card.Body>
            </Card>

          </div>
        </div>


      </div>




    </React.Fragment>
  )
}

export default Home;