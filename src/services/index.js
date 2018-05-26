import axios from 'axios'
import { API_ENTRY_POINT } from '../actions/constants'

export const fetchTopStories = endpoint => {
  const url = `${API_ENTRY_POINT}${endpoint}.json`

  return axios.get(url)
}

export const fetchStoryDetails = (endpoint, id) => {
  const url = `${API_ENTRY_POINT}${endpoint}/${id}.json`

  return axios.get(url)
}
