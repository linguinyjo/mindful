import React from 'react'
import { connect } from 'react-redux'
import quotes from '../data/quotes'

class Header extends React.Component {
  render() {
    
    const quote = quotes[Math.floor(Math.random() * (21 - 1)) + 1] 

    const renderHeader = () => {
      const style = {color: "black", fontWeight: "bold"}
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
          <div className="center" style={{fontFamily: "cursive", fontStyle: "italic"}}>
            {quote}
            <ul className="right">
              {renderHeader()}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({auth}){
  return { authReducer: auth }
}
export default connect(mapStateToProps)(Header)
