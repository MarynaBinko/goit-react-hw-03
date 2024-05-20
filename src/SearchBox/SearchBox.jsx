// import styles from "./SearchBox.module.css"

const SearchBox = ({value, onChange}) => {
  return (
    <div>
      <h2>Filter contacts by name</h2>
      <input type="text"
       value={value} 
       onChange={e =>onChange(e.target.value)}/>
    </div>
  )
}

export default SearchBox
