import axios from 'axios'
import { API_END_POINT } from '~/modules/core/consts/api'
import { isSuccess, getData, getError } from '~/modules/core/api/selector'

const fetchPostFromSlug = async slug => {
  const result = await axios.get(`${API_END_POINT}post/${slug}`)
  const { data: response } = result
  if (isSuccess(response)) {
    const data = getData(response)
    return {
      header: data.title || '',
      content: data.content || '',
      authorName: data.author || '',
      date: data.time || '',
      minRead: '6'
    }
  }
  const error = getError(response)
  console.error(
    `There was an error with code ${error.code} and message "${error.message}"`
  )
  return {}
}

export { fetchPostFromSlug }
