import React, { Component } from 'react';
import './App.css';

import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import VideoCinema from './components/VideoCinema';
import MyButton from './components/MyButton';

import Time from './components/Time';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: {
        img: 'https://cdn.videvo.net/videvo_files/images/preview_cat_in_the_sun.jpg',
        name: 'preview_cat_in_the_sun',
        url: 'https://www.videvo.net/videvo_files/converted/2015_08/preview/cat_in_the_sun.mp446278.webm'
      }
    }
  }
  render(){
    const { state } = this;
  const dados = {
    nome: "Maria",
    sobrenome: "Souza", 
    idade: "25"
  }
  return (
    <div className="App">
      <MyButton />
      <Time />
      {/* <MeuComponent {...dados}/> Exemplo de operador Spread */}
      <VideoList videos={state.videos}/>
      <VideoPlayer video={state.selectedVideo}/>
      <VideoCinema isActive={false}/>
    </div>
  )}
}

export default App;
