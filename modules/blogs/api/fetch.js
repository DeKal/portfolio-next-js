import axios from 'axios'
// import { API_END_POINT } from '~/modules/post/consts/api'

const fetchPostSummary = async () => {
  const result = await axios.get(
    `https://my-json-server.typicode.com/DeKal/fake-porfolio-server/blogs/`
  )
  const { data } = result

  return data
}

export { fetchPostSummary }
