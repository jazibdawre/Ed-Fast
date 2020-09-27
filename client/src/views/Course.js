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
  Table,
  Row,
  Col,
} from 'reactstrap';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      title: 'Course Name',
      university: 'Name of University',
      professorname: 'Professor Name',
      details: 'Course description',
      week: [],
      redirect: null,
    };

    axios
      .get(`http://localhost:3001/courses/5f6f52759bdcb412e45c2afd`)
      .then((res) => {
        console.log(res);
        this.setState({ id: res.data._id });
        this.setState({ title: res.data.name });
        this.setState({ university: 'DJSCE' });
        //this.setState({ professorname: res.data.professors[0].name });
        this.setState({ details: res.data.description });
        this.setState({ week: res.data.week });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  displayVideo = (video) => {
    return (
      <>
        <tr>
          <td>
            <h6>
              <a
                href="#"
                onClick={(e) => this.setState({ redirect: '/admin/content' })}
              >
                {video.title}
              </a>
            </h6>
          </td>
        </tr>
      </>
    );
  };

  displayContent = (theory) => {
    return (
      <>
        <tr>
          <td>
            <h6>
              <a href="#" onClick={(e) => e.preventDefault()}>
                {theory.title}
              </a>
            </h6>
          </td>
        </tr>
      </>
    );
  };

  dispayModules = (currweek) => {
    return (
      <>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">Week {currweek.weekno}</CardTitle>
              </CardHeader>
              <CardBody>
                <Table>
                  <tbody>
                    {currweek.weekno.videos.map((video) => {
                      this.displayVideo(video);
                    })}
                    {currweek.weekno.thepry.map((theory) => {
                      this.displayContent(theory);
                    })}
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
      </>
    );
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} props={this.state.id} />;
    }
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h2">{this.state.title}</CardTitle>
                  <p className="card-category">
                    <h6>{this.state.university}</h6>
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
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="avatar border-gray"
                            src={require('assets/img/mike.jpg')}
                          />
                          <h5 className="title">{this.state.professorname}</h5>
                        </a>
                      </div>
                      <p>
                        <h5>{this.state.details}</h5>
                      </p>
                    </CardBody>
                  </Card>
                </CardBody>
              </Card>
            </Col>
          </Row>
          {this.state.week.map((week) => {
            this.dispayModules(week);
          })}
        </div>
      </>
    );
  }
}

export default Dashboard;
