import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_TOPSTORIES = 'FETCH_TOPSTORIES'

// ------------------------------------
// Actions
// ------------------------------------
export const _fetchTopStories = createAction(FETCH_TOPSTORIES)

//
export const fetchTopStories = () => {
  return (dispatch, getState) => {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson);
        dispatch(_fetchTopStories({topStories: responseJson}))
      })
      .catch((error) => {
        console.warn(error);
      });
  }
}


export const actions = {
  fetchTopStories
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [FETCH_TOPSTORIES]: (state, { payload }) => {
    return {
      ...state,
      topStories: payload.topStories
    }
  }
}, { topStories: [] })
