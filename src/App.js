import React, { Component } from 'react';
import Forms from './Components/Forms';
import Results from './Components/Results';
// import yummylogo from './yummylogo.svg';
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
  //fetch all cuisine array 
  //save cuisine array
  //the user cuisine name match that to object in cuisine array
  //cuisine name id that matches the name 
  //plug into search with location id

  // async fetchCuisineDetails() {
  //   try {
  //     const cuisineData = await axios({
  //       url: `https://developers.zomato.com/api/v2.1/cuisines`,
  //       method: 'GET',
  //       dataType: 'json',
  //       headers: {
  //         'user-key': '0968faa2918c801deb6840af027c61de'
  //       },
  //       params: {
  //         city_id: 89,
  //       }
  //     })

  //     this.setState({
  //       cuisineData: cuisineData.data.cuisines //gave full array of cuisines
  //     })
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  //function to trigger when user submit. this was then pushed to forms component below. this gave us cuisine id
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
          q: cuisine //cuisine id obtained from first api
        }
      })
      // console.log(searchResults);
      this.setState({
        searchResults: searchResults.data.restaurants
      })

    } catch (error) {
      console.log(error.message);
    }
  }

  // componentDidMount() {
  //   this.fetchCuisineDetails();
  // }

  render() {
    return (
      <div>
        <header className="App-header"> 
          {/* <div className=" Head Wrapper"> */}
          <h1>yummy tummy</h1>
              {/* <img src={yummylogo} className="Logo" alt="Yummy Tummy logo" /> */}
              <p>Search by Cuisine for Restaurants in Toronto, Ontario</p>
          {/* </div> */}
              <Forms getRestaurants={this.typeCuisine} />
           
        </header>
        <main>
          {/* <Forms getRestaurants={this.typeCuisine} />  */}
          {this.state.searchResults.length === 0 ? '' : <Results searchResults={this.state.searchResults} />}
          {/* <Results searchResults={this.state.searchResults} /> */}
        </main>
      </div>
    );
  }
}

export default App;

