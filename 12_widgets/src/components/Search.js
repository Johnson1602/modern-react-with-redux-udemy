import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
  const [term, setTerm] = useState('programming')
  const [debouncedTerm, setDebouncedTerm] = useState(term)
  const [results, setResults] = useState([])

  const onTermChange = (e) => {
    setTerm(e.target.value)
  }

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term)
    }, 500)

    return () => {
      clearTimeout(timerId)
    }
  }, [term])

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: debouncedTerm,
        },
      })

      setResults(data.query.search)
    }

    if (debouncedTerm) {
      search()
    }
  }, [debouncedTerm])

  const renderedResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org/?curid=${result.pageid}`}
            target="_blank"
            rel="noreferrer"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
        </div>
      </div>
    )
  })

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
      <div className="ui celled list search__result">{renderedResults}</div>
    </div>
  )
}

export default Search
