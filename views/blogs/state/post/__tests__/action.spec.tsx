import { getPostWithSlug } from '../action'
import * as fetch from '~/views/blogs/api/fetch'
import {
  GET_POST_START,
  GET_POST_FINISH,
  GET_POST_ERROR
} from '~/views/blogs/state/post/action'

describe('Action', () => {
  describe('getPostWithSlug', () => {
    it('should get Data without failure', async function() {
      const dispatch = jest.fn()
      const params = 'test-slug'
      const mockData = { test: 'test' }
      jest.spyOn(fetch, 'fetchPostFromSlug').mockImplementation(
        () =>
          new Promise(function(resolve) {
            resolve(mockData)
          })
      )
      await getPostWithSlug(dispatch, params)
      expect(dispatch.mock.calls.length).toBe(2)
      expect(dispatch.mock.calls[0]).toEqual([{ type: GET_POST_START }])
      expect(dispatch.mock.calls[1]).toEqual([
        { type: GET_POST_FINISH, payload: mockData }
      ])
    })

    it('should dispatch error', async function() {
      const dispatch = jest.fn()
      const params = 'test-slug'
      const mockError = { test: 'test' }
      jest.spyOn(fetch, 'fetchPostFromSlug').mockImplementation(
        () =>
          new Promise(function(resolve, reject) {
            reject(mockError)
          })
      )
      await getPostWithSlug(dispatch, params)
      expect(dispatch.mock.calls.length).toBe(2)
      expect(dispatch.mock.calls[0]).toEqual([{ type: GET_POST_START }])
      expect(dispatch.mock.calls[1]).toEqual([
        { type: GET_POST_ERROR, error: mockError }
      ])
    })
  })
})
