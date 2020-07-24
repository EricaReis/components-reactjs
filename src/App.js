import React, { Component } from 'react';
import './App.css';

import PeopleList from './components/PeopleList';
import { VideoService } from './services/VideoService';

import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import VideoCinema from './components/VideoCinema';
import ClickList from './components/ClickList';
import ClickListItem from './components/CliclListItem';
import MyVideo from './components/MyVideo';

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
      <MyVideo src="https://ak.picdn.net/shutterstock/videos/1052750657/preview/stock-footage-childs-watercolour-rainbow-painting-on-w-matte-straight-edge-mp.webm" />
      <ClickList number="123">
        <ClickListItem></ClickListItem>
        <ClickListItem></ClickListItem>
        <ClickListItem></ClickListItem>
      </ClickList>
      <PeopleList />
      <VideoList videos={state.videos}/>
      <VideoPlayer video={state.selectedVideo}/>
      <VideoCinema isActive={false}/>
    </div>
  )}
}

export default App;
