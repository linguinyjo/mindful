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
            {this.props.authReducer ? <Header /> : null}
            <Route path='/' exact component={Landing} />
            <Route path ='/home' component={Home}/>
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
