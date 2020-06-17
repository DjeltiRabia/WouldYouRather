import React, { Component } from 'react'

class Page404 extends Component {
 
  render() {
  

    return (
        <div className="page404"  >
        <h1>Page 404!</h1>
        <div>
        <img src={require('../page404.png')} alt="page404" />
        </div>
       
        <h2>This page does not exist</h2>
        </div>
    )
  
}
}

export default Page404