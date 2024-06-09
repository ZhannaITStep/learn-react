import React, { useState } from 'react';
import { data } from "./data"
import { CardItem } from "./CardItem";
import { UserForm } from './UserForm';

export const App = () => {
    const [persons, setPersons] = useState(data);
    const onDeletePerson = (personId) => {setPersons((prevPersons) => prevPersons.filter((person) => person.id !== personId))};
    const handleAddPerson = (newPersonObj) => {setPersons([...persons, newPersonObj]);
    };

    return <>
        <div>hello world!</div>
        <UserForm onAddPerson={handleAddPerson} />
        {/* <CardItem name={name} age={age} phone={phone} /> */}
        { persons.map((person) => <CardItem {...person} key={person.id} onDeletePerson={onDeletePerson}/>) } 
    </>
};


