import React from 'react'

function NameList() {

    const name= ['Ammy', 'Jack', 'Jhon']
    const nameList = name.map(name => <h1>{name}</h1>)
  return (
    <div>
        {nameList}
            {/* // name.map(name => <h1>{name}</h1>) */}
        
      {/* <h2>{ name[0] }</h2>
      <h2>{ name[1] }</h2>
      <h2>{ name[2] }</h2> */}
    </div>
  )
}

export default NameList
