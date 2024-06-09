import React, { useState } from "react";

export const UserForm = ({ onAddPerson }) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [phone, setPhone] = useState("");

    const handleAddPerson = () => {
        const newPerson = { id: Math.random(), name, age, phone };
        onAddPerson(newPerson);
        setName("");
        setAge("");
        setPhone("");
    };

    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <input value={age} onChange={(e) => setAge(e.target.value)} />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} />
            <button onClick={handleAddPerson}>Add Person</button>
        </div>
    );
};