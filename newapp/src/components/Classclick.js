import React, { Component } from 'react'

 class Classclick extends Component {

    ClickButton(){
        console.log('clicked the button')
    }
  render() {
    return (
      <div>
        <button onClick={this.ClickButton}>Click me</button>
      </div>
    )
  }
}

export default Classclick
