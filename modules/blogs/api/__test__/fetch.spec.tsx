import { fetchPostSummary } from '../fetch'
import mockAxios from 'axios'
jest.mock('axios')

const blogs = {
  data: [
    {
      "slug": "getting-started-with-java",
      "title": "Getting Started With Java",
      "brief": "Get startted with Java",
      "time": "06/01/2020",
      "tag": [
        "Web Development",
        "Java"
      ],
      "author": "Phat Ho",
      "viewNum": 0,
      "commentNum": 0,
      "likeNum": 0
    },
    {
      "slug": "get-startted-with-spring",
      "title": "Get Startted With Spring MVC",
      "brief": "I have written a lot about Java Spring",
      "time": "06/01/2020",
      "tag": [
        "Java Spring",
        "Course"
      ],
      "author": "Phat Ho",
      "viewNum": 0,
      "commentNum": 0,
      "likeNum": 0
    }
  ],
  success: true
}

describe('fetchPostSummary ', () => {
  it('fetchPostSummary with mock request', async () => {
    //@ts-ignore
    mockAxios.get.mockResolvedValue({
      data: blogs
    })

    const data = await fetchPostSummary()
    expect(data).toMatchSnapshot()
  })

  it('fetchPostSummary with empty request', async () => {
    //@ts-ignore
    mockAxios.get.mockResolvedValue({
      data: {
        data: [],
        success: true
      }
    })

    const data = await fetchPostSummary()
    expect(data).toMatchSnapshot()
  })

  it('fetchPostSummary with error request', async () => {
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

    const data = await fetchPostSummary()
    expect(data).toMatchSnapshot()
  })
})
