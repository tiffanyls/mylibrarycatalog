import React, {Component} from "react";
import axios from "axios";

class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
            results: []
        }
    }
    

    handleChange(event) {
        this.setState({term: event.target.value});
      }

// search () {
//     axios.get(`api/`
//     `).then (response => (this.setState)

//  }
render() {
    return ( 
    <div>
    <form>
    <input type="text" term={this.state.value} onChange={this.handleChange} placeholder="Search for your book"/></form>
    <button onClick={this.handleClick}>Search</button>
    </div>
 
        
    )
}
}
export default Searchbar;