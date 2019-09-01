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
         
        <Container style={{marginTop: "30px"}}>
          <Quote />
        </Container> 
        <Container maxWidth="xs" style={{backgroundColor: "white", border: "solid", marginTop: "30px"}}>
          <Card />
        </Container>
        <Container maxWidth="xs" style={{marginTop: "30px", marginBottom: "80px"}}>
          <ActionButton />
          {this.props.session 
              ? <InputForm onSubmit={onSubmit}/>
              : null
          }
        </Container>

      </div>
    )
  }
}

function mapStateToProps({ session }){
  return { session }
}
export default connect(mapStateToProps, actions)(Home)