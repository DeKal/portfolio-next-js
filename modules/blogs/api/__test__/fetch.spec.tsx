import { fetchPostSummary } from '../fetch'
import mockAxios from 'axios'
jest.mock('axios')

const blogs = [
  {
    id: 1,
    header: 'Test header 1',
    slug: 'test-slug-1',
    brief: 'This is test brief 1',
    author: 'test author 1',
    date: '20/1/2019'
  },
  {
    id: 2,
    header: 'Test header 2',
    slug: 'test-slug-2',
    brief: 'This is test brief 2',
    author: 'test author 2',
    date: '20/1/2019'
  }
]

describe('Fetch ', () => {
  it('fetchPostFromSlug with mock request', async () => {
    //@ts-ignore
    mockAxios.get.mockResolvedValue({
      data: blogs
    })

    const data = await fetchPostSummary()
    expect(data).toMatchSnapshot()
  })

  it('fetchPostFromSlug with empty request', async () => {
    //@ts-ignore
    mockAxios.get.mockResolvedValue({
      data: {}
    })

    const data = await fetchPostSummary()
    expect(data).toMatchSnapshot()
  })
})
