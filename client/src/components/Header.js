import React from 'react'
import { connect } from 'react-redux'

class Header extends React.Component {
  render() {
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
            "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment."
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
