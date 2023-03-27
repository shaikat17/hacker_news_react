import React from 'react'
import { useGlobalContext } from '../Context'

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext();

  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
    <h2>Search hacker news</h2>
    </form>
  )
}

export default SearchForm