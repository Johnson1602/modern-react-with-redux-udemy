import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
  const [term, setTerm] = useState('programming')
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

    // trigger a search on initial rendering
    // must use results.length === 0
    // cuz !results will return 'true' when results === []
    if (!!term && results.length === 0) {
      search()
    } else {
      // throttle
      const timerId = setTimeout(() => {
        !!term && search()
      }, 5000)

      // the returned function will be invoked first
      // when the next time useEffect is invoked
      return () => {
        clearTimeout(timerId)
      }
    }
  }, [term])

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
