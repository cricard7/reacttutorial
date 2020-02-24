//this is an example of a function component( using Class component is also available)
//functional components are stateless whereas Class components can have state

//use functional components when possible

import React from 'react';
import './Person.css'

const person = (props) => {
return (
    <div className="Person">
        <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
        {
            //equivalent to slots in vue
        }
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>

)}

export default person;