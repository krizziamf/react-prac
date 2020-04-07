//4 WAYS OF BINDING 

import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
        //3. binding in the class constructor BEST OPTION!!!!!!!!!!!!!!! Ito madalas gamitin
        // this.clickHandler = this.clickHandler.bind(this)
    }
    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    //     console.log(this)
    // }

    //Ito yung approach na madalas gamitin
    //4. class property as arrow function (STILL EXPERIMENTAL)
    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        })
        // console.log(this)
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click me</button> */} //`1. binding in render
                {/* <button onClick={() => this.clickHandler()}>Click me</button> */} //2. arrow function in render
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default EventBind
