import { fetchPostFromSlug } from '../fetch'
import mockAxios from 'axios'
jest.mock('axios')

const post = {
  data: {
    title: 'Search: The Whole Story',
    content:
      'Query understanding and relevance are key aspects of search, but they don’t tell the whole story.',
    author: 'Daniel Tunkelang',
    time: 'Mar 25, 2019',
    minRead: '6'
  },
  success: true
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
      data: {
        data: {},
        success: true
      }
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

  it('fetchPostFromSlug with error request', async () => {
    //@ts-ignore
    mockAxios.get.mockResolvedValue({
      data: {
        error: {
          code: 204,
          message: 'Cannot find post'
        },
        success: false
      }
    })

    const data = await fetchPostFromSlug()
    expect(data).toMatchSnapshot()
  })
})
