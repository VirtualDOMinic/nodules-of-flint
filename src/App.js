import React, { Component } from 'react';

import { RocksPage } from './components/pages';
import { OpeningPage } from './components/pages';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import AboutPage from "./components/pages/AboutPage";
import Layout from "./components/pages/Layout";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Layout/>
    );
  }
}

export default App;
