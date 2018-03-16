import React from 'react'
import {render} from 'react-dom'

<<<<<<< HEAD
export default class App extends React.Component {
=======
const ThemeContext = React.createContext('light')

class ThemeProvider extends React.Component {
  state = {theme: 'light'}
  toggleTheme = () => {
    this.setState(({theme}) => ({
      theme: theme === 'light' ? 'dark' : 'light',
    }))
  }
>>>>>>> master
  render() {
    return <div>hi paul</div>
  }
}

render(
    <App />,
    document.getElementById('root')
)
