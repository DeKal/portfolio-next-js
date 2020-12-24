import Dispatcher from '../Dispatcher'

describe('Dispatcher', () => {
  it('should call dispatch on action with params', function() {
    const dispatch = jest.fn()
    const action = jest.fn()
    const params = {
      test: 'params'
    }
    const dispatcher = Dispatcher(dispatch)
    dispatcher.send(action, params)
    expect(action).toBeCalledWith(dispatch, params)
  })
})
