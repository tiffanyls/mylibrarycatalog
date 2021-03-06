import React, { Component } from "react";
import axios from "axios";
import Results from "./../Results/results";
import './../Search/Searchbar.css';


class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      results: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ term: event.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    axios
      .get(`/api/books?search=${this.state.term}`)
      .then(response => this.setState({ results: response.data.items }));
  }

  render() {
    // console.log(this.state.results);
    const results = this.state.results.map((c, i) => (
      <Results getFavorites={this.props.getFavorites} key={i} book={c} />
    ));
    //Results key={i} book={c} />
    return (
      <div className='container'>
        <form onSubmit={e => this.handleClick(e)}>
          <input
            type="text"
            term={this.state.value}
            onChange={this.handleChange}
            placeholder="Search for your book by title, author or subject"
          />
        </form>
        <button className ="searchButton" onClick={this.handleClick}>Search</button>
        
        {results}
        
      </div>
    );
  }
}
export default Searchbar;
