import React, { Component } from 'react'
import store from '../store'

class App extends Component {
  constructor() {
    super()

    this.state = store(undefined, {})
  }

  dispatch = action => {
    action &&
      action.type &&
      this.setState(prevState => store(prevState, action))
  }

  render() {
    return <h1 className="app-title">App Component</h1>
  }
}

export default App
