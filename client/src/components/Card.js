import React from 'react'
import { connect } from 'react-redux'
import calcCounter from '../utils/counterCalc'
import getRank from '../utils/getRank'
import ProgressBar from './ProgressBar'
import * as actions from '../actions'


class Card extends React.Component {
  
  renderCard = () => {
    
    const userStats = getRank(this.props.authReducer.experience) 
    const dates = this.props.authReducer['session'].map(value => value["date"])
    const counter = calcCounter(dates)
    
    //whenever renderCard gets called, dispatch a redux action to update state with new percentage so 
    //the progress bar automatically re-renders upon state change
    this.props.updateXpBar(userStats.percentage)
    
    return (
      <div className="center" style={{color: "black", marginTop: "10px", marginBottom: "20px"}}>
        <div>
          <div style={{fontSize: "6ch"}}>Rank {userStats["rank"]}</div>
          <div style={{fontWeight: "bold"}}>{userStats["title"]}</div>
          <div style={{fontStyle: "italic"}}>{userStats["quote"]}</div>
          <img style={userStats["style"]} src={userStats["image"]}></img> 
        </div>
        <div>
          Streak Counter: 
          <div className="container" style={{fontSize: "5ch", width: "20%", marginTop: "10px"}}>
            {counter}
          </div>
        </div>
        <div style={{marginTop: "10px"}}>
          <div>Current xp: {userStats.currentXp}</div> 
          <div>Next rank: {userStats.neededXp}</div>
          <ProgressBar />
        </div>
      </div>
    )
  }
  
  render(){
    
    return (
      <div>
        {this.props.authReducer ? this.renderCard() : null}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { authReducer: state.auth }
}

export default connect(mapStateToProps, actions)(Card)
