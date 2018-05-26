import axios from 'axios'
import { API_ENTRY_POINT } from '../actions/constants'

export const fetchTopStories = endpoint => {
  const url = API_ENTRY_POINT + endpoint

  return axios.get(url)
}
