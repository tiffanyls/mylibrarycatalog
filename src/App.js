import React, { Component } from "react";
import {Link} from 'react-router-dom';


import "./App.css";
import Searchbar from "./components/Search/Searchbar";
import axios from "axios";
import Bookshelf from "./components/bookshelf/bookshelf";
import routes from './routes';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteBooks: [],
      results: [],
      showFavorites: false
    };
    this.getFavorites = this.getFavorites.bind(this);
  }
  componentDidMount() {
    axios
      .get(`/api/books`)
      .then(response =>
        this.setState({ results: response.data.favoriteBooks })
      );
  }

  getFavorites() {
    axios
      .get("/api/savebooks")
      .then(response =>
        this.setState({ favoriteBooks: response.data, showFavorites: true })
      );
  }
  changeViews() {
    this.setState({ showFavorites: !this.state.showFavorites });
  }

  render() {
    // console.log(this.state.favoriteBooks);
    return (
      <div className="header">
        <header className="App-header">
          <p>My Library Catalog</p>
        </header>
        {this.state.showFavorites ? (
          <Bookshelf favorites={this.state.favoriteBooks} getFavorites={this.getFavorites}/>
        ) : (
          <Searchbar getFavorites={this.getFavorites} />
        )}
      </div>
    );
  }
}

export default App;
