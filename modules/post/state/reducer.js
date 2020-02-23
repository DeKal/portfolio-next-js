import {
  GET_POST_START,
  GET_POST_FINISH,
  GET_POST_ERROR
} from '~/modules/post/state/action'

export default (state, action) => {
  switch (action.type) {
    case GET_POST_START: {
      return {
        ...state,
        loading: true
      }
    }
    case GET_POST_FINISH: {
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    }
    case GET_POST_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error
      }
    }
    default:
      return state
  }
}
