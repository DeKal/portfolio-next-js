import {
  GET_BLOGS_START,
  GET_BLOGS_FINISH,
  GET_BLOGS_ERROR
} from '~/modules/blogs/state/action'

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_BLOGS_START: {
      return {
        ...state,
        loading: true
      }
    }
    case GET_BLOGS_FINISH: {
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    }
    case GET_BLOGS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}
