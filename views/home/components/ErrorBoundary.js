import React from 'react'
import PropTypes from 'prop-types'
import Error from '~/views/home/components/Error'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return {
      errorTrace: error,
      hasError: true
    }
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <Error />
    }

    return this.props.children
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.any
}

export default ErrorBoundary
