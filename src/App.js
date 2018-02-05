import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Searchbar from "./components/Search/Searchbar";
import axios from "axios";
import Bookshelf from './components/bookshelf/bookshelf';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      favoriteBooks: [],
      results: []
    }
    this.getFavorites = this.getFavorites.bind(this)
  }
  componentDidMount () {
    axios.get(`/api/books`).then (response => this.setState({results: response.data.favoriteBooks}))
}

getFavorites(){
  axios.get('/api/savebooks').then (response => this.setState({favoriteBooks: response.data}));
}

  render() {
    console.log(this.state.favoriteBooks)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Library Collection</h1>
        </header>
        <Searchbar getFavorites={this.getFavorites}/>
        <Bookshelf favorites={this.state.favoriteBooks}/>
      </div>
    );
  }
}

export default App;
