import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import ShowCase from './components/ShowCase';




class App extends Component {

  render() {
    return (
      <div className='App'>
        <Header />

        <ShowCase />

      </div>
    );
  }
}

export default App;
