import blogsReducer from '../reducer'
import {
  GET_BLOGS_START,
  GET_BLOGS_FINISH,
  GET_BLOGS_ERROR
} from '~/modules/blogs/state/action'

describe('Reducers', () => {
  it('should execute action get blogs start', async function () {
    const state = {
      test: 'test'
    }
    const action = {
      type: GET_BLOGS_START
    }

    const postState = blogsReducer(state, action)
    expect(postState).toEqual({
      test: 'test',
      loading: true
    })
  })

  it('should execute action get blogs finish', async function () {
    const state = {
      test: 'test'
    }
    const action = {
      type: GET_BLOGS_FINISH,
      payload: 'test'
    }

    const postState = blogsReducer(state, action)
    expect(postState).toEqual({
      test: 'test',
      data: 'test',
      loading: false
    })
  })

  it('should execute action get blogs error', async function () {
    const state = {
      test: 'test'
    }
    const action = {
      type: GET_BLOGS_ERROR,
      error: 'test'
    }

    const postState = blogsReducer(state, action)
    expect(postState).toEqual({
      test: 'test',
      loading: false,
      error: 'test'
    })
  })

  it('should orignal state with unknown action', async function () {
    const state = {
      test: 'test'
    }
    const action = {
      type: 'unknown action'
    }
    const blogsState = blogsReducer(state, action)
    expect(blogsState).toEqual({
      test: 'test',
    })
  })
})
