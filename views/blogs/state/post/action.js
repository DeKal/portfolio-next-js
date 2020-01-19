import { fetchPostFromSlug } from '~/views/blogs/api/fetch'

export const GET_POST_START = 'start getPostWithSlug'
export const GET_POST_FINISH = 'finish getPostWithSlug'
export const GET_POST_ERROR = 'fail getPostWithSlug'

const getPostWithSlug = async (dispatch, params) => {
  dispatch({ type: GET_POST_START })
  try {
    const data = await fetchPostFromSlug(params)
    dispatch({ type: GET_POST_FINISH, payload: data })
  } catch (error) {
    dispatch({ type: GET_POST_ERROR, error })
  }
}

export { getPostWithSlug }
