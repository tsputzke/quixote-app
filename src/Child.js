import React from 'react';
import Iframe from 'react-iframe';
import YouTube from 'react-youtube';
import Fullscreen from "react-full-screen";

class Child extends React.Component {
  constructor(props) {
    super(props);
    
    this._handleDoubleClickItem = this._handleDoubleClickItem.bind(this);

    this.state = {
      isFull: false,
      video: ''
    };
  }

  //toggle autoplay on based on state, which is changed by a click event for the youtube thumbnail wrapper.
  
  _handleDoubleClickItem(event): void {
  	alert('I got double-clicked!');
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
      <div className="App">
        <button id='quit'>X</button>
        <section className='videos-display'>
            <ul className='videos-placeholder'>
              <li>
                <div>
                <Fullscreen
                  enabled={this.state.isFull}
                  // onChange={isFull => this.setState({isFull})}
                >
                  <YouTube
                    // videoId="71h8MZshGSs"
                    videoId="zOWJqNPeifU"
                    opts={opts}
                    // onReady={this._onReady}
                    onPlay={this.toggleScreen}
                    onPause={this.toggleScreen}
                    onEnd={this.toggleScreen}
                    // onError={}
                  />
                  </Fullscreen>
                </div>
              </li>
              <li onClick={
                <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                  allowFullScreen
                  position="absolute"
                  width="100%"
                  height="100%"
                />
              }>
                <img src={this.state.video} alt="youtube thumbnail"></img>
              </li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
        </section>
        <button id='refresh'>[refresh icon]</button>
      </div>
    );
  }

  // _onReady(event) {
  //   // access to player in all event handlers via event.target
  //   event.target.pauseVideo();
  // }
}

export default Child;