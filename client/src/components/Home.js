import React from 'react'
import { Container } from '@material-ui/core';
import Card from './Card'
import InputForm from './InputForm'
import axios from 'axios'
import * as actions from '../actions'
import ActionButton from './floatingActionButton'
import { connect } from 'react-redux'
import { Quote } from './Quote'


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
        <ActionButton /> 
        <Container style={{marginTop: "30px"}}>
          <Quote />
        </Container> 
        <Container maxWidth="xs" style={{backgroundColor: "white", border: "solid", marginTop: "30px"}}>
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