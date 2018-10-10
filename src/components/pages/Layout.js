import React, { Component } from 'react';
import styled from 'styled-components';
import { About } from '../atoms';
import { Header, Footer } from '../organisms';
import RocksPage from './RocksPage';
import AboutPage from './AboutPage';
import loading from '../atoms';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import OpeningPage from "./OpeningPage";


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

class Layout extends Component {
  render() {
    const imageClick = () => {
      console.log('Click');
    }
    return (
      <Router>
        <Container>
          <Header title='NODULES OF FLINT'/>
          <Route exact path="/" component={OpeningPage}/>
          <Route path="/rockspage" component={RocksPage}/>
          <Route path="/aboutpage" component={AboutPage}/>
          <Footer name='Photography by Paige Scalco. Coded by Lee Doughty. 2018'/>
        </Container>
      </Router>
    );
  }
}

export default Layout;
