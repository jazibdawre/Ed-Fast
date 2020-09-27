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
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";



class User extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              
              <Card>
                <CardHeader>
                  <CardTitle tag="h3">Q1. Fees bhara tumne?</CardTitle>
                </CardHeader>
                <CardBody>
                  <ul className="list-unstyled team-members">
                    <li>
                      <Row>
                        <Col className="text-left" md="1">
                          <Button
                            className="btn-round btn-icon"
                            color="primary"
                            outline
                            size="sm"
                          >
                          </Button>
                        </Col>
                        <Col md="11">
                          <h5>Mai gareeb hu, nahi bharunga </h5>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col className="text-left" md="1">
                          <Button
                            className="btn-round btn-icon"
                            color="primary"
                            outline
                            size="sm"
                          >
                          </Button>
                        </Col>
                        <Col md="11">
                          <h5>Mai ameer hu, bhar diya</h5>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col className="text-left" md="1">
                          <Button
                            className="btn-round btn-icon"
                            color="primary"
                            outline
                            size="sm"
                          >
                          </Button>
                        </Col>
                        <Col md="11">
                          <h5>SVKM portal crash ho rha hai, nahi bhar pa rha </h5>
                        </Col>
                      </Row>
                    </li>
                    <li>
                      <Row>
                        <Col className="text-left" md="1">
                          <Button
                            className="btn-round btn-icon"
                            color="primary"
                            outline
                            size="sm"
                          >
                          </Button>
                        </Col>
                        <Col md="11">
                          <h5>SVKM ke pas bohot paise hai, hamse lene ki kya zaroorat</h5>
                        </Col>
                      </Row>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
            <Col md="8">
              
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default User;
