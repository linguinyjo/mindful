import React from 'react'
import budha from '../art/elderlymonkburned.png'

class Home extends React.Component {
  render() {
    return (
      <div className="container"> 
        <div className="center" style={{marginTop: "100px", color: "black"}}>
          Welcome Home
        </div>
        <div className="center" >
          <img style={{width: "20%", height: "auto"}} src={budha}></img>  
        </div>
      </div>
    )
  }
}
export default Home