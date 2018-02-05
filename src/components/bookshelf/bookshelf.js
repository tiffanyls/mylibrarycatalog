import React, {Component} from "react";
import axios from "axios";

class Bookshelf extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bookshelf: []
        }
    }




render() {
    console.log(this.props.favorites);
    return (
        <div>
        <h1> {this.props.favorites.volumeInfo}</h1>
        </div>
    )

    
}
}

export default Bookshelf;