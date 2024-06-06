import React from "react";
import { data } from "./data"
import { CardItem } from "./CardItem";

export const App = () => {
    const [persons, setPersons] = useState(data);
    // TODO дописать логику удаления и укоротить код
    const onDeletePerson = (personId) => {
        setPersons((prevPersons) => {
            return prevPersons.filter((person) => {
                if (person.id !== personId) {
                    return true;
                } else {
                    return false;
                }
            });
        });
    }

    // const deleteItem = (index) => {
    //     const updatedItems = [...items];
    //     updatedItems.splice(index, 1);
    //     setItems(updatedItems);
    //   };

    return <>
        <div>hello world!</div>
        {/* <CardItem name={name} age={age} phone={phone} /> */}
        { persons.map((person) => <CardItem {...person} key='person.id' />) }
        {/* {items.map((person, index) => (
        <div key={person.id}>
          <CardItem {...person} />
        </div>
      ))} */}
    </>
};

