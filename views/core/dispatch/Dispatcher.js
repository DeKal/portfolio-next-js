export default function Dispatcher(dispatch) {
  return {
    send: (action, params) => {
      action(dispatch, params)
    }
  }
}
