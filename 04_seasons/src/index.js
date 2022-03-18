import React from 'react'
import ReactDOM from 'react-dom'

import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {
  // 直接初始化 state
  // 等价于重写 constructor() 方法并调用 super() 方法并初始化 state
  state = {
    lat: null,
    errorMessage: ''
  }

  componentDidMount() {
    // 由于每次 state 变化都会导致 rerender
    // 所以像获取位置这种请求我们不想放在 render() 函数里
    // 按照 best practice 我们会把 data loading 的过程放在 componentDidMount 里
    // 这样就只会在 App 被加载时调用，且只会调用一次
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    )
  }

  render() {
    if (!this.state.lat && this.state.errorMessage) return <div>Error: {this.state.errorMessage}</div>
    if (this.state.lat && !this.state.errorMessage) return <SeasonDisplay lat={this.state.lat} />
    return <Spinner message='Please allow us to get your location...' />
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)