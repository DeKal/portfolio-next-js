import { fetchPostFromSlug } from '../fetch'
import mockAxios from 'axios'
jest.mock('axios')

const post = {
  header: 'Search: The Whole Story',
  content:
    'Query understanding and relevance are key aspects of search, but they don’t tell the whole story.',
  authorName: 'Daniel Tunkelang',
  date: 'Mar 25, 2019',
  minRead: '6'
}

describe('Fetch ', () => {
  it('fetchPostFromSlug', async () => {
    //@ts-ignore
    mockAxios.get.mockResolvedValue({
      data: post
    })

    const data = await fetchPostFromSlug()
    expect(data).toEqual(post)
  })
})
