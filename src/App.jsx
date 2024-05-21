import contactsData from "./contacts.json"
import './App.css'
import Contact from './Contact/Contact'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import SearchBox from './SearchBox/SearchBox'
import { useState, useEffect } from "react"

function App() {
  const [contacts, setContacts] = useState(() => {
  const storedContacts = localStorage.getItem("contacts");
  return storedContacts ? JSON.parse(storedContacts) : contactsData;
});

 const [filter, setFilter] = useState("");
 const filtratedContacts = contacts.filter(contact=>contact.name.toLowerCase().includes(filter.toLowerCase()))
 

 useEffect(() => {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}, [contacts]);


 const handleAddContact = (newContact) => {
  setContacts([...contacts, newContact]);
};

const deleteContact = (contactId)=>{
  setContacts(prevContacts =>{
    return prevContacts.filter(contact=> contact.id !== contactId)
  })

}
 
 
 return (
    <>
    <h1>Phonebook</h1>
    <ContactForm onAddContact={handleAddContact} />
    <SearchBox value={filter} onChange={setFilter}/>
    <ContactList contacts={filtratedContacts} onDelete={deleteContact}/>
    <Contact/>
 
    </>
  )
}

export default App
