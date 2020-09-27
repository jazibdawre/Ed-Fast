import React, { useContext, useState } from 'react';
//import { useHistory } from 'react-router-dom';
//import UserContext from '../../context/UserContext.js';
//import Axios from 'axios';
//import { Container } from '@material-ui/core';

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
        }
      ],
    },
    {
      id: 2,
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
          
            <h2>Requests</h2>
            <button> 
            </button>

            <>
              {test &&
                test.questions.map((d) => {
                  return (
                    <div className='card' key={d.id}>
                      <div className='container'>
                        <h4>
                          Question: <b>{d.questionStatement}</b>
                        </h4>
                        <ul>
                          <li>Pick up Location: </li>
                          <li>Drop off Location </li>
                        </ul>
                      </div>
                    </div>
                  );
                })}
            </>
          
        </div>
      
    </div>
  );
}