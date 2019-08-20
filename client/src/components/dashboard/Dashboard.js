import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Breadcrumb, BreadcrumbItem, Card } from 'react-bootstrap';
class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };
    render() {
        const { user } = this.props.auth;
        return (

            <div class="Container">
                <div class="row One">
                    <div class="col-md-12">
                        <b>Hey there,</b> {user.name.split(" ")[0]}
                    </div>
                </div>

                <div class="row Two">

                    <div class="col-md-6">

                        <Card>
                            <Card.Body>
                                <Card.Title>

                                    <Card.Link href="/StoriesOfTheDay">Stories of the Day</Card.Link>

                                </Card.Title>

                                <Card.Text>

                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>

                    {/* <div class="col-md-2">

                    </div> */}

                    <div class="col-md-6">
                        <Card>
                            <Card.Body>
                                <Card.Title>

                                    <Card.Link href="/StoriesOfTheDay">View Stories</Card.Link>

                                </Card.Title>

                                <Card.Text>

                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </div>

                </div>
                <div class="row three">
                    <div class="col-sm-2">
                        <button
                            style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem"
                            }}
                            onClick={this.onLogoutClick}
                            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                        >
                            Logout
                        </button>
                    </div>

                </div>

            </div>
            // <div style={{ height: "75vh" }} className="container valign-wrapper">
            //     <div className="row">
            //         <div className="col s12 center-align">
            //             <h4>
            //                 <b>Hey there,</b> {user.name.split(" ")[0]}

            //             </h4>


            //             <div className="row Two">
            //                 <div className="col-md-6 today">
            //                     <Breadcrumb tag="nav" listtag="div">
            //                         <BreadcrumbItem tag="a" href="/StoriesOfTheDay"><h3>Stories of the Day</h3></BreadcrumbItem>

            //                     </Breadcrumb>

            //                     {/* <button onClick={testRoute}>click me</button> */}


            //                 </div>

            //                 <div className="col-md-6 allTimeFav">
            //                     <Breadcrumb tag="nav" listtag="div">
            //                         <BreadcrumbItem tag="a" href="/StoriesOfTheDay"> <h3>View Stories</h3></BreadcrumbItem>

            //                     </Breadcrumb>



            //                 </div>
            //             </div>





            // <button
            //     style={{
            //         width: "150px",
            //         borderRadius: "3px",
            //         letterSpacing: "1.5px",
            //         marginTop: "1rem"
            //     }}
            //     onClick={this.onLogoutClick}
            //     className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            // >
            //     Logout
            // </button>
            //         </div>
            //     </div>
            // </div>
        );
    }
}
Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);