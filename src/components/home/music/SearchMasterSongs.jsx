import React from 'react'



const SearchMasterSongs = ({ formValues, onChange, onSubmit }) => {
  return (
    <form>
        <input 
            className='search-input'
            type="text"
            name = "term"
            onChange={onChange}
            value = { formValues.term }
            placeholder="Search" />
    </form>
  )
}

export default SearchMasterSongs