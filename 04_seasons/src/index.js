import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  // state 需要在最开始进行初始化，所以放在 constructor 里
  constructor(props) {
    // 由于是继承关系，所以要先调用父组件的 constructor
    super(props)

    // THIS IS THE ONLY TIME we directly assign this.state
    this.state = {
      lat: null,
      errorMessage: ''
    }

    // 由于每次 state 变化都会导致 rerender
    // 所以像获取位置这种请求我们不想放在 render() 函数里
    // 放在 constructor 里会在 App 初始化时就调用，且只会调用一次
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    )
  }

  render() {
    return (
      <div>
        <p>Latitude: {this.state.lat}</p>
        <p>Error: {this.state.errorMessage}</p>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)