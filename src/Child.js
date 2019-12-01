import React from 'react';
import YouTube from 'react-youtube';
import Fullscreen from "react-full-screen";

class Child extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFull: false,
      video: ''
    };
  }

  toggleScreen = () => {
    const currentState = this.state.isFull
    this.setState({ isFull: !currentState });
  }

  componentDidMount() {
    fetch(`https://www.googleapis.com/youtube/v3/videos?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      // If call is successful
      .then(res => res.json() )
      .then(res => {
        //this.setState({video: res.items.snippet.thumbnails.default.url})
        this.setState({video: res.items[0].snippet.thumbnails.medium.url})
        console.log(this.state.video)
      })
      .catch(err => {
        console.log(err);
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
      <main role='main' id='child'>
        <button id='exit-child-view'><i class="fas fa-chevron-circle-left"></i></button>
        <section className='videos-display'>
            <ul className='videos-placeholder'>
              <li>
                <div>
                  <Fullscreen enabled={this.state.isFull}>
                    <YouTube
                      videoId="71h8MZshGSs"
                      opts={opts}
                      onPlay={this.toggleScreen}
                      onPause={this.toggleScreen}
                      onEnd={this.toggleScreen}
                      // onError={}
                    />
                  </Fullscreen>
                </div>
              </li>
              <li>
                <img src={this.state.video} alt="youtube thumbnail"></img>
              </li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
        </section>
        <button id='refresh'>[refresh icon]</button>
      </main>
    );
  }
}

export default Child;