import React from 'react'
import { connect } from 'react-redux'
import Monk from '../art/meditating_monk_burned.png'
import calcCounter from '../utils/counterCalc'
import getRank from '../utils/getRank'



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
        <img style={{width: "40%", height: "auto", marginTop: "15px"}} src={Monk}></img> 
        <div>
          Streak Counter: 
          <div style={{fontSize: "4ch"}}>
            {counter}
          </div>
        </div>
        <div>Experience Bar: total xp = {this.props.authReducer.experience}</div>
        <div>Current xp: {userStats.currentXp}</div> 
        <div>Need xp: {userStats.neededXp}</div>
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
