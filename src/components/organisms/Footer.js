import React, { Component } from 'react';

const FooterStyle = {
  'position': 'fixed',
  'paddingBottom': '2%',
  'paddingLeft': '2%',
  'paddingRight': '0%',
  'left': '0',
  'bottom': '0',
  color: 'white',
  'fontSize': '10px',
  'textAlign': 'center',
  'width': '100%',
  'margin': 'auto',
}

class Footer extends Component {
  render() {
    return (
      <footer style={FooterStyle}>
        {this.props.name}
      </footer>
    );
  }
}

export default Footer;
