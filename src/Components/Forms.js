import React, { Component } from 'react';





class Forms extends Component {
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
            this.setState({
                input: "",
            })
            
    }


    render() {
        return (
            <form className="Form-header Wrapper" onSubmit={this.handleSubmit}>
                <input className="Input" type="text" onChange={this.change} name="cuisine" value={this.state.input} placeholder="cuisine type" />
                <button>Get restaurants</button>
            </form>
        );
    }



};








export default Forms;