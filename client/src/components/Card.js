import React from 'react'
import { connect } from 'react-redux'
import calcCounter from '../utils/counterCalc'
import getRank from '../utils/getRank'
import ProgressBar from './ProgressBar'

class Card extends React.Component {
  
  renderCard = () => {
    
    const userStats = getRank(this.props.authReducer.experience) 
    const dates = this.props.authReducer['session'].map(value => value["date"])
    const counter = calcCounter(dates)
    
    return (
      <div className="center" style={{color: "black", marginTop: "10px", marginBottom: "20px"}}>
        <div style={{fontSize: "6ch"}}>Rank {userStats["rank"]}</div>
        <div style={{fontWeight: "bold"}}>{userStats["title"]}</div>
        <div style={{fontStyle: "italic"}}>{userStats["quote"]}</div>
        <img style={userStats["style"]} src={userStats["image"]}></img> 
        <div>
          Streak Counter: 
          <div style={{fontSize: "4ch"}}>
            {counter}
          </div>
        </div>
        <div>Experience Bar: </div>
        <div>Current xp: {userStats.currentXp}</div> 
        <div>Need xp: {userStats.neededXp}</div>
        <ProgressBar percentage={userStats.currentXp / userStats.neededXp * 100}/>
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

export default connect(mapStateToProps)(Card)
