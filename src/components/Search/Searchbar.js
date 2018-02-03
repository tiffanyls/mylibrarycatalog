import React, {Component} from "react";
import axios from "axios";

class Searchbar extends Component {
    constructor() {
        super();
        this.state = {
            term: "",
            results: []
        }
    }

input (term) {
    axios.put(`/api/books/`)
}
// search () {
//     axios.get(`api/`
//     `).then (response => (this.setState)

//  }
render() {
    return ( 
    
    <div className = "input" input type ="text" value={this.setState} onChange = {e=>this.handleChange(e)}/>
        
    )
}
}
export default Searchbar;