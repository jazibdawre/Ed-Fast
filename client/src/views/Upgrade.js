/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  UncontrolledAlert,
  Alert,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

class Upgrade extends React.Component {
  render() {
    return (
      <>
        <div className="content">
        <Row>
            <Col md="12">
              <Card>
                
                <CardBody>
                  <Row>
                  <Col md="3"></Col>
                  <Col md="6">
                    <h1 align="center">Welcome to FREE courses!</h1>
                  </Col>
                  <Col md="3"></Col>
                  </Row>
                  <Row>
                  <Col md="2"></Col>
                  <Col md="8">
                    <h3 align="center">Providing free education to everyone during these tough times</h3>
                  </Col>
                  <Col md="2"></Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h3">Courses we offer:</CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md="12">
                      <Card>
                        <CardHeader>
                          <CardTitle tag="h5" className="title">Machine Learning</CardTitle>
                        </CardHeader>
                        <CardBody>
                        <Row>
                          <Col md="3">
                              <Card>
                                <div>
                                  <img
                                    alt="..."
                                    src={require("assets/img/ml.jpg")}
                                  />
                                </div>
                                <CardBody>
                                  <div className="author">
                                      <h5 className="title">Course 1</h5>
                                  </div>
                                  <h6>
                                    The basics
                                  </h6>
                                </CardBody>
                                <CardFooter>
                                <Button
                                  block
                                  color="primary"
                                  onClick={() => this.notify("tc")}
                                >
                                  Enroll !
                                </Button>
                                </CardFooter>
                              </Card>
                          </Col>
                          <Col md="3">
                              <Card>
                                <div>
                                  <img
                                    alt="..."
                                    src={require("assets/img/ml.jpg")}
                                  />
                                </div>
                                <CardBody>
                                  <div className="author">
                                      <h5 className="title">Course 2</h5>
                                  </div>
                                  <h6>
                                    Intermediate level
                                  </h6>
                                </CardBody>
                                <CardFooter>
                                <Button
                                  block
                                  color="primary"
                                  onClick={() => this.notify("tc")}
                                >
                                  Enroll !
                                </Button>
                                </CardFooter>
                              </Card>
                          </Col>
                          <Col md="3">
                              <Card>
                                <div>
                                  <img
                                    alt="..."
                                    src={require("assets/img/ml.jpg")}
                                  />
                                </div>
                                <CardBody>
                                  <div className="author">
                                      <h5 className="title">Course 3</h5>
                                  </div>
                                  <h6>
                                    Advance concepts
                                  </h6>
                                </CardBody>
                                <CardFooter>
                                <Button
                                  block
                                  color="primary"
                                  onClick={() => this.notify("tc")}
                                >
                                  Enroll !
                                </Button>
                                </CardFooter>
                              </Card>
                          </Col>
                          <Col md="3">
                              <Card>
                                <div>
                                  <img
                                    alt="..."
                                    src={require("assets/img/ml.jpg")}
                                  />
                                </div>
                                <CardBody>
                                  <div className="author">
                                      <h5 className="title">Course 4</h5>
                                  </div>
                                  <h6>
                                    Become a pro!
                                  </h6>
                                </CardBody>
                                <CardFooter>
                                <Button
                                  block
                                  color="primary"
                                  onClick={() => this.notify("tc")}
                                >
                                  Enroll !
                                </Button>
                                </CardFooter>
                              </Card>
                          </Col>
                        </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Card>
                        <CardHeader>
                          <CardTitle tag="h5" className="title">Web Development</CardTitle>
                        </CardHeader>
                        <CardBody>
                        <Row>
                          <Col md="3">
                              <Card>
                                <div>
                                  <img
                                    alt="..."
                                    src={require("assets/img/wd.jpg")}
                                  />
                                </div>
                                <CardBody>
                                  <div className="author">
                                      <h5 className="title">Course 1</h5>
                                  </div>
                                  <h6>
                                    The basics
                                  </h6>
                                </CardBody>
                                <CardFooter>
                                <Button
                                  block
                                  color="primary"
                                  onClick={() => this.notify("tc")}
                                >
                                  Enroll !
                                </Button>
                                </CardFooter>
                              </Card>
                          </Col>
                          <Col md="3">
                              <Card>
                                <div>
                                  <img
                                    alt="..."
                                    src={require("assets/img/wd.jpg")}
                                  />
                                </div>
                                <CardBody>
                                  <div className="author">
                                      <h5 className="title">Course 2</h5>
                                  </div>
                                  <h6>
                                    Intermediate level
                                  </h6>
                                </CardBody>
                                <CardFooter>
                                <Button
                                  block
                                  color="primary"
                                  onClick={() => this.notify("tc")}
                                >
                                  Enroll !
                                </Button>
                                </CardFooter>
                              </Card>
                          </Col>
                          <Col md="3">
                              <Card>
                                <div>
                                  <img
                                    alt="..."
                                    src={require("assets/img/wd.jpg")}
                                  />
                                </div>
                                <CardBody>
                                  <div className="author">
                                      <h5 className="title">Course 3</h5>
                                  </div>
                                  <h6>
                                    Advance concepts
                                  </h6>
                                </CardBody>
                                <CardFooter>
                                <Button
                                  block
                                  color="primary"
                                  onClick={() => this.notify("tc")}
                                >
                                  Enroll !
                                </Button>
                                </CardFooter>
                              </Card>
                          </Col>
                          <Col md="3">
                              <Card>
                                <div>
                                  <img
                                    alt="..."
                                    src={require("assets/img/wd.jpg")}
                                  />
                                </div>
                                <CardBody>
                                  <div className="author">
                                      <h5 className="title">Course 4</h5>
                                  </div>
                                  <h6>
                                    Become a pro!
                                  </h6>
                                </CardBody>
                                <CardFooter>
                                <Button
                                  block
                                  color="primary"
                                  onClick={() => this.notify("tc")}
                                >
                                  Enroll !
                                </Button>
                                </CardFooter>
                              </Card>
                          </Col>
                        </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Card>
                        <CardHeader>
                          <CardTitle tag="h5" className="title">Mobile App Development</CardTitle>
                        </CardHeader>
                        <CardBody>
                        <Row>
                          <Col md="3">
                              <Card>
                                <div>
                                  <img
                                    alt="..."
                                    src={require("assets/img/md.jpg")}
                                  />
                                </div>
                                <CardBody>
                                  <div className="author">
                                      <h5 className="title">Course 1</h5>
                                  </div>
                                  <h6>
                                    The basics
                                  </h6>
                                </CardBody>
                                <CardFooter>
                                <Button
                                  block
                                  color="primary"
                                  onClick={() => this.notify("tc")}
                                >
                                  Enroll !
                                </Button>
                                </CardFooter>
                              </Card>
                          </Col>
                          <Col md="3">
                              <Card>
                                <div>
                                  <img
                                    alt="..."
                                    src={require("assets/img/md.jpg")}
                                  />
                                </div>
                                <CardBody>
                                  <div className="author">
                                      <h5 className="title">Course 2</h5>
                                  </div>
                                  <h6>
                                    Intermediate level
                                  </h6>
                                </CardBody>
                                <CardFooter>
                                <Button
                                  block
                                  color="primary"
                                  onClick={() => this.notify("tc")}
                                >
                                  Enroll !
                                </Button>
                                </CardFooter>
                              </Card>
                          </Col>
                          <Col md="3">
                              <Card>
                                <div>
                                  <img
                                    alt="..."
                                    src={require("assets/img/md.jpg")}
                                  />
                                </div>
                                <CardBody>
                                  <div className="author">
                                      <h5 className="title">Course 3</h5>
                                  </div>
                                  <h6>
                                    Advance concepts
                                  </h6>
                                </CardBody>
                                <CardFooter>
                                <Button
                                  block
                                  color="primary"
                                  onClick={() => this.notify("tc")}
                                >
                                  Enroll !
                                </Button>
                                </CardFooter>
                              </Card>
                          </Col>
                          <Col md="3">
                              <Card>
                                <div>
                                  <img
                                    alt="..."
                                    src={require("assets/img/md.jpg")}
                                  />
                                </div>
                                <CardBody>
                                  <div className="author">
                                      <h5 className="title">Course 4</h5>
                                  </div>
                                  <h6>
                                    Become a pro!
                                  </h6>
                                </CardBody>
                                <CardFooter>
                                <Button
                                  block
                                  color="primary"
                                  onClick={() => this.notify("tc")}
                                >
                                  Enroll !
                                </Button>
                                </CardFooter>
                              </Card>
                          </Col>
                        </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <Card>
                        <CardHeader>
                          <CardTitle tag="h5" className="title">Others:</CardTitle>
                        </CardHeader>
                        <CardBody>
                        <Row>
                          <Col md="3">
                              <Card>
                                <div>
                                  <img
                                    alt="..."
                                    src={require("assets/img/gg.PNG")}
                                  />
                                </div>
                                <CardBody>
                                  <div className="author">
                                      <h5 className="title">Git and Github</h5>
                                  </div>
                                </CardBody>
                                <CardFooter>
                                <Button
                                  block
                                  color="primary"
                                  onClick={() => this.notify("tc")}
                                >
                                  Enroll !
                                </Button>
                                </CardFooter>
                              </Card>
                          </Col>
                          <Col md="3">
                              <Card>
                                <div>
                                  <img
                                    alt="..."
                                    src={require("assets/img/cp.jpg")}
                                  />
                                </div>
                                <CardBody>
                                  <div className="author">
                                      <h5 className="title">Coding practices</h5>
                                  </div>
                                </CardBody>
                                <CardFooter>
                                <Button
                                  block
                                  color="primary"
                                  onClick={() => this.notify("tc")}
                                >
                                  Enroll !
                                </Button>
                                </CardFooter>
                              </Card>
                          </Col>
                          <Col md="3">
                              <Card>
                                <div>
                                  <img
                                    alt="..."
                                    src={require("assets/img/oop.PNG")}
                                  />
                                </div>
                                <CardBody>
                                  <div className="author">
                                      <h5 className="title">OOP concepts</h5>
                                  </div>
                                </CardBody>
                                <CardFooter>
                                <Button
                                  block
                                  color="primary"
                                  onClick={() => this.notify("tc")}
                                >
                                  Enroll !
                                </Button>
                                </CardFooter>
                              </Card>
                          </Col>
                          <Col md="3">
                              <Card>
                                <div>
                                  <img
                                    alt="..."
                                    src={require("assets/img/java.jpg")}
                                  />
                                </div>
                                <CardBody>
                                  <div className="author">
                                      <h5 className="title">Java programming</h5>
                                  </div>
                                  
                                </CardBody>
                                <CardFooter>
                                <Button
                                  block
                                  color="primary"
                                  onClick={() => this.notify("tc")}
                                >
                                  Enroll !
                                </Button>
                                </CardFooter>
                              </Card>
                          </Col>
                        </Row>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="stats">
                    <i className="fa fa-history" /> Updated 3 minutes ago
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <Card className="card-upgrade">
                <CardHeader className="text-center">
                  <CardTitle tag="h4">Paper Dashboard PRO</CardTitle>
                  <p className="card-category">
                    Are you looking for more components? Please check our
                    Premium Version of Paper Dashboard PRO.
                  </p>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th />
                        <th className="text-center">Free</th>
                        <th className="text-center">PRO</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Components</td>
                        <td className="text-center">16</td>
                        <td className="text-center">160</td>
                      </tr>
                      <tr>
                        <td>Plugins</td>
                        <td className="text-center">4</td>
                        <td className="text-center">13</td>
                      </tr>
                      <tr>
                        <td>Example Pages</td>
                        <td className="text-center">7</td>
                        <td className="text-center">27</td>
                      </tr>
                      <tr>
                        <td>Login, Register, Pricing, Lock Pages</td>
                        <td className="text-center">
                          <i className="nc-icon nc-simple-remove text-danger" />
                        </td>
                        <td className="text-center">
                          <i className="nc-icon nc-check-2 text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          DataTables, VectorMap, SweetAlert, Wizard,
                          jQueryValidation, FullCalendar etc...
                        </td>
                        <td className="text-center">
                          <i className="nc-icon nc-simple-remove text-danger" />
                        </td>
                        <td className="text-center">
                          <i className="nc-icon nc-check-2 text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td>Mini Sidebar</td>
                        <td className="text-center">
                          <i className="nc-icon nc-simple-remove text-danger" />
                        </td>
                        <td className="text-center">
                          <i className="nc-icon nc-check-2 text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td>Premium Support</td>
                        <td className="text-center">
                          <i className="nc-icon nc-simple-remove text-danger" />
                        </td>
                        <td className="text-center">
                          <i className="nc-icon nc-check-2 text-success" />
                        </td>
                      </tr>
                      <tr>
                        <td />
                        <td className="text-center">Free</td>
                        <td className="text-center">From $49</td>
                      </tr>
                      <tr>
                        <td className="text-center" />
                        <td className="text-center">
                          <Button
                            className="btn-round disabled"
                            color="default"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Current Version
                          </Button>
                        </td>
                        <td className="text-center">
                          <Button
                            className="btn-round"
                            color="primary"
                            href="https://www.creative-tim.com/product/paper-dashboard-2-pro?ref=pd-free-upgrade-live"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            Upgrade to PRO
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Upgrade;
