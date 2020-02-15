import { fetchPostSummary } from '~/modules/blogs/api/fetch'

export const GET_BLOGS_START = 'start fetchPostSummary'
export const GET_BLOGS_FINISH = 'finish fetchPostSummary'
export const GET_BLOGS_ERROR = 'fail fetchPostSummary'

const getPostSummary = async (dispatch, params) => {
  dispatch({ type: GET_BLOGS_START })
  try {
    const data = await fetchPostSummary(params)
    dispatch({ type: GET_BLOGS_FINISH, payload: data })
  } catch (error) {
    dispatch({ type: GET_BLOGS_ERROR, error })
  }
}

export { getPostSummary }
