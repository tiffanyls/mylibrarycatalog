import React, { Component } from "react";
import axios from "axios";
import Searchbar from "./../Search/Searchbar";

class Bookshelf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookshelf: [],
      name: 'My Collection',
      isEditing: false
    };
    this.deleteBook = this.deleteBook.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleEdit(i){
   this.setState({isEditing:true})
  };
  handleChange(e){
    axios.put(`/api/updatebookshelf=${e.target.value}`)
    .then(response => this.setState.name);
  }

  deleteBook(i) {
    axios.delete(`/api/deletebook/${i}`)
      .then(response => this.props.getFavorites());
  };

  render() { 
    // console.log(this.props.favorites, "here");
      let display = this.props.favorites.map((c, i) => {
        return (<div>
          <h2>My Collection</h2><button onClick={()=> this.toggleEdit(i)}>Rename</button>
          <h2> <input value = {this.state.name} onChange={(e) => this.handleChange(e)}/></h2>
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
     
      return <div><Searchbar />
      {display}
      </div>
    }
  }

export default Bookshelf;
