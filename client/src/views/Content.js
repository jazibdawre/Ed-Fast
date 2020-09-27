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
import React from 'react';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from 'reactstrap';

class Icons extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <Row>
                    <Col md="9">
                      <CardTitle tag="h2">Video/Content topic</CardTitle>
                    </Col>
                    <Col md="3">
                      <div className="update ml-auto mr-auto">
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          <Button
                            className="btn-round"
                            color="primary"
                            type="submit"
                          >
                            Back to main page
                          </Button>
                        </a>
                      </div>
                    </Col>
                  </Row>
                  <p className="card-category">
                    <h6>module no</h6>
                  </p>
                </CardHeader>
                <CardBody>
                  <div className="video mx-auto">
                    <iframe
                      width="853"
                      height="480"
                      src="https://www.youtube.com/embed/g7wEpxwgB3w"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </CardBody>
                <Card>
                  <CardHeader>
                    <CardTitle tag="h5">Conclusion:</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <p>
                      <h5>
                        A website (also written as web site) is a collection of
                        web pages and related content that is identified by a
                        common domain name and published on at least one web
                        server. Notable examples are wikipedia.org, google.com,
                        and amazon.com. All publicly accessible websites
                        collectively constitute the World Wide Web. There are
                        also private websites that can only be accessed on a
                        private network, such as a company's internal website
                        for its employees. Websites are typically dedicated to a
                        particular topic or purpose, such as news, education,
                        commerce, entertainment, or social networking.
                        Hyperlinking between web pages guides the navigation of
                        the site, which often starts with a home page. Users can
                        access websites on a range of devices, including
                        desktops, laptops, tablets, and smartphones. The
                        software application used on these devices is called a
                        web browser.
                      </h5>
                    </p>
                  </CardBody>
                  <CardFooter>
                    <Row>
                      <Col sm="8"></Col>
                      <Col sm="2">
                        <div className="update ml-auto mr-auto">
                          <a href="#" onClick={(e) => e.preventDefault()}>
                            <Button
                              className="btn-round"
                              color="primary"
                              type="submit"
                            >
                              Previous Item
                            </Button>
                          </a>
                        </div>
                      </Col>
                      <Col sm="2">
                        <div className="update ml-auto mr-auto">
                          <a href="#" onClick={(e) => e.preventDefault()}>
                            <Button
                              className="btn-round"
                              color="primary"
                              type="submit"
                            >
                              Next Item
                            </Button>
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </CardFooter>
                </Card>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Icons;
