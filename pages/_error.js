import React from 'react'
import PropTypes from 'prop-types'
import Error from '~/views/home/components/Error'

const ErrorPage = ({ statusCode }) => <Error statusCode={statusCode} />

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

ErrorPage.propTypes = {
  statusCode: PropTypes.number
}

export default ErrorPage
