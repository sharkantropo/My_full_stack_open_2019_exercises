import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' },
    { name: 'Arto Brims', number: '(245)2345690' },
    { name: 'Ada Lovelace', number: '394-443-5323' },
    { name: 'Dan Abramov', number: '(124)-323-4345' },
    { name: 'Mary Poppendieck', number: '3923642335' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const addName = (event) => {
    event.preventDefault();
    //trimming spaces or tabs at the beggining or end of string
    let trimmed = newName ? newName.replace(/^[\s]+|[\s]+$/g, '') : '';
    let alreadyAdded = false;
    for (let index = 0; index < persons.length; index++) {
      if (checkForExistingName(persons[index]['name'], trimmed)) {
        alreadyAdded = true;
        break;
      }
    }
    if (alreadyAdded) {
      alert(`${trimmed} is already added to phonebook`);
      setNewName('');
    }
    else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/g.test(newNumber)) {
      alert(`Invalid phone number input format, try (xxx) xxx xxxx/ xxx-xxx-xxxx/(xxx)xxxxxxx/xxx.xxx.xxxx or just xxxxxxxxxx `)
    }
    else {
      setPersons([...persons, { name: trimmed, number: newNumber }])
      setNewName('');
      setNewNumber('');
    }
  }

  const handleNameChange = (event) => {
    //Only matches word characters, followed by either zero to one dot or a space. For example.- Dr. Stone
    let filterInput = evalAndTrim(event.target.value, /[a-z]+\.?\s?/gi);
    setNewName(filterInput);
  }

  const handleNumberChange = (event) => {
    //Only matches numeric,dots and parenthesis
    let filterInput = evalAndTrim(event.target.value, /[0-9()\s.-]/g);
    setNewNumber(filterInput);
  }

  const updateFilter = (event) => {
    let filterInput = evalAndTrim(event.target.value, /[a-z]+\.?\s?/gi);
    setFilter(filterInput);
  }

  const filteredList = () => {
    let returnFilteredPerson = (name) => {
      let re = new RegExp(filter, 'gi');
      return re.test(name);
    }
    let filterPersons = persons.filter((person) => {
      return (!filter) ? person : returnFilteredPerson(person.name);
    });
    return (filterPersons.map(person => <div key={person.name}>{person.name} {person.number}</div>))
  }

  const checkForExistingName = (person, newName) => {
    if (newName) {
      return (newName.toLowerCase() === person.toLowerCase()) ? true : false;
    }
    else {
      return false;
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} updateFilter={updateFilter}/>
      <h2>Add a new contact</h2>
      <PersonForm addName={addName} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h2>Numbers</h2>
      <Persons filteredList={filteredList}/>
    </div>
  )
}

const evalAndTrim = (str, regex) => {
  str = str.match(regex);
  return !(str) ? '' : str.join('');
}

export default App