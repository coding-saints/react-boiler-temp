import React, {Component} from 'react'
const NameContext = React.createContext()

const ContextWrap =(props) => (
    <NameContext.Provider value="value">
    {props.children}
</NameContext.Provider>
)


module.exports = ContextWrap