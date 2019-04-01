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

  componentDidMount() { 
    fetch("https://newsapi.org/v2/top-headlines?country=se&apiKey=ae24bb6763034855bf26908e36dcd782")
      .then(function (response) {
      // gör något med det som kom tillbaka
      return response.json()
    } ).then( jsondata => {
      //gör något med json-objektet
      this.setState({ articles: jsondata.articles })
    }).catch(error =>{
      this.setState({
        articles: [{
          urlToImage: "fejk.jpg",
          title: "Något gick fel",
          description: "Du verkar inte vara ansluten till internet..."
        }]
      });
    })
  }

  render() {
    return (
      <Nyhetslista
        minaArtiklar={this.state.articles} />
    );
  }
}

export default App;
