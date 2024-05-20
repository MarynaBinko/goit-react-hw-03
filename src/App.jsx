

import contactsData from "./contacts.json"
import './App.css'
import Contact from './Contact/Contact'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import SearchBox from './SearchBox/SearchBox'
import { useState } from "react"

function App() {
  const [contacts, setContacts] = useState(contactsData);
 const [filter, setFilter] = useState("");
 const filtratedContacts = contacts.filter(contact=>contact.name.toLowerCase().includes(filter.toLowerCase()))

 const handleAddContact = (newContact) => {
  setContacts([...contacts, newContact]);
};

 
 
 return (
    <>
    <h1>Phonebook</h1>
    <ContactForm onAddContact={handleAddContact} />
    <SearchBox value={filter} onChange={setFilter}/>
    <ContactList contacts={filtratedContacts}/>
    <Contact/>
 
    </>
  )
}

export default App
