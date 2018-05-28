import React, { Component } from 'react'
import store from '../store'
import { fetchTopStories, fetchStoryDetails } from '../services'
import * as actions from '../actions'
import { calculateNextStoryIds } from '../utils'
import StoriesList from './StoriesList'
import Header from './Header'
import ShowMoreBtn from './ShowMoreBtn'

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

  componentDidMount() {
    fetchTopStories('/topstories')
      .then(res => this.dispatch(actions.setStoriesIdsList(res.data)))
      .then(res => this.fetchMoreStories())
  }

  render() {
    const { stories } = this.state
    return (
      <React.Fragment>
        <Header />
        <StoriesList stories={stories} />
        <ShowMoreBtn fetchMoreStories={this.fetchMoreStories} />
      </React.Fragment>
    )
  }

  /**
   * Should fetch a list of stories and add it to `stories` in the store
   *
   * @params {number} storiesLoaded - The number of stories that's been loaded
   */
  fetchMoreStories = () => {
    const { storiesIdsList, numberOfStoriesLoaded } = this.state

    return Promise.all(
      calculateNextStoryIds(storiesIdsList, numberOfStoriesLoaded).map(
        storyId => fetchStoryDetails('/item', storyId).then(res => res.data),
      ),
    ).then(res => this.dispatch(actions.setStoriesListData(res)))
  }

  /**
   * Will dispatch actions to the store which will return our new state
   * and set the state in `App`
   */
  dispatch = action => {
    if (action && action.type) {
      this.setState(prevState => store(prevState, action))
      return this.state
    }
  }
}

export default App
