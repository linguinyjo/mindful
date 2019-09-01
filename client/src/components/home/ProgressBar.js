import React from 'react'
import { connect } from 'react-redux'

const Filler = (props) => {  
  const fillerStyle = {
    background: "#FFD700",
    height: "100%",
    borderRadius: "inherit",
    transition: "width .2s ease-in",
    width: props.percentage + "%"
  }
  return (
    <div style={fillerStyle}>
    </div>
  )
}

const Bar = (props) => {
  const barStyle = { 
    position: "relative",
    height: "20px",
    borderRadius: "50px",
    border: "2px solid #333",
    marginTop: "20px"
  }
  return (
    <div className="container">
      <div className="center" style={barStyle}>
        <Filler percentage={props.percentage}/>
      </div>
    </div>
  )

}

class Progressbar extends React.Component {
  render() {
    return (
      <Bar percentage={this.props.percent}/>
    )
  }
}

function mapStateToProps({ percent }) {
  return { percent }
}

export default connect(mapStateToProps)(Progressbar)