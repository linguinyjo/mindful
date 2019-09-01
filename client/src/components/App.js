import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Landing from './Landing'
import Home from './home/Home'
import Data from './data/Data'
import { connect } from 'react-redux'
import * as actions from '../actions'


class App extends React.Component {

  componentDidMount() {
    this.props.fetchUser()
  }
  
  render() {
    const showComponents = () => {
      if(this.props.authReducer) {
        return (
          <div>
          <Route path='/' exact component={Home} />
          <Route path='/data' exact component={Data} />
          </div>
        )}
      else {
       return (
         <div>
           <Route path='/' exact component={Landing} />
        </div>
       ) 
      }
    }
    
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header /> 
            {showComponents()}
          </div>
        </BrowserRouter>
      </div>
    )
  }
}


function mapStateToProps(state){
  return { authReducer: state.auth }
}

export default connect(mapStateToProps, actions) (App);
