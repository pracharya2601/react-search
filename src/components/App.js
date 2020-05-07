import React from 'react';
import axios from 'axios';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component{
  state = {
    images: [], //its an array of an images
    data: [] //dictionary results array
  };

   onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
        params: { query: term},
      })

      this.setState({images: response.data.results})
  }
     forDictSearch = async (term) => {
      const results = await axios.get(`https://www.dictionaryapi.com/api/v3/references/sd4/json/${term}`, {
        params: {key: "b4a49481-5cde-45ef-b572-6b39bde9b856"}

      });
      console.log(results.data)
      this.setState({data: results.data})
    }
    
  render() {
    return (
      <div className="ui container" style={{marginTop: '2vh'}}>
        <SearchBar onSubmit={this.onSearchSubmit} search={this.forDictSearch} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;

/*
    const results = await axios.get(`https://www.dictionaryapi.com/api/v3/references/sd4/json/`, {
      params: {query: term},
      header: {
        key: "b4a49481-5cde-45ef-b572-6b39bde9b856"
      }
      https://www.dictionaryapi.com/api/v3/references/sd4/json/?query=story
    });
    console.log(results);
    }
*/
