import React from 'react'
import { connect } from 'react-redux'
import { Form, Field } from 'react-final-form'
import * as actions from '../actions'
import axios from 'axios'


class InputForm extends React.Component {
  render() {
    return (
      <div>
        <Form
          onSubmit={this.props.onSubmit}
          render={({ handleSubmit, submitting, pristine }) => (
          <form className="container" style={{width: "50%"}} onSubmit={handleSubmit}>
            <h4 className="center" style={{color: "white"}}>New Meditation Session</h4>
            <div>
              <label></label>
              <Field name="date" component="input" placeholder="Date of session" />
            </div>
            <div>
              <label></label>
              <Field name="duration" component="input" placeholder="Duration" />
            </div>
            <div>
              <label></label>
              <Field name="comments" component="input" placeholder="Comments" />
            </div>
            <button type="submit" className="teal btn-flat white-text middle">Next</button>
          </form>)}
        />
      </div>
    )
  }
}


export default connect(null, actions)(InputForm)