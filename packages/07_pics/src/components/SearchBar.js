import React from 'react'

class SearchBar extends React.Component {
  state = {
    term: ''
  }

  // 为了解决 this 绑定的问题
  // 可以使用 arrow function 进行自动绑定 this 到当前 class 的实例
  onFormSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div className='ui segment'>
        <form
          className='ui form'
          onSubmit={this.onFormSubmit}
        >
          <div className='field'>
            <label>Image Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar