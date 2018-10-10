import React, { Component } from 'react';
import styled from 'styled-components';
import { About } from '../atoms';
import { Header, Footer } from '../organisms';
import RocksPage from './RocksPage';
import loading from '../atoms';
import { Link } from 'react-router-dom'

const Container = styled.div`
  color: white;
  background-color: #000;
  width: 100%;
  height: 100%;
`;

const text = {
  'color': 'white'
}

const GifContainer = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: 50%;
  align-self: center;
`;

class OpeningPage extends Component {
  render() {
    const imageClick = () => {
      console.log('Click');
    }
    return (
        <Container>
          <Link to="/rockspage">
              <GifContainer>
                <img src={require('../atoms/Loading.gif')} onClick={() => imageClick()}/>
              </GifContainer>
          </Link>
          <Footer
            name='Photography by Paige Scalco. Coded by Lee Doughty. 2018'
          />
        </Container>
    );
  }
}

export default OpeningPage;
