import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Container, Breadcrumb, BreadcrumbItem } from 'react-bootstrap';

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            
           
          <div className="row One">
        <Jumbotron fluid>
          <Container>
            <h1>About</h1>
            <p>Welcome to Ridonc Stories where you can post funny, gross or weird stories anonymously. Here at Ridonc Stories we believe in making people laugh but none laughed at. We understand the satisfaction of sharing your most ridiculous stories and that sometimes we aren’t able to due to fear of judgement. Well fear no more! Now you can anonymously do so. Simply signup for an account and create your story and post it! The post will only appear with your story.
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
           

          </div>

          <div className="col-md-6 allTimeFav">
            <Breadcrumb tag="nav" listtag="div">
              <BreadcrumbItem tag="a" href="/StoriesOfTheDay"> <h3>Fav Stories</h3></BreadcrumbItem>

            </Breadcrumb>

            <p>List of all time fav stories...again connect to backend to show few stories here...</p>

            
          </div>
        </div>

      </div>




           {/* -------------------------------------------------*/}
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large btn-flat waves-effect white black-text"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
