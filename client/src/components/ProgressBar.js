import React from 'react'

const Filler = (props) => {
  
  const fillerStyle = {
    background: "#1DA598",
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
    border: "1px solid #333",
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
  state = {
    percentage: this.props.percentage
  }
  componentDidMount(){
    this.setState({percentage: this.props.percentage})
  }
  render() {
    return (
      <Bar percentage={this.state.percentage}/>
    )
  }
}
export default Progressbar