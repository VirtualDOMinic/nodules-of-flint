import React, { Component } from 'react';
import styled from 'styled-components';
import { About } from '../atoms';
import { Header, Footer } from '../organisms';
import Nodules from '../organisms/Nodules';
import Nodule from "../molecules/Nodule";
import Modal from '../organisms/Modal';

const Container = styled.div`
  color: white;
  background-color: #000;
  width: 100%;
  height: 100%;
`;

const text = {
  'color': 'white'
}

const NodulesContainer = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 7em;
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 0em;
  grid-row-gap: 3em;
`;

class RocksPage extends Component {
  state = {
    selectedImage: "",
    imageOrderArr: Array.from({length: 200}, (_, i) => i + 1)
  }

  showModal = (event) => {
    console.log("modal clicked!")
    this.setState({selectedImage: event.target.src})
  }

  hideModal = (event) => {
    this.setState({selectedImage: ""})
  }

  render() {
    return (
      <div>
        <Container>
          <Header
            title='NODULES OF FLINT'
          />
          <NodulesContainer>
            {this.state.imageOrderArr.map(n => <Nodule key={n} number={n} onClick={this.showModal} />)}
          </NodulesContainer>
          <Footer
            name='Photography by Paige Scalco. Coded by Lee Doughty. 2018'
          />
        </Container>
        <Modal image={this.state.selectedImage} onCloseClick={this.hideModal} />
      </div>
    );
  }
}

// RocksPage.defaultProps = {
//   nodules: Array.from({length: 200}, (_, i) => i + 1)
// }

export default RocksPage;
