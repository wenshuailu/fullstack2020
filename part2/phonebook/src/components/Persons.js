import React from 'react';
import Button from './Button';

const Persons = ({ persons, newFilter, removeItem }) => {
  // console.log(persons.filter(p => p.name === 'Ada Lovelace'))
  return (
    <ul>
      {persons &&
        persons
          .filter((p) => p.name.toLowerCase().includes(newFilter.toLowerCase()))
          .map((person) => {
            return (
              <li key={person.name}>
                {person.name} {person.number}
                <Button onClick={() => removeItem(person)} text='Delete' />
              </li>
            );
          })}
    </ul>
  );
};

export default Persons;
