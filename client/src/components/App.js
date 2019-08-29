import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './Header'
import Landing from './Landing'
import Home from './Home'
import { connect } from 'react-redux'
import * as actions from '../actions'

class App extends React.Component {
  
  componentDidMount() {
    this.props.fetchUser()
  }

  render(){
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Landing} />
            <Route path ='/home' component={Home} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions) (App);
