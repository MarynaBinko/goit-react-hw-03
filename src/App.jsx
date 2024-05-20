// import { Formik, Form, Field } from 'formik';
// import { nanoid } from 'nanoid'
// model.id = nanoid() 
// import * as Yup from "yup";
// import { ErrorMessage } from "formik";


import contacts from "./contacts.json"
import './App.css'
import Contact from './Contact/Contact'
import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import SearchBox from './SearchBox/SearchBox'
import { useState } from "react"

function App() {
  // const [contacts, setContacts] = useState([contacts])
 const [filter, setFilter] = useState("");
 const filtratedContacts = contacts.filter(contact=>contact.name.toLowerCase().includes(filter.toLowerCase()))
  return (
    <>
    <h1>Phonebook</h1>
    {/* <ContactForm onAddContact={newContact => setContacts([...contacts, newContact])} /> */}
    <SearchBox value={filter} onChange={setFilter}/>
    <ContactList contacts={filtratedContacts}/>
    <Contact/>
 
    </>
  )
}

export default App
