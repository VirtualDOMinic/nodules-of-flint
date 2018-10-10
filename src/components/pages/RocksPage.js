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
    this.setState({selectedImage: event.target.src})
  }

  hideModal = (event) => {
    this.setState({selectedImage: ""})
  }

  // Took the randomise function from a site I like: gomakethings.com/how-to-shuffle-an-array-with-vanilla-js
  // Used this as I don't think we need lodash just for this functionality, and it's too late for me to make this function myself :P
  randomiseArr = (arr) => {

    var currentIndex = arr.length;
	  var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = arr[currentIndex];
		arr[currentIndex] = arr[randomIndex];
		arr[randomIndex] = temporaryValue;
	}

	return arr;
  }

  // Purposely verbose function name for demo purposes!
  randomiseImages = () => {
    this.setState({imageOrderArr: this.randomiseArr(this.state.imageOrderArr)})
  }

  render() {
    return (
      <div>
        <Container>
          <Header
            clickFn={this.randomiseImages}
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


export default RocksPage;
