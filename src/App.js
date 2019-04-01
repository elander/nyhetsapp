import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nyhetslista from './components/Nyhetslista';
import data from './fuskdata';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          urlToImage: "https://source.unsplash.com/random/200×125/?cat",
    title:"Testnyhet 1",
   description:"Beskrivning av testnyheten",
    },
      {
        urlToImage: "https://source.unsplash.com/random/200×125/?cat",
   title:"Testnyhet 2",
  description:"Beskrivning av den andra testnyheten",
  }]};
  }
  render() {
    return (
      <Nyhetslista minaArtiklar={this.state.articles}/>
    );
  }
}

export default App;
