//LIST RENDERING
//LIST AND KEYS

//KEYS
//A "key' is a special string attribute you need to include when creating a lists of elements
//Keys give the elements a stable identity
//Keys help React identify which items have changed, are added, or are removed
//Help in efficient update of the user interface.

import React from 'react'
import Person from './Person';

function NameList() {
    //INDEX AS KEY EXAMPLE
    const names = ['Dudeng', 'Babs', 'Bonchin']
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return <div>{nameList}</div>

    //When to use index as key?
    //1. THe items in your list do not have a unique id.
    //2. The list is a static list and will not change.
    //3. The list will never be reordered or filtered.

    //==================================================================================

    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Dudeng',
    //         age: 24,
    //         skill: 'React'
    //     },
    //     {
    //         id: 2,
    //         name: 'Babs',
    //         age: 24,
    //         skill: 'Angular'
    //     },
    //     {
    //         id: 3,
    //         name: 'Myloves',
    //         age: 2,
    //         skill: '<3'
    //     }]
    // //pwedeng kahit ano gawing key(ex: {person.name}) as long as unique sya
    // const personList = persons.map(person => <Person key={person.id} person={person} />)
    // return (
    //     <div>
    //         {personList}
    //     </div>
    // )
}

export default NameList
