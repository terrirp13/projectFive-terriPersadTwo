import React from 'react';



class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ""
        }
    }
    change = (e) => {
        this.setState({
            input: e.target.value
        });

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getRestaurants(this.state.input)
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.change} name="cuisine" value={this.state.input} placeholder="cuisine type" />
                <button>Get restaurants</button>
            </form>
        );
    }



};








export default Forms;