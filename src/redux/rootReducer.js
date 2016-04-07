import { combineReducers } from 'redux'
// import { routeReducer as router } from 'react-router-redux'
import counter from './modules/counter'
import topStories from './modules/topStories'

export default combineReducers({
  counter,
  topStories,
})
