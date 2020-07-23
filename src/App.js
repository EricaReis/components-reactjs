import React, { Component } from 'react';
import './App.css';

import PeopleList from './components/PeopleList';
import { VideoService } from './services/VideoService';

import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import VideoCinema from './components/VideoCinema';

class App extends Component{
  constructor(props){
    super(props);

    this.selectVideo = this.selectVideo.bind(this);

    this.state = {
      videos: [],
      selectedVideo: {}
    }
  }

  async componentDidMount(){
    const videos = await VideoService.list();
    this.setState({videos});

    this.selectVideo(videos[0]);
  }

  selectVideo(video){
    this.setState({selectedVideo: video})
  }

  render(){
    const { state } = this;
  return (
    <div className="App">
      {/* <MeuComponent {...dados}/> Exemplo de operador Spread */}
      <PeopleList />
      <VideoList videos={state.videos}/>
      <VideoPlayer video={state.selectedVideo}/>
      <VideoCinema isActive={false}/>
    </div>
  )}
}

export default App;
