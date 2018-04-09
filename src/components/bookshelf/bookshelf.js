import React, { Component } from "react";
import axios from "axios";

class Bookshelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookshelf: []
    };
    this.deleteBook = this.deleteBook.bind(this);
  }
  deleteBook(e){
    axios.delete(`/api/deletebook`).then
    (response => this.setState({bookshelf: response.data}));
  }

  render() {
    console.log(this.props.favorites, "here");
    let display = this.props.favorites.map((c, i) => {
      return (
        <div key={i}>
          {" "}
          <h1> {c.title}</h1> <h1> {c.authors}</h1> <img src={c.imageLinks.thumbnail} alt="thumbnail"/>
          <button className="delete" onClick={() => this.deleteBook({c})} >Delete</button>
        </div>
      );
    });

    return <div>{display}</div>;
  }
}

export default Bookshelf;
