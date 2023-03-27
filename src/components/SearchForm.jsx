import React from 'react'
import { useGlobalContext } from '../Context'

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext();

  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
    <h2>Search hacker news</h2>
    <input type="text" value={query} onChange={(e) => handleSearch(e.target.value)} className="form-input" />
    </form>
  )
}

export default SearchForm