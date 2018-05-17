import React, { Component } from "react";
import axios from "axios";
import Searchbar from "./../Search/Searchbar";

class Bookshelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookshelf: [],
      name: 'My Collection',
      newName: ''
    };
    this.deleteBook = this.deleteBook.bind(this);
    this.newName = this.newName.bind(this);
    this.saveName = this.saveName.bind(this);
  }

  newName(e) {
    this.setState({
      name: e.target.value
    });
  }
  
  saveName(){
    axios.put(`/api/updatebookshelf`, {
      name: this.state.name
    })
    .then(response =>this.setState({newName: response.data}));
  }

  deleteBook(i) {
    axios.delete(`/api/deletebook/${i}`)
      .then(response => this.props.getFavorites());
  };

  render() { 
    console.log(this.props.favorites, "here");
      let display = this.props.favorites.map((c, i) => {
        console.log(c)
        return (<div>
          <h2>{this.state.name}</h2>
          <input type="text" value={this.state.name} onChange={e=> this.newName(e)}/>
          <button onClick={this.saveName}> Rename</button>
          <div key={i}>
            {" "}
            <h1> {c.title}</h1> <h1> {c.authors}</h1>{" "}
            <img src={c.imageLinks.thumbnail} alt="thumbnail" />
            <button className="delete" onClick={() => this.deleteBook(i)}>
              Delete
            </button>
          </div>
          </div>
        );
      });
     
      return <div><Searchbar getFavorites={this.props.getFavorites}
      currentbook={this.props.book}/>
      {display}
      </div>
    }
  }

export default Bookshelf;
