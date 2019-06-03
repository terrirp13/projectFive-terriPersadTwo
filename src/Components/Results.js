import React, { Component } from 'react';
import Footer from './Footer';

class Results extends Component{

    componentDidMount() {
        const element = document.querySelector('#search');
        element.scrollIntoView({
            block: 'start',
            behavior: 'smooth',
        })
    }

    render() {
        console.log(this.props);
        return (
     <div>
         <div className="Wrapper">
                <h2 className="Results-title" id="search">Your Restaurant Search Results</h2>
            <div className="Search" > 

            {this.props.searchResults.map(restaurant => {
                return(
                
                 <div className="Results Wrapper" key={restaurant.restaurant.id}>
                     <div className="Title-rating">
                         <h3>{restaurant.restaurant.name}</h3>
                        <p>Rating: {restaurant.restaurant.user_rating.aggregate_rating}</p>
                     </div>
                     
                    <div className="Details">
                        <p className="Type">{restaurant.restaurant.cuisines}</p>
                        <p>{restaurant.restaurant.location.address}</p>
                        <p className="Cost">Average Cost for Two: ${restaurant.restaurant.average_cost_for_two}</p>
                        <button className="Info-button"><a href={restaurant.restaurant.url}>More Info</a></button>
                     </div> 
                </div>
                              )
                          })}
                         
            </div>
                <div className="Top"><a href="#input">New Search <span className="Icon">< i className="fas fa-arrow-up"></i></span> </a></div>
               
         </div>
      <Footer/>
     </div>
         
        );
       
    }
};














export default Results;