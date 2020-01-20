import axios from 'axios'
import { API_END_POINT } from '~/modules/blogs/consts/api'

const fetchPostFromSlug = async slug => {
  const result = await axios.get(`${API_END_POINT}post/${slug}`)
  const { data } = result

  return {
    header: data.title || '',
    content: data.content || '',
    authorName: data.author || '',
    date: data.time || '',
    minRead: '6'
  }
}

export { fetchPostFromSlug }
