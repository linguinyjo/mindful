import React from 'react'
import { connect } from 'react-redux'

class Header extends React.Component {
  render() {
    const style = {color: "black", fontWeight: "bold"}
    
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
            <li><a href="/" style={style}>Home</a></li>
            <li><a href="/about" style={style}>About</a></li>
            <li><a href="/data" style={style}>Data</a></li>
          </ul>
          <ul className="right">
            {renderHeader()}
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({auth}){
  return { authReducer: auth }
}
export default connect(mapStateToProps)(Header)
