import styles from "./ContactList.module.css"
import Contact from "../Contact/Contact.jsx"

const ContactList = ({contacts, onDelete}) => {
  return (
    <div>
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            onDelete={onDelete}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
    </div>
  )
}

export default ContactList
