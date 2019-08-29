import React from 'react'
import { Container } from '@material-ui/core';
import Card from './Card'
import InputForm from './InputForm'
import axios from 'axios'
import * as actions from '../actions'
import { connect } from 'react-redux'


class Home extends React.Component {
  
  render() {
    const onSubmit = async values => {
      const res = await axios({
        method: 'post',
        url: '/api/add_session',
        data: {
          date: values.date,
          duration: values.duration,
          comments: values.comments
        }
      }) 
      this.props.fetchUser()
    }
    return (
      <div> 
        <Container maxWidth="xs" style={{backgroundColor: "white", border: "solid", marginTop: "80px"}}>
          <Card />
        </Container>
        <InputForm 
          onSubmit={onSubmit}
        />
      </div>
    )
  }
}

export default connect(null, actions)(Home)