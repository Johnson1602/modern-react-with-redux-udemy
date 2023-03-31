import React from 'react'

class Clock extends React.Component {
  state = {
    time: this.getTime()
  }

  getTime() {
    return new Date().toLocaleTimeString()
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: this.getTime() })
    }, 1000)
  }

  render() {
    return (
      <div className='time'>
        The time is: {this.state.time}
      </div>
    )
  }
}

export default Clock