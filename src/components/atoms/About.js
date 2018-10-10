import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Link
} from 'react-router-dom'

const QuestionMark = styled.div`
  font-size: 8px;
  color: white;
  position: absolute;
  left: 2%;
  font-family: avenir;
`;

class About extends Component {
  render() {
    return (
      <Link to="/aboutpage">
      <QuestionMark><h1>?</h1></QuestionMark>
      </Link>
    );
  }
}

export default About;
