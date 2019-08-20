import React, { useState } from "react";
import { Jumbotron, Container, Breadcrumb, BreadcrumbItem, Button } from 'react-bootstrap';
import ModalExample from '../components/StoryModal/StoryModal';
import BackDrop from '../components/backdrop/Backdrop';
import "./Home.css";


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

  const fullWidth = {
    width: '60%'
  };
  const center = {

    justifyContent: 'center'
  }

  return (
    <React.Fragment>
      <BackDrop />

      <div className="row One">
        <Jumbotron fluid>
          <Container>
            <h1>About</h1>
            <p>Welcome to Ridonk Stories where you can post funny, gross or weird stories anonymously. Here at Ridonk Stories we believe in making people laugh but none laughed at. We understand the satisfaction of sharing your most ridiculous stories and that sometimes we aren’t able to due to fear of judgement. Well fear no more! Now you can anonymously do so. Simply signup for an account and create your story and post it! The post will only appear with your story.
          </p>
          </Container>
        </Jumbotron>

        <br>
        </br>

        <div className="row Two" style={fullWidth}>
          <div className="col-md-6 today">
            <Breadcrumb tag="nav" listtag="div" onClick={handleShow}>
              <BreadcrumbItem tag="a" onClick={handleShow}><h3>Story of the Day</h3></BreadcrumbItem>

              {/* <Button style={buttonStyle} variant="primary" onClick={handleShow}>
                Click
            </Button> */}
            </Breadcrumb>

            <ModalExample show={show} handleClose={handleClose} title={title} content={content} />
            {/* <Modal /> */}


          </div>

          <div className="col-md-6 allTimeFav text-center">
            <Breadcrumb tag="nav" listtag="div" style={center}>
              <BreadcrumbItem tag="a" href="/StoriesOfTheDay"><h3>View Stories</h3></BreadcrumbItem>

            </Breadcrumb>



          </div>
        </div>
      </div>


      {/* </div>  */}

      {/* </div > */}



    </React.Fragment >
  )
}

export default Home;