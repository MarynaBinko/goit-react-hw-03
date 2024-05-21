import styles from "./Contact.module.css"

const Contact = ({name, number, id, onDelete}) => {
  return (
    <div className={styles.item}>
      <div className={styles.row}>
      <h2 className={styles.text}>{name}</h2>
      <p className={styles.text}>{number}</p>
      </div>
      <button type="button" onClick={()=>onDelete(id)} className={styles.btn}>Delete</button>
    </div>
  )
}

export default Contact
