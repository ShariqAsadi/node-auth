import React from 'react';
import { reduxForm, Field } from 'redux-form';
import {connect} from 'react-redux';
import {compose} from 'redux';
import * as actions from '../actions';

import Input from './UI/Input';
class SignUp extends React.Component {
  onSubmit = async (formData) => {
    await this.props.signUp(formData);
  }
  render() {
    const { handleSubmit } = this.props
    return (
      <div className='row'>
        <div className='col'>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <fieldset>
              <Field 
                name='email' 
                type='text' 
                id='email'
                label='Enter your email'
                placeholder='example@example.com'
                component={ Input } />
            </fieldset>
            <fieldset>
              <Field
                name='password'
                type='password'
                id='password'
                label='Enter your password'
                placeholder=''
                component={ Input }
              />
            </fieldset>
            <button type='submit' className='btn btn-primary'>Sign Up</button>
          </form>
        </div>
        <div className='col'>
          <div className="text-center">
            <div className="alert alert-primary">
              Or sign up using third-party services
            </div>
            <button className="btn btn-outline-primary">Facebook</button>
            <button className="btn btn-outline-danger">Google</button>
          </div>
        </div>
      </div>
    );
  }
}

export default compose(
  connect(null, actions),
  reduxForm({ form: 'signup' })
)(SignUp);
