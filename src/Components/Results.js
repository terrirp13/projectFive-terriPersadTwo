import React, { Component } from 'react';

class Results extends Component{


    render() {
        console.log(this.props);
        return (
            <div className="Wrapper">
            <h2 className="Results-title">Your Restaurant Search Results</h2>
            <div className="Search" id="search"> 
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
            </div>
        );
    }
};














export default Results;