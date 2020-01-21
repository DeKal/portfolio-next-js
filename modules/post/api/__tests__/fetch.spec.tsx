import { fetchPostFromSlug } from '../fetch'
import mockAxios from 'axios'
jest.mock('axios')

const post = {
  title: 'Search: The Whole Story',
  content:
    'Query understanding and relevance are key aspects of search, but they don’t tell the whole story.',
  author: 'Daniel Tunkelang',
  time: 'Mar 25, 2019',
  minRead: '6'
}

describe('Fetch ', () => {
  it('fetchPostFromSlug with mock request', async () => {
    //@ts-ignore
    mockAxios.get.mockResolvedValue({
      data: post
    })

    const data = await fetchPostFromSlug()
    expect(data).toEqual({
      header: 'Search: The Whole Story',
      content: 'Query understanding and relevance are key aspects of search, but they don’t tell the whole story.',
      authorName: 'Daniel Tunkelang',
      date: 'Mar 25, 2019',
      minRead: '6'
    })
  })

  it('fetchPostFromSlug with empty request', async () => {
    //@ts-ignore
    mockAxios.get.mockResolvedValue({
      data: {}
    })

    const data = await fetchPostFromSlug()
    expect(data).toEqual({
      header: '',
      content: '',
      authorName: '',
      date: '',
      minRead: '6'
    })
  })
})
