import React from 'react'
import { useState } from 'react'

const Search = () => {
  const [term, setTerm] = useState('')

  const onTermChange = (e) => {
    setTerm(e.target.value)
  }

  return (
    <div>
      <div className="ui form">
        <div className="field search__head">
          <label htmlFor="search__input">Enter Your Search Term</label>
          <input
            id="search__input"
            className="input"
            type="text"
            value={term}
            onChange={(e) => onTermChange(e)}
          />
        </div>
      </div>
      <div className="search__result">Result</div>
    </div>
  )
}

export default Search
