import React, { Component } from 'react';
import Forms from './Components/Forms';
import Results from './Components/Results';
// import Footer from './Components/Footer';
import manfood from './manfood.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cuisineData: [],
      searchResults: [],
    }
  }
  
  typeCuisine = async (cuisine) => {


    try {
      const searchResults = await axios({
        url: `https://developers.zomato.com/api/v2.1/search`,
        method: 'GET',
        dataType: 'json',
        headers: {
          'user-key': '0968faa2918c801deb6840af027c61de'
        },
        params: {
          entity_id: 89,
          q: cuisine
        }
      })
     
      this.setState({
        searchResults: searchResults.data.restaurants
      })

    } catch (error) {
      console.log(error.message);
    }
  }


  render() {
    return (
      <div>
        <header className="App-header"> 
          <h1>yummy tummy</h1>
          <p>Enter a type of Cuisine to find Restaurants in Greater Toronto and neighbouring locations.</p>
              <img src={manfood} className="Man" alt="Man with food" />
              <Forms getRestaurants={this.typeCuisine} />
           
        </header>
          <main>
            
              {this.state.searchResults.length === 0 ? '' : <Results searchResults={this.state.searchResults} />}
            
          </main>
        
      </div>
    );
  }
}

export default App;

