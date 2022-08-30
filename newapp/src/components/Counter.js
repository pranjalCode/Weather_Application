import React, { Component } from 'react'

 class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    incrementValue(){
        this.setState({
            count: this.state.count +1
        })
    }
    
  render() {
    return (
      <div>
        <div>Count { this.state.count}</div>
        <button onClick={ () => this.incrementValue()}>Increment</button>
      </div>
    )
  }
}

export default Counter
