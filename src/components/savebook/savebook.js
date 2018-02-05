import React, {Component} from "react";
import axios from "axios";

class Savebook extends Component{
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this);
    }
    

    handleClick(item){
        axios.post(`/api/books`,{item});
        this.props.getFavorites()
    }
    render(){
        //console.log(this.props.currentbook, "Here")
        return (
        <div> 
        
 <button onClick={()=> this.handleClick(this.props.currentbook.volumeInfo)}>Save Book to my Collection</button>
        </div> )
    
}}

export default Savebook;