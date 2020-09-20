import React from 'react';
import Images from './Images.js';


const person = (props) => {

    return (
        <div className="person">
            <h3 onClick={props.click}> I'm {props.name} </h3>
            and I'm  {props.age} years old
            <h3></h3>
            <img src={Images[props.index].icon}  width='120px'></img>
            <h3> My hobbies are: </h3> {props.hobbies}
            <p> {props.children}</p>
            <input type="text" onChange={props.changed} />
        </div>
        )
};

export default person;