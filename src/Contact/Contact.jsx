// import styles from "./Contact.module.css"

const Contact = ({name, number, id, onDelete}) => {
  return (
    <>
      <h2>{name}</h2>
      <p>{number}</p>
      <button type="button" onClick={()=>onDelete(id)}>Delete</button>
    </>
  )
}

export default Contact
