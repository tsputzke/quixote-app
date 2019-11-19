import React, { Component } from 'react';

class Landing extends Component {
  render() {
    return (
      <main role='main'>
        <section id='title'>
          <h1>Quixote</h1>
          <h2>Video Curation for Kids</h2>
        </section>
        <section id='hero'>
        <h3>Hero text here. Parents can curate a list of videos that are appropriate for their child, the app then allows a child to choose videos from this list in a child friendly UI.</h3>
        </section>
        <section id='demo'>
          <h3>EMBEDDED YOUTUBE VIDEO</h3>
        </section>
        <section id='signin'>
          <header>
              <h3>Sign-in:</h3>
          </header>
          <form id='signin-form'>
              <div>
                <label for="username">Username</label>
                <input type="text" name='username' id='username' />
              </div>
              <div>
                <label for="password">Password</label>
                <input type="password" name='password' id='password' />
              </div>
              <button type='submit'>Sign In</button>
              <p>Not yet a user? Sign-up.</p>
          </form>
        </section>
        <section id='signup'>
          <p>[render on 'sign-up']</p>
        <header>
          <h3>Sign-up:</h3>
        </header>
        <form id='signup-form'>
            <div>
              <label for="username">Username</label>
              <input type="text" name='username'id='username' />
            </div>
            <div>
              <label for="password">Password</label>
              <input type="password" name='password'id='password' />
            </div>
            <div>
              <label for="confirm-password"> Confirm Password</label>
              <input type="password"name='confirm-password'id='confirm-password' />
            </div>
            <button type='submit'>Sign Up</button>
        </form>
        </section>
      </main>
    )
  }
}

export default Landing