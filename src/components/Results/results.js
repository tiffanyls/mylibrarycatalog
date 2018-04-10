import React, { Component } from "react";
import Savebook from "./../savebook/savebook";
import Searchbar from "../Search/Searchbar";

class Results extends Component {
  render() {
    //console.log(this.props.book, "Here")
    return (
      <div>
        {this.props.book.volumeInfo.imageLinks && (
        <img src={this.props.book.volumeInfo.imageLinks.thumbnail} alt="Thumbnail"/> )}
        <h1> {this.props.book.volumeInfo.title}</h1>
        <h2> {this.props.book.volumeInfo.authors}</h2>
        <Savebook
          getFavorites={this.props.getFavorites}
          currentbook={this.props.book}
        />
      </div>
    );
  }
}

export default Results;
