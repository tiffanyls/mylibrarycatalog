import React, {Component} from "react";
import Savebook from "./../savebook/savebook";

class Results extends Component{
    constructor(props){
        super(props)
    }
    render(){
        // console.log(this.props.book, "Here")
        return (<div> 
        <img src={this.props.book.volumeInfo.imageLinks.thumbnail}/>
        <h1> {this.props.book.volumeInfo.title}</h1>
        <h2> {this.props.book.volumeInfo.authors}</h2>
        <Savebook currentbook={this.props.book} />

        
        </div> )
    
}}

export default Results;