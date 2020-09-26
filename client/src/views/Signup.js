import React from 'react';

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
} from 'reactstrap';

class User extends React.Component {
  handleSubmit(type) {
    //send req to server
    if (type == 'student') {
      //route to student
    } else {
      //route to professor
    }
  }

  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="3"></Col>
            <Col md="5">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Registration</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Username</label>
                          <Input
                            defaultValue=""
                            placeholder="Enter username"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Password</label>
                          <Input
                            defaultValue=""
                            placeholder="Enter password"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          onClick={() => this.handleSubmit('student')}
                        >
                          Register as student
                        </Button>
                      </div>

                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          onClick={() => this.handleSubmit('professor')}
                        >
                          Register as professor
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col md="4"></Col>
          </Row>
        </div>
      </>
    );
  }
}

export default User;
