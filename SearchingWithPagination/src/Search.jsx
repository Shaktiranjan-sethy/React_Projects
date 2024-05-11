import React from 'react'
import { useGlobalContext } from './Context'

const Search = () => {

  const {query,searchPost}=useGlobalContext();

  return (
    <>
    <div>
      <h1>Shakti Tech Website</h1>
      <form onSubmit={(e)=>e.preventDefault()}>
        <input type="text" placeholder='search here'
         value={query}
         onChange={(e)=>searchPost(e.target.value)}
        />
      </form>
    </div>
    </>
  )
}

export default Search