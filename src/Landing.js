import React, { Component } from 'react';
import YouTube from 'react-youtube';
import Register from './Register';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = { showRegistration: false }
  }

  toggleRegistration = () => {
    this.setState({
      showRegistration: !this.state.showRegistration
    });
  }

  render() {
    const opts = {
      height: '100%',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        controls: 0,
        disablekb: 1,
        fs: 0,
        rel: 0,
        modestbranding: 1,
      }
    }
    return (
      <main role='main' id='landing' >
        <section id='title'>
          <h1>Quixote</h1>
          <h2>Video Curation for Kids</h2>
        </section>
        <section id='hero'>
        <h3><a onClick={this.toggleRegistration.bind(this)}> Create an account</a> and start taking charge of what your child is watching online.</h3>
        </section>
        <section id='demo'>
          <YouTube
            videoId="zOWJqNPeifU"
            opts={opts}
          />
          <p>Check out the demo above to learn more!</p>
        </section>
        <section id='login'>
          <form id='login-form'>
            <fieldset>
              <legend>User Login:</legend>
              <div>
                <label htmlFor="username">Username: </label>
                <input type="text" name='username' id='login-username' />
              </div>
              <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name='password' id='login-password' />
              </div>
              <button type='submit'>Login</button>
            </fieldset>
          </form>
        </section>
        <Register/>
      </main>
    )
  }
}

export default Landing;