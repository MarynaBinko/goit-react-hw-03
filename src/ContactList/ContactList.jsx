// import styles from "./ContactList.module.css"
import Contact from "../Contact/Contact.jsx"

const ContactList = ({contacts}) => {
  return (
    <div>
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
          />
        </li>
      ))}
    </ul>
    </div>
  )
}

export default ContactList
