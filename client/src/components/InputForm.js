import React from 'react'
import { connect } from 'react-redux'
import { Form, Field } from 'react-final-form'
import * as actions from '../actions'


const required = value => (value ? undefined : 'Required')
const dateFormat = value => (!value.match(/^(0[1-9]|[12][0-9]|3[01])[\- \/.](?:(0[1-9]|1[012])[\- \/.](201)[2-9]{1})$/) ? "must be valid date in format DD/MM/YYYY" : undefined)
const mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined)
const minValue = min => value =>
  isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`
const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined)

class InputForm extends React.Component {
  render() {
    const formStyle={width: "20%", border: "3px solid", padding: "10px 50px 10px 50px", backgroundColor: "#FFDAB9"}
    return (
      <div style={{marginTop: "50px", marginBottom: "20px"}}>
        <Form
          onSubmit={this.props.onSubmit}
          initialValues={{date: "31/08/2019"}}
          render={({ handleSubmit, submitting, pristine, form, reset }) => (
          <form className="container" style={formStyle} 
            onSubmit={handleSubmit}
          >
            <h5 className="center" style={{color: "black", fontStyle: "bold"}}>Add Session</h5>
            
            <div>
              <Field name="date" validate={composeValidators(required, dateFormat)}>
              {({ input, meta }) => (
                <div>
                  <label>Date</label>
                  <input {...input} type="text" placeholder="DD/MM/YYYY" />
                  {meta.error && meta.touched && <span style={{color: "#800"}}>{meta.error}</span>}
                </div>
                )}  
              </Field>
            </div>
            
            <div>
              <Field name="duration" validate={composeValidators(required, mustBeNumber, minValue(1))}>
                {({ input, meta }) => (
                <div>
                  <label>Duration of session</label>
                  <input {...input} type="text" placeholder="time in minutes" />
                  {meta.error && meta.touched && <span style={{color: "#800"}}>{meta.error}</span>}
                </div>
                )}  
              </Field>
            </div>
            
            <div>
              <label></label>
              <Field name="comments" component="input" placeholder="Comments" />
            </div>
            
            <button
              className="teal btn-flat white-text center"
              disabled={submitting} 
              type="submit" 
            >
              Submit
            </button>
          </form>)}
        />
      </div>
    )
  }
}


export default connect(null, actions)(InputForm)