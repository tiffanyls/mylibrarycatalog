import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Searchbar from "./components/Search/Searchbar";
import axios from "axios";

class App extends Component {

  componentDidMount () {
    axios.get(`/api/books`).then (response => this.setState({results: response.data}))
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Library Catalog</h1>
        </header>
        <Searchbar />
      </div>
    );
  }
}

export default App;
