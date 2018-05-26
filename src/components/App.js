import React, { Component } from 'react'
import store from '../store'

class App extends Component {
  constructor() {
    super()

    /**
     * All the app state is stored in the `App` container
     *
     * We'll manage state updates using a custom `store` function
     * The store will use the same api as Redux
     */
    this.state = store(undefined, {})
  }

  render() {
    return <h1 className="app-title">App Component</h1>
  }

  /**
   * Will dispatch actions to the store which will return our new state
   * and set the state in `App`
   */
  dispatch = action => {
    action &&
      action.type &&
      this.setState(prevState => store(prevState, action))
  }
}

export default App
