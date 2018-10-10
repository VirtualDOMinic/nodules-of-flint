import React, { Component } from 'react';
import styled from 'styled-components';
// import { About } from '../atoms';
import { Header, Footer } from '../organisms';

const Container = styled.div`
  color: white;
  background-color: #000;
  width: 100%;
  height: 100%;
`;

const text = {
  'color': 'white'
}

const AboutHeader = styled.div`
  font-size: 50px;
`;

const BookImage = styled.div`
  width: 10%;
  margin-left: 33%;
  margin-top: 10%;
`;

const BodyText = styled.div`
  text-align: center;
  padding-left: 27%;
  padding-right: 27%;
`;

class AboutPage extends Component {
  render() {
    return (
      <Container>
        <BookImage>
        <img style={{'width':'500px'}} src={require('../atoms/Book.jpg')}/>
        </BookImage>
        <Header
          title='NODULES OF FLINT'
        />
        <BodyText>
        <p>Nodules of Flint is an ongoing documentary project of Brighton Beach. The famous seaside beach has always been a stage for photographers and tourists, showing itself on many postcards and social media galleries. We often forget to look at the most obvious in front of us. The pebbles are a famous part of Brightons identity and this project aims to celebrate their beauty. The project consists of a publication - and the website was a collaboration between myself and Lee Doughty - whose work consists of creative coding and digital design.</p>
        </BodyText>
        <Footer
          name='Photography by Paige Scalco. Coded by Lee Doughty. 2018'
        />
      </Container>
    );
  }
}

export default AboutPage;
