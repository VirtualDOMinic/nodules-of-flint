import React, { Component } from 'react';
import styled from 'styled-components';

const Rock = styled.img`
  width: 100%;
`;

class Nodule extends Component {
  render() {
    const n = this.props.number;
    const src = `/images/nodule-${n}.jpg`;
    return (
      <Rock src={src} onClick={this.props.onClick}/>
    );
  }
}

export default Nodule;
