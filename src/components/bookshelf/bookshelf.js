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
    let display = this.props.favorites.map((c, i) => {
    return <div key={i} > <h1> {c.title}</h1> <h1> {c.authors}</h1>
    </div>});

    return (
        <div>
        {display}
        </div>
    )

    
}
}

export default Bookshelf;