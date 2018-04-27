import React, { Component } from 'react';
import _ from 'lodash'
import search from 'youtube-search'

import './App.css';
import { API_KEY } from './constants/constants'
import VideoList from './components/VideoList'
import VideoMain from './components/VideoMain'
import Header from './partials/Header'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      mainVideo: null,
      autoplay: ''
    }
  }

  componentDidMount() {
    this.searchDebounce('')
  }

  searchDebounce = _.debounce((value) => {
    search(value, { maxResults: 10, key: API_KEY }, (err, videos) => {
      if (err) {
        return console.log(err)
      }
      if (this.state.mainVideo) {
        this.setState({ videos })
      } else {
        this.setState({ videos, mainVideo: videos[0] })
      }
    });
  }, 500)

  searchVideos = ({ target: { value } }) => this.searchDebounce(value)

  render() {
    return (
      <React.Fragment>
        <Header
          searchValue={this.state.searchValue}
          handleSearchInput={this.searchVideos} />
        <div className='row'>
          <VideoMain
            video={this.state.mainVideo}
            autoplay={this.state.autoplay} />
          <VideoList
            videos={this.state.videos}
            setMainVideo={mainVideo => this.setState({ mainVideo, autoplay: '?autoplay=1' })} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
