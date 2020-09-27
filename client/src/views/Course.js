import React from 'react';
// reactstrap components
import {
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

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h2">Name of course</CardTitle>
                  <p className="card-category">
                    <h6>name of university</h6>
                  </p>
                </CardHeader>
                <CardBody>
                  <Card className="card-user">
                    <div className="image">
                      <img
                        alt="..."
                        src={require('assets/img/damir-bosnjak.jpg')}
                      />
                    </div>
                    <CardBody>
                      <div className="author">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="avatar border-gray"
                            src={require('assets/img/mike.jpg')}
                          />
                          <h5 className="title">Professor name</h5>
                        </a>
                      </div>
                      <p>
                        <h5>
                          dgsdvfuyagfbiaqefhiuqebgiu ubfqpeibfpeuqfbqpuf9pq fb
                        </h5>
                      </p>
                    </CardBody>
                  </Card>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">module 1 name</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <h6>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              video 1
                            </a>
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              content goes here
                            </a>
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              video 1
                            </a>
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              content goes here
                            </a>
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              video 1
                            </a>
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              content goes here
                            </a>
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#" onClick={(e) => e.preventDefault()}>
                            <Button
                              className="btn-round"
                              color="primary"
                              type="submit"
                            >
                              Take Quiz
                            </Button>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">module 2 name</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <h6>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              video 1
                            </a>
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              content goes here
                            </a>
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              video 1
                            </a>
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              content goes here
                            </a>
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              video 1
                            </a>
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              content goes here
                            </a>
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#" onClick={(e) => e.preventDefault()}>
                            <Button
                              className="btn-round"
                              color="primary"
                              type="submit"
                            >
                              Take Quiz
                            </Button>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">module 3 name</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table>
                    <tbody>
                      <tr>
                        <td>
                          <h6>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              video 1
                            </a>
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              content goes here
                            </a>
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              video 1
                            </a>
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              content goes here
                            </a>
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              video 1
                            </a>
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <h6>
                            <a href="#" onClick={(e) => e.preventDefault()}>
                              content goes here
                            </a>
                          </h6>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="#" onClick={(e) => e.preventDefault()}>
                            <Button
                              className="btn-round"
                              color="primary"
                              type="submit"
                            >
                              Take Quiz
                            </Button>
                          </a>
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

export default Dashboard;
