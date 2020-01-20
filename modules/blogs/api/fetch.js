import axios from 'axios'

const fetchPostFromSlug = async slug => {
  const result = await axios.get(
    `https://my-json-server.typicode.com/DeKal/fake-porfolio-server/posts/${slug}`
  )
  const { data } = result
  return data
}

export { fetchPostFromSlug }
