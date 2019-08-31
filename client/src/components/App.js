import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Landing from './Landing'
import Home from './Home'
import { connect } from 'react-redux'
import * as actions from '../actions'


class App extends React.Component {
  state = {
    refresh: true
  }

  componentDidMount() {
    this.props.fetchUser()
  }
  
  render() {
    
    
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header /> 
            {this.props.authReducer 
              ? <Route path='/' exact component={Home} />
              : <Route path='/' exact component={Landing} />}
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
