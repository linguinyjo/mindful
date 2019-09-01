import React from 'react'
import { connect } from 'react-redux'
import { Container } from '@material-ui/core';

const renderData = (data) => {
  return (
    data.map(item => {
      return <div>Date:{item.date} Duration: {item.duration} Comment: {item.comments ? item.comments : "N/A"}</div>
    })
    
  )
}

class Data extends React.Component {
  render(){
    const data = this.props.state.auth ? this.props.state.auth.session : null
    console.log(data)
    return (
      <div>
        <Container maxWidth="md" style={{backgroundColor: "white", border: "solid", marginTop: "30px"}}>
          <div>
            <h5>Temporary display for data until i implement a table</h5>
          </div>
          <div>{data ? renderData(data) : null}</div>
        </Container>
       
      </div>
    )
  }
}
function mapStateToProps(state){
  return {state}
}

export default connect(mapStateToProps)(Data)