import React, { Component } from 'react';
import YouTube from 'react-youtube';

class User extends Component {
  constructor(props) {
    super();

    this.state = {
      videos: []
    };
  }

  searchVideos = e => {
    e.preventDefault();

    const title = e.target.video_title.value;
    const number = (e.target.search_number.value) ?  e.target.search_number.value : 10;

    // Add a loading indicator

    fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_YOUTUBE_API_KEY}&part=snippet&maxResults=${number}&q=${title}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      // If call is successful
      .then(res => res.json() )
      .then(res => {
        let videos = [];
        res.items.map(item => videos.push(item))
        this.setState({videos: videos})
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    // const opts = {
    //   height: '100%',
    //   width: '100%',
    //   playerVars: { // https://developers.google.com/youtube/player_parameters
    //     autoplay: 0,
    //     controls: 0,
    //     disablekb: 1,
    //     fs: 0,
    //     rel: 0,
    //     modestbranding: 1,
    //   }
    // }

    const videoList = this.state.videos.map((video, i) => {
      return (
        <li key={i}>
          <button>Add</button>
            <YouTube
              videoId={video.id.videoId}
              // opts={opts}
            />
        </li>
      )
    })

    return (
      <main role='main' id='user' >
        <h1>Hello, UserName</h1>
        <button id='watch-now-button'>Watch Now!</button>
        <section id='video-search'>
          <form onSubmit={this.searchVideos} id='search-form'>
            <fieldset>
              <legend>Search for Videos:</legend>
              <div>
                <input type="text" maxLength='30' name='video_title' id='video-title' />
              </div>
              <div>
                <label htmlFor="search-number">Number of videos (please choose a value between 1-25): </label>
                <input type="number" min='1' max='25' name='search_number' id='search-number' placeholder='10'/>
              </div>
              <button type='submit'>Search</button>
            </fieldset>
          </form>
          <section id='search-results'>
            <ul>{videoList}</ul>
          </section>
        </section>
        <section id='view-videos'>
        </section>
      </main>
    )
  }
}

export default User

