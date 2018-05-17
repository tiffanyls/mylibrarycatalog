import React, { Component } from "react";
// import Savebook from "./../savebook/savebook";
import axios from 'axios';
import '../Results/results.css';


class Results extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item) {
    axios.post(`/api/books`, { item });
    this.props.getFavorites();
  }
  render() {
    // console.log(this.props.book, "Here")
    return (
      <div className="card">
        {this.props.book.volumeInfo.imageLinks && (
        <img src={this.props.book.volumeInfo.imageLinks.thumbnail} alt="Thumbnail"/> )}
        <h1> {this.props.book.volumeInfo.title}</h1>
        <h1> {this.props.book.volumeInfo.authors}</h1>
          
        <div>
        <button onClick={() => this.handleClick(this.props.book.volumeInfo)}>
          Save Book to my Collection
        </button>
        </div>

        {/* <Savebook
          getFavorites={this.props.getFavorites}
          currentbook={this.props.book}
        /> */}
      </div>
    );
  }
}

export default Results;
