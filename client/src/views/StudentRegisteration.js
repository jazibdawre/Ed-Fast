import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

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
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      contacts: '',
      email: '',
      institute: '',
      gradyear: '',
      redirect: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  handleSubmit() {
    //send req to server
    axios
      .post(`http://localhost:3001/students`, this.state)
      .then((res) => {
        console.log(res);

        const user = {
          details: res.data._id,
        };

        axios
          .put(`http://localhost:3001/users`, user)
          .then((res) => {
            this.setState({ redirect: '/admin/dashboard' });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <>
        <div className="content">
          <Row>
            <Col md="2"></Col>
            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Student Registration</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                            name="name"
                            defaultValue=""
                            placeholder="First Name"
                            type="text"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            name="lname"
                            defaultValue=""
                            placeholder="Last Name"
                            type="text"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label>Address</label>
                          <Input
                            name="address"
                            defaultValue=""
                            placeholder="Address"
                            type="text"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label>Contact Number</label>
                          <Input
                            placeholder="contact no"
                            type="number"
                            name="contact"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>

                      <Col className="pl-1" md="7">
                        <FormGroup>
                          <label htmlFor="email">Email address</label>
                          <Input
                            placeholder="Email"
                            type="email"
                            name="email"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="p1-1" md="9">
                        <FormGroup>
                          <label>Name of institution:</label>
                          <Input
                            defaultValue=""
                            placeholder="Institute"
                            type="text"
                            name="institute"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="3">
                        <FormGroup>
                          <label>Graduation year</label>
                          <Input
                            placeholder="gradyear"
                            type="number"
                            name="gradyear"
                            onChange={this.handleChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <div className="update ml-auto mr-auto">
                        <Button
                          className="btn-round"
                          color="primary"
                          onClick={() => this.handleSubmit()}
                        >
                          Register
                        </Button>
                      </div>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Col md="2"></Col>
          </Row>
        </div>
      </>
    );
  }
}

export default User;
