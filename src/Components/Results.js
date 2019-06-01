import React, { Component } from 'react';

class Results extends Component{


    render() {
        console.log(this.props);
        return (
            <div>Your Restaurant Search
            
            {this.props.searchResults.map(restaurant => {
                return(
                    <div key={restaurant.restaurant.id}>
                        <img src={restaurant.restaurant.featured_image} alt={restaurant.restaurant.name} />
                    <h1>Name: {restaurant.restaurant.name}</h1>
                        <p>{restaurant.restaurant.cuisines}</p>
                        <p>{restaurant.restaurant.location.address}</p>
                    <p>{restaurant.restaurant.cuisines}</p>
                    <p>{restaurant.restaurant.currency}</p>
                       
                </div>
                )
            })}
           
            </div>
        );
    }
};














export default Results;