import React, { useContext, useState } from 'react';
//import { useHistory } from 'react-router-dom';
//import UserContext from '../../context/UserContext.js';
//import Axios from 'axios';
//import { Container } from '@material-ui/core';

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
  Label,
  Row,
  Col,
} from "reactstrap";

export default function Tables() {
  //const { userData, setUserData } = useContext(UserContext);
  //const history = useHistory();
  let listOfRequests = [];
  let i;
  const [responseData, setRespnseData] = useState([]);
  const test = {questions: [
    {
      id: 1,
      // question
      questionStatement: "whats ur name?",
      // multiple options
      options: [
        {
          // what the option states
          optionContent: "abhbfe",
          // whether entered option is the answer or not
        },
        {
          // what the option states
          optionContent: "abhbfe",
          // whether entered option is the answer or not
        },
        {
          // what the option states
          optionContent: "abhbfe",
          // whether entered option is the answer or not
        },
        {
          // what the option states
          optionContent: "abhbfe",
          // whether entered option is the answer or not
        }
      ],
    },
    {
      id: 2,
      // question
      questionStatement: "whats ur address?",
      // multiple options
      options: [
        {
          // what the option states
          optionContent: "abhbfe",
          // whether entered option is the answer or not
        },
        {
          // what the option states
          optionContent: "abhbfe",
          // whether entered option is the answer or not
        },
        {
          // what the option states
          optionContent: "abhbfe",
          // whether entered option is the answer or not
        },
        {
          // what the option states
          optionContent: "abhbfe",
          // whether entered option is the answer or not
        }
      ],
    }
  ]
}

 /* const displayRequestHandler = async (e) => {
    e.preventDefault();
    await Axios.get('http://localhost:5000/user/u4189492/request', {
      headers: {
        'x-auth-token': userData.token,
      },
    })
      .then((requestRes) => {
        setRespnseData(requestRes.data.requests);
        console.log(listOfRequests);
      })
      .catch((err) => {
        console.log(err);
      });
  };*/

  return (
    <div>
        <div>
            <>
            <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h3">Quiz</CardTitle>
                </CardHeader>
                </Card>
                </Col>
                </Row>
              {test &&
                test.questions.map((d) => {
                  return (
                    <div className='content' key={d.id}>
                  <Row>
                    <Col md="12">
                    <Card>
                     <CardBody>
                     <Form>
                    <Label for="Questions"><h5>Question: <b>{d.questionStatement}</b> </h5></Label>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="answer" value="a" />{d.options[0].optionContent}
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="answer" value="b" />{d.options[1].optionContent}
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="answer" value="c" />{d.options[2].optionContent}
                        </Label>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            <Input type="radio" name="answer" value="d" />{d.options[3].optionContent}
                        </Label>
                    </FormGroup>
                </Form>
                     </CardBody>
                    </Card>
                    </Col>
                  </Row>
                  
                      </div>
                      
                  );
                })}
            </>
            <Row>
                      <div className="update ml-auto mr-auto" align="center">
                        <Button
                          className="btn-round"
                          color="primary"
                          onClick={() => this.handleSubmit('Student')}
                        >
                          Submit
                        </Button>
                      </div>
                    </Row>
        </div>
      
    </div>
  );
}