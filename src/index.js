import React from 'react'
import {render} from 'react-dom'
import AppProvider from './AppProvider'
import Widget from './Container/Widget'
class App extends React.Component {
  
  render() {
    return (
      <div>
      <Widget />
      </div>
    )
  }
}

render(
  <AppProvider>
    <App />
    </AppProvider>,
    document.querySelector('#root')
)
