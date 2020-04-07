import React, { Component } from 'react';

//State Example

export default class Main extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome!'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Message changed'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Change</button>
            </div>

        )
    }

}