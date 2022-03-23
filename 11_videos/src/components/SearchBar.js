import React from 'react'

class SearchBar extends React.Component {
  state = {
    term: '',
  }

  onInputChange = (e) => {
    this.setState({ term: e.target.value })
  }

  onFormSubmit = (e) => {
    e.preventDefault()

    this.props.onTermSubmit(this.state.term)
  }

  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="ui field">
            <label htmlFor="video-search-input">Video Search</label>
            <input
              type="text"
              id="video-search-input"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
