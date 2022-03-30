import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])

  const onTermChange = (e) => {
    setTerm(e.target.value)
  }

  useEffect(() => {
    const search = async () => {
      const result = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        },
      })

      setResults(result.data.query.search)
    }

    !!term && search()
  }, [term])

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
