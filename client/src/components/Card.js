import React from 'react'
import { connect } from 'react-redux'
import Monk from '../art/meditating_monk_burned.png'
import exp from '../data/experience'

const getRank = (auth, state, callback) => {
  if(auth) {
    let xp = auth["experience"]
    state["rank"] = exp[xp][0]
    state["title"] = exp[xp][1]
    callback(state)
  }
}

class Card extends React.Component {
  render(){
    let rank, title, comment
    if(this.props.authReducer) {
      rank = exp[this.props.authReducer.experience][0]
      title = exp[this.props.authReducer.experience][1]
      comment = exp[this.props.authReducer.experience][2]
    } 
    return (
      <div>
        <div className="center" style={{color: "black", marginTop: "10px", marginBottom: "20px"}}>
          <div style={{fontSize: "6ch"}}>Rank {rank}</div>
          <div style={{fontWeight: "bold"}}>{title}</div>
          <div style={{fontStyle: "italic"}}>{comment}</div>
          <img style={{width: "40%", height: "auto", marginTop: "15px"}} src={Monk}></img>
          <div>Streak Counter: 0</div>
          <div>Experience Bar</div> 
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { authReducer: state.auth }
}

export default connect(mapStateToProps)(Card)
