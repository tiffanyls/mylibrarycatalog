import React, {Component} from "react";

const Results = (props) => {
        return <div> 
        <h1> {props.book.volumeInfo.title}</h1>
        <img src={props.book.volumeInfo.imageLinks.thumbnail}/>
        </div> 
    
}

export default Results;