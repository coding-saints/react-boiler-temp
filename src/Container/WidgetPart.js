import React from 'react'
import {Consumer} from '../AppProvider'


const WidgetPart = (props) => (
    
  <Consumer>
  {
      (context) => (
          <React.Fragment>
          <p>{context.state.part}</p>
          <p>{context.state.pieces}</p>
          <button onClick={context.addAnotherPart}>Add Piece</button>
          </React.Fragment>
      ) 
  }
  </Consumer>
  
)

export default WidgetPart

