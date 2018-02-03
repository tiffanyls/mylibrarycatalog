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
    axios.put(`/api/books/`, this.state).then(response => {

    })
}
// search () {
//     axios.get(`api/`
//     `).then (response => (this.setState)

//  }
render() {
    return ( 
    <div>
    <input type ="text" onChange = {e=>this.handleChange(e)}/>
    </div>
        
    )
}
}
export default Searchbar;