import React, { Component } from 'react';

class Results extends Component{


    render() {
        console.log(this.props);
        return (
            <div>Your Restaurant Search
            
            {this.props.searchResults.map(restaurant => {
                return(
                   
                 <div className="Results Wrapper" key={restaurant.restaurant.id}>
                     <div className="Title-rating">
                         <h2>{restaurant.restaurant.name}</h2>
                        <p>Rating: {restaurant.restaurant.user_rating.aggregate_rating}</p>
                     </div>
                     <div className="Image-details">
                        <div>
                            <img src={restaurant.restaurant.featured_image} alt={restaurant.restaurant.name} />
                        </div>
                        <div>
                            <p>{restaurant.restaurant.cuisines}</p>
                            <p>{restaurant.restaurant.location.address}</p>
                            <p>Average Cost for Two: ${restaurant.restaurant.average_cost_for_two}</p>
                            <p>Rating: {restaurant.restaurant.user_rating.aggregate_rating}</p>
                         </div>
                     </div>
                </div>
                
                )
            })}
           
            </div>
        );
    }
};














export default Results;