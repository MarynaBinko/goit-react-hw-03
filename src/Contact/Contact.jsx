import styles from "./Contact.module.css"
import { IoMdContact } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

const Contact = ({name, number, id, onDelete}) => {
  if (!name || !number) {
    return null; 
  }
  
  return (
    <div className={styles.item}>
      <div className={styles.row}>
      <h2  className={styles.text}><IoMdContact style={{ marginRight: '10px' }}/>{name}</h2>
      <p className={styles.text}><FaPhone style={{ marginRight: '10px' }} /> {number}</p>
      </div>
      <button type="button" onClick={()=>onDelete(id)} className={styles.btn}>Delete</button>
    </div>
  )
}

export default Contact
