import React, {Component} from "react";

class Savebook extends Component{
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this);
    }
    

    handleClick(item){
        console.log(item)

    }
    render(){
        console.log(this.props.currentbook, "Here")
        return (
        <div> 
        
 <button onClick={()=> this.handleClick(this.props.currentbook.volumeInfo)}>Save Book to my Collection</button>
        </div> )
    
}}

export default Savebook;