import React, { useState } from 'react';
import { data } from "./data"
import { CardItem } from "./CardItem";

export const App = () => {
    const [persons, setPersons] = useState(data);
    const onDeletePerson = (personId) => {setPersons((prevPersons) => prevPersons.filter((person) => person.id !== personId))};

    return <>
        <div>hello world!</div>
        {/* <CardItem name={name} age={age} phone={phone} /> */}
        { persons.map((person) => <CardItem {...person} key={person.id} onDeletePerson={onDeletePerson}/>) } 
    </>
};



