import * as fetch from '~/modules/blogs/api/fetch'
import {
  GET_BLOGS_START,
  GET_BLOGS_FINISH,
  GET_BLOGS_ERROR,
  getPostSummary
} from '../action'

describe('Action', () => {
  describe('getPostSummary', () => {
    it('should get Data without failure', async function() {
      const dispatch = jest.fn()
      const params = 'test-slug'
      const mockData = { test: 'test' }
      jest.spyOn(fetch, 'fetchPostSummary').mockImplementation(
        () =>
          new Promise(function(resolve) {
            resolve(mockData)
          })
      )
      await getPostSummary(dispatch, params)
      expect(dispatch.mock.calls.length).toBe(2)
      expect(dispatch.mock.calls[0]).toEqual([{ type: GET_BLOGS_START }])
      expect(dispatch.mock.calls[1]).toEqual([
        { type: GET_BLOGS_FINISH, payload: mockData }
      ])
    })

    it('should dispatch error', async function() {
      const dispatch = jest.fn()
      const params = 'test-slug'
      const mockError = { test: 'test' }
      jest.spyOn(fetch, 'fetchPostSummary').mockImplementation(
        () =>
          new Promise(function(resolve, reject) {
            reject(mockError)
          })
      )
      await getPostSummary(dispatch, params)
      expect(dispatch.mock.calls.length).toBe(2)
      expect(dispatch.mock.calls[0]).toEqual([{ type: GET_BLOGS_START }])
      expect(dispatch.mock.calls[1]).toEqual([
        { type: GET_BLOGS_ERROR, error: mockError }
      ])
    })
  })
})
