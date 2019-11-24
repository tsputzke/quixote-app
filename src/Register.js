import React, { Component } from 'react';
import Context from './Context';

class Register extends Component {
  static contextType = Context

  render() {
    return (
      <section id='register'>
        <form id='register-form'>
          <fieldset>
            <legend>Register: </legend>
            <div>
              <label htmlFor="username">Username: </label>
              <input type="text" name='username'id='signup-username' />
            </div>
            <div>
              <label htmlFor="password">Password: </label>
              <input type="password" name='password'id='signup-password' />
            </div>
            <div>
              <label htmlFor="confirm-password">Confirm Password: </label>
              <input type="password"name='confirm-password'id='singup-confirm-password' />
            </div>
            <button type='submit'>Sign Up</button>
            <p><span className='link-span' onClick={this.context.toggleRegistration}>Already a user?</span></p>
          </fieldset>
        </form>
      </section> 
    )
  }
}

export default Register;