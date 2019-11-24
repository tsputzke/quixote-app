import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (
      <section id='signup'>
        <p>[render on 'sign-up']</p>
        <header>
          <h3>Sign-up:</h3>
        </header>
        <form id='signup-form'>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name='username'id='signup-username' />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name='password'id='signup-password' />
          </div>
          <div>
            <label htmlFor="confirm-password"> Confirm Password</label>
            <input type="password"name='confirm-password'id='singup-confirm-password' />
          </div>
          <button type='submit'>Sign Up</button>
        </form>
      </section> 
    )
  }
}

export default Register;