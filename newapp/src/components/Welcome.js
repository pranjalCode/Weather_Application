import React, { Component } from "react";

class Welcome extends Component{
    render(){
        return <h1> Class {this.props.city} </h1>
    }
}

export default Welcome;