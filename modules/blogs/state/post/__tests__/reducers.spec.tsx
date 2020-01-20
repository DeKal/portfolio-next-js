import { postReducer } from '../reducer'
import {
  GET_POST_START,
  GET_POST_FINISH,
  GET_POST_ERROR
} from '~/modules/blogs/state/post/action'

describe('Reducers', () => {
  it('should execute action get post start', async function() {
    const state = {
      test: 'test'
    }
    const action = {
      type: GET_POST_START
    }

    const postState = postReducer(state, action)
    expect(postState).toEqual({
      test: 'test',
      loading: true
    })
  })

  it('should execute action get post finish', async function() {
    const state = {
      test: 'test'
    }
    const action = {
      type: GET_POST_FINISH,
      payload: 'test'
    }

    const postState = postReducer(state, action)
    expect(postState).toEqual({
      test: 'test',
      data: 'test',
      loading: false
    })
  })

  it('should execute action get post error', async function() {
    const state = {
      test: 'test'
    }
    const action = {
      type: GET_POST_ERROR,
      error: 'test'
    }

    const postState = postReducer(state, action)
    expect(postState).toEqual({
      test: 'test',
      loading: false,
      error: 'test'
    })
  })

  it('should throw exception with unknown action', async function() {
    const state = {
      test: 'test'
    }
    const action = {
      type: 'unknown action'
    }
    expect(() => {
      postReducer(state, action)
    }).toThrow(Error);
  })
})
