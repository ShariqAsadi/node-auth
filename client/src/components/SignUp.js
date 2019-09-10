import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

import * as actions from '../actions';
import Input from './UI/Input';
class SignUp extends React.Component {
  onSubmit = async formData => {
    await this.props.signUp(formData);
    if(!this.props.errorMessage) {
      this.props.history.push('/dashboard')
    }
  };
  responseGoogle = async res => {
    await this.props.oauthGoogle(res.accessToken)
    if(!this.props.errorMessage) {
      this.props.history.push('/dashboard')
    }
  };
  responseFacebook = async res => {
    await this.props.oauthFacebook(res.accessToken)
    if(!this.props.errorMessage) {
      this.props.history.push('/dashboard')
    }
  };

  render() {
    const { handleSubmit } = this.props;
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
                component={Input}
              />
            </fieldset>
            <fieldset>
              <Field
                name='password'
                type='password'
                id='password'
                label='Enter your password'
                placeholder=''
                component={Input}
              />
            </fieldset>
            {this.props.errorMessage ? (
              <div className='alert alert-danger'>
                {this.props.errorMessage}
              </div>
            ) : null}
            <button type='submit' className='btn btn-primary'>
              Sign Up
            </button>
          </form>
        </div>
        <div className='col'>
          <div className='text-center'>
            <div className='alert alert-primary'>
              Or sign up using third-party services
            </div>
            <FacebookLogin
              appId='759675984485774'
              autoLoad={false}
              textButton='Login with Facebook'
              fields='name,email,picture'
              callback={this.responseFacebook}
              cssClass='btn btn-outline-primary'
            />
            <GoogleLogin
              clientId='664346966163-h96t4noffaid6a8orh0rnq1gr81dpvc1.apps.googleusercontent.com'
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle}
              render={renderProps => (
                <button 
                  onClick={renderProps.onClick} 
                  disabled={renderProps.disabled}
                  className='btn btn-outline-danger'>Login with Google</button>
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errorMessage: state.auth.errorMessage
});

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: 'signup' })
)(SignUp);
