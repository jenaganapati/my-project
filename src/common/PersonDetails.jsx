import React, { useState, useRef } from 'react';
import { Person } from './core';
const PersonDetails = () => {
    Person.prototype.nationality = "India";
    let person = new Person("Ganapati", 41, "Mumbai");

    let person2 = Object.assign({}, person);
    let [count, setCount] = useState(0);

    const onButtonClick = () => {
        let cnt = count + 1;
        setCount(cnt);
    }
    return (
        <div>
            <div>
                Name: {person.name} - Age: {person.age} - Nationality: {person.nationality}
            </div>
            <div>
                Name: {person2.name} - Age: {person2.age} - Address: {person2.address}
            </div>
            <div>
                {count}
            </div>
            <div>
                <button onClick={onButtonClick}>Add</button>
            </div>
        </div>
    )
}

export default PersonDetails;