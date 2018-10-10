import React, { Component } from 'react';
import styled from 'styled-components';

const Caret = styled.div`
  font-size: 8px;
  color: white;
  position: absolute;
  right: 3%;
`;

class Up extends Component {
handleClick = () => {
  window.scrollTo(0,0);
}
    render() {
      return (
        <Caret onClick={this.handleClick}><h1>^</h1></Caret>
    );
  }
}

export default Up;
