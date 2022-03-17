import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log('success: ', position),
      err => console.log('error: ', err)
    )

    return (
      <div>Latitude: </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)