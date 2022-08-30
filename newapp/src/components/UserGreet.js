import React, { Component } from 'react'

class UserGreet extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    
  render() {
      let message
      if(this.state.isLoggedIn){
          message= <div>Welcome Pranjal</div>
      } else{
          message= <div>Welcome Guest</div>
      }

      return(
          <div>{ message }</div>
      )
    //   if(this.state.isLoggedIn){
    //       return(
    //           <div>Welcome Pranjal</div>
    //       )
    //   } else{
    //       return(
    //           <div>Welcome Guest</div>
    //       )
    //   }


    // return (
    //   <div>
    //     Hello Pranjal
    //   </div>
    // )
  }
}

export default UserGreet
