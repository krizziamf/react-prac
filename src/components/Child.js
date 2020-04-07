//Methods as props
//passing props from child to parent

import React from 'react'

function Child(props) {
    return (
        <div>
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
            Passing a parameter from child to parent
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default Child
