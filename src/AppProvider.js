import React, {createContext} from 'react'

const NameContext = React.createContext({part: "screw"})
export const {Provider, Consumer} = NameContext


export default class AppProvider extends React.Component {
state = {
  part: 'sprocket',
  pieces: 1
}
  render() {
    return (
      <Provider value={{
        state: this.state,
        addAnotherPart: () => this.setState({
          pieces: this.state.pieces + 1
        })
      }}>
      {this.props.children}
      </Provider>
    )
  }
}