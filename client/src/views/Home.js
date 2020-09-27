import React from 'react';
import axios from 'axios';

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
} from 'reactstrap';

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
                      <h3 align="center">
                        Providing free education to everyone during these tough
                        times
                      </h3>
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
                          <CardTitle tag="h5" className="title">
                            Machine Learning
                          </CardTitle>
                        </CardHeader>
                        <CardBody>
                          <Row>
                            <Col md="3">
                              <Card>
                                <div>
                                  <img
                                    alt="..."
                                    src={require('assets/img/ml.jpg')}
                                  />
                                </div>
                                <CardBody>
                                  <div className="author">
                                    <h5 className="title">Course 1</h5>
                                  </div>
                                  <h6>The basics</h6>
                                </CardBody>
                                <CardFooter>
                                  <a href="/admin/course">
                                    <Button block color="primary">
                                      Enroll !
                                    </Button>
                                  </a>
                                </CardFooter>
                              </Card>
                            </Col>
                            <Col md="3">
                              <Card>
                                <div>
                                  <img
                                    alt="..."
                                    src={require('assets/img/ml.jpg')}
                                  />
                                </div>
                                <CardBody>
                                  <div className="author">
                                    <h5 className="title">Course 2</h5>
                                  </div>
                                  <h6>Intermediate level</h6>
                                </CardBody>
                                <CardFooter>
                                  <Button
                                    block
                                    color="primary"
                                    onClick={() => this.notify('tc')}
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
                                    src={require('assets/img/ml.jpg')}
                                  />
                                </div>
                                <CardBody>
                                  <div className="author">
                                    <h5 className="title">Course 3</h5>
                                  </div>
                                  <h6>Advance concepts</h6>
                                </CardBody>
                                <CardFooter>
                                  <Button
                                    block
                                    color="primary"
                                    onClick={() => this.notify('tc')}
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
                                    src={require('assets/img/ml.jpg')}
                                  />
                                </div>
                                <CardBody>
                                  <div className="author">
                                    <h5 className="title">Course 4</h5>
                                  </div>
                                  <h6>Become a pro!</h6>
                                </CardBody>
                                <CardFooter>
                                  <Button
                                    block
                                    color="primary"
                                    onClick={() => this.notify('tc')}
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
                          <CardTitle tag="h5" className="title">
                            Web Development
                          </CardTitle>
                        </CardHeader>
                        <CardBody>
                          <Row>
                            <Col md="3">
                              <Card>
                                <div>
                                  <img
                                    alt="..."
                                    src={require('assets/img/wd.jpg')}
                                  />
                                </div>
                                <CardBody>
                                  <div className="author">
                                    <h5 className="title">Course 1</h5>
                                  </div>
                                  <h6>The basics</h6>
                                </CardBody>
                                <CardFooter>
                                  <Button
                                    block
                                    color="primary"
                                    onClick={() => this.notify('tc')}
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
                                    src={require('assets/img/wd.jpg')}
                                  />
                                </div>
                                <CardBody>
                                  <div className="author">
                                    <h5 className="title">Course 2</h5>
                                  </div>
                                  <h6>Intermediate level</h6>
                                </CardBody>
                                <CardFooter>
                                  <Button
                                    block
                                    color="primary"
                                    onClick={() => this.notify('tc')}
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
                                    src={require('assets/img/wd.jpg')}
                                  />
                                </div>
                                <CardBody>
                                  <div className="author">
                                    <h5 className="title">Course 3</h5>
                                  </div>
                                  <h6>Advance concepts</h6>
                                </CardBody>
                                <CardFooter>
                                  <Button
                                    block
                                    color="primary"
                                    onClick={() => this.notify('tc')}
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
                                    src={require('assets/img/wd.jpg')}
                                  />
                                </div>
                                <CardBody>
                                  <div className="author">
                                    <h5 className="title">Course 4</h5>
                                  </div>
                                  <h6>Become a pro!</h6>
                                </CardBody>
                                <CardFooter>
                                  <Button
                                    block
                                    color="primary"
                                    onClick={() => this.notify('tc')}
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
                          <CardTitle tag="h5" className="title">
                            Mobile App Development
                          </CardTitle>
                        </CardHeader>
                        <CardBody>
                          <Row>
                            <Col md="3">
                              <Card>
                                <div>
                                  <img
                                    alt="..."
                                    src={require('assets/img/md.jpg')}
                                  />
                                </div>
                                <CardBody>
                                  <div className="author">
                                    <h5 className="title">Course 1</h5>
                                  </div>
                                  <h6>The basics</h6>
                                </CardBody>
                                <CardFooter>
                                  <Button
                                    block
                                    color="primary"
                                    onClick={() => this.notify('tc')}
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
                                    src={require('assets/img/md.jpg')}
                                  />
                                </div>
                                <CardBody>
                                  <div className="author">
                                    <h5 className="title">Course 2</h5>
                                  </div>
                                  <h6>Intermediate level</h6>
                                </CardBody>
                                <CardFooter>
                                  <Button
                                    block
                                    color="primary"
                                    onClick={() => this.notify('tc')}
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
                                    src={require('assets/img/md.jpg')}
                                  />
                                </div>
                                <CardBody>
                                  <div className="author">
                                    <h5 className="title">Course 3</h5>
                                  </div>
                                  <h6>Advance concepts</h6>
                                </CardBody>
                                <CardFooter>
                                  <Button
                                    block
                                    color="primary"
                                    onClick={() => this.notify('tc')}
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
                                    src={require('assets/img/md.jpg')}
                                  />
                                </div>
                                <CardBody>
                                  <div className="author">
                                    <h5 className="title">Course 4</h5>
                                  </div>
                                  <h6>Become a pro!</h6>
                                </CardBody>
                                <CardFooter>
                                  <Button
                                    block
                                    color="primary"
                                    onClick={() => this.notify('tc')}
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
                          <CardTitle tag="h5" className="title">
                            Others:
                          </CardTitle>
                        </CardHeader>
                        <CardBody>
                          <Row>
                            <Col md="3">
                              <Card>
                                <div>
                                  <img
                                    alt="..."
                                    src={require('assets/img/gg.PNG')}
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
                                    onClick={() => this.notify('tc')}
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
                                    src={require('assets/img/cp.jpg')}
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
                                    onClick={() => this.notify('tc')}
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
                                    src={require('assets/img/oop.PNG')}
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
                                    onClick={() => this.notify('tc')}
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
                                    src={require('assets/img/java.jpg')}
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
                                    onClick={() => this.notify('tc')}
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
                <CardFooter>Team byteForce, CODEIT20</CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Upgrade;
