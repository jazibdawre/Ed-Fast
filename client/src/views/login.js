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
      username: '',
      password: '',
      redirect: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserChange = (event) => {
    this.setState({ username: event.target.value });
  };

  handlePassChange = (event) => {
    this.setState({ password: event.target.value });
  };

  handleSubmit(type) {
    //send req to server
    const user = {
      username: this.state.username,
      password: this.state.password,
      type: type,
    };

    axios
      .post(`http://localhost:3001/users/signup`, user)
      .then((res) => {
        axios.defaults.headers.common['Authorization'] =
          'Bearer ' + res.data.token;
        console.log(res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });

    if (type == 'Student') {
      this.setState({ redirect: '/admin/studentRegisteration' });
    } else {
      this.setState({ redirect: '/admin/professorRegisteration' });
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <>
        <div className="content">
          <Row>
            <Col md="3"></Col>
            <Col md="5">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Sign In</CardTitle>
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
                            onChange={this.handleUserChange}
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
                            onChange={this.handlePassChange}
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <div className="update ml-auto mr-auto" align="center">
                        <Button
                          className="btn-round"
                          color="primary"
                          onClick={() => this.handleSubmit('Student')}
                        >
                          Login
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
