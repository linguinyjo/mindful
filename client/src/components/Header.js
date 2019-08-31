import React from 'react'
import { connect } from 'react-redux'
import quotes from '../data/quotes'

class Header extends React.Component {
  render() {
    const style = {color: "black", fontWeight: "bold"}
    const quote = quotes[Math.floor(Math.random() * (21 - 1)) + 1] 
    
    const renderHeader = () => {
      switch (this.props.authReducer){
        case null:
          return "null"
        case false:
            return <li><a href="/auth/google" style={style}>Login</a></li>
        default:
            return <li key="2"><a href="/api/logout" style={style}>Logout</a></li>
      }
    }
    return (
      <nav className="container" style={{backgroundColor: "beige", color: "black"}}>
        <div className="nav-wrapper">
          <ul className="left">
            <li><a href="/auth/google" style={style}>Home</a></li>
            <li><a href="/auth/google" style={style}>About</a></li>
            <li><a href="/auth/google" style={style}>Data</a></li>
          </ul>
          <ul className="right">
            {renderHeader()}
          </ul>
        </div>
        <div className="center" style={{fontFamily: "cursive", fontStyle: "italic", fontWeight: "bold", fontSize: "2ch"}}>"{quote}"</div>
      </nav>
    )
  }
}

function mapStateToProps({auth}){
  return { authReducer: auth }
}
export default connect(mapStateToProps)(Header)
