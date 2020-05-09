import React from 'react';
import axios from 'axios';
import unsplash from '../api/unsplash';
// import youtube from '../api/youtube';

import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import DictDataList from './DictDataList';


class App extends React.Component{
  state = {
    images: [], //its an array of an images
    data: [], //dictionary results array
    videos: [],
    selectedVideo: null,
    selectedWord: ''
  };

  componentDidMount() {
    this.onTermSubmit('trending united states');
  }

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
        params: { query: term},
    })
      this.setState({images: response.data.results})
  }

    onTermSubmit = async (term) => {
      const  response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            maxResults: 5,
            key: 'AIzaSyBz2wlIOVNJPLEe4LUJklvz7Ky2GdVAKM0',
            q : term
          }
      });
      this.setState({videos: response.data.items});
    };
    onVideoSelect = (video) => {
      this.setState({selectedVideo: video})
    }

    forDictSearch = async (term) => {
      const results = await axios.get(`https://www.dictionaryapi.com/api/v3/references/sd4/json/${term}`, {
        params: {key: "b4a49481-5cde-45ef-b572-6b39bde9b856"}

      });
      this.setState({data: results.data})
    }


    onSelectWord = (word) => {
      this.forDictSearch(word);
      this.onTermSubmit(word);
      this.onSearchSubmit(word);
    }

    

  render() {
    return (
      <div className="ui container" style={{marginTop: '2vh'}}>
        <SearchBar onSubmit={this.onSearchSubmit} search={this.forDictSearch} onVideoSubmit={this.onTermSubmit} onSelectWord={this.state.selectedWord} />
        <DictDataList meanings={this.state.data} onSelectWord={this.onSelectWord}/>
        <ImageList images={this.state.images}/>
        <br />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
      </div>
    );
  }
}

export default App;

