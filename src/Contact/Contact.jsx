// import styles from "./Contact.module.css"

const Contact = ({name, number}) => {
  return (
    <>
      <h2>{name}</h2>
      <p>{number}</p>
      <button type="button">Delete</button>
    </>
  )
}

export default Contact
