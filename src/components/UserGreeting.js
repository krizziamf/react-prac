//Conditional Rendering
//1. if/else
//2. Element Variables
//3. Ternary conditional operator
//4. Short Circuit operator


import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        //4. Short Circuit Operator (if isLoggedin is false, return nothing)
        return this.state.isLoggedIn && <div>Welcome Vishwas</div>

        //3. Ternary Conditional Operator(Can be use inside the jsx) this is the approach you want to follow most of the time
        // return this.state.isLoggedIn ? (
        //     <div>Welcome Vishwas</div>
        // ) : (
        //         <div>Welcome Guest</div>
        //     )


        //2. Element Variables(Use JS variables to store elements)
        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Vishawas</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>



        // //1. If/else
        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Vishwas</div>
        // } else {
        //     return <div>Welcome Guest</div>
        // }
        // return (
        //     <div>
        //         <div>Welcome Hihi</div>
        //         <div>Welcome Guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting
