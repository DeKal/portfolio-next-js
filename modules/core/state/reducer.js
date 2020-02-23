/* istanbul ignore file */
import blogReducer from '~/modules/blogs/state/reducer'
import postReducer from '~/modules/post/state/reducer'

const reducers = [blogReducer, postReducer]

export const reducer = (state, action) => {
  let newState = { ...state }
  reducers.map(reducer => {
    newState = reducer(newState, action)
  })
  return newState
}
export const initialData = {
  loading: true
}
