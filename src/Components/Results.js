import React, { Component } from 'react';

class Results extends Component{


    render() {
        console.log(this.props);
        return (
            <div>Your Restaurant Search
            
            {this.props.searchResults.map(restaurant => {
                return(
                    <div>
                    <p>{restaurant.restaurant.cuisines}</p>
                    <p>restaurant.location.name}</p>
                    </div>
                )
            })}
           
            </div>
        );
    }
};














export default Results;