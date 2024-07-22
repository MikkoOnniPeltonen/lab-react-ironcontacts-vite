import "./App.css";
import contacts from './contacts.json'
import { useState } from 'react'

function App() {

  const [actors, setActors] = useState(contacts)

  let newContacts = [...actors]

  let newContactList = []

  newContacts.map((contact, index) => {
    if (index < 5) {
      newContactList.push(contact)
    }
  })

  let displayedContacts = newContactList.map((contact) => {
    let wonOscarEmoji
    let wonEmmyEmoji
    if (contact.wonEmmy) {
      wonEmmyEmoji = '🌟'
    }
    if (contact.wonOscar) {
      wonOscarEmoji = '🏆'
    }
    return (
      <tr key={contact.id}>
        <td><img src={contact.pictureUrl} alt={contact.name} height="75"/></td>
        <td>{contact.name}</td>
        <td>{contact.popularity}</td>
        <td>{wonOscarEmoji}</td>
        <td>{wonEmmyEmoji}</td>
      </tr>
    )
  })




  function addRandomContact () {
    let displayedContactsIds = newContactList.map((contact) => {
      return (
        contact.id
      )
    })

    let remainingContacts = newContacts.filter((contact) => {
      return (
        !displayedContactsIds.includes(contact.id)
      )
    })

    let randomContactIndex = Math.floor(Math.random() * remainingContacts.length)
    let randomContact = remainingContacts[randomContactIndex]

    newContactList.push(randomContact)

    setActors()


  }

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
          </tr>
        </thead>
        <tbody>
          {displayedContacts}
        </tbody>
      </table>
    </div>
  );
}

export default App;
