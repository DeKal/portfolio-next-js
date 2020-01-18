import React from 'react'
import Layout from '~/views/core/components/error/Layout'

const InternalServer = () => {
  return (
    <Layout
      title={'An error 500 Internal Server Error occurred'}
      description={
        'The server encountered an internal error or misconfiguration and was unable to complete your request.'
      }
    />
  )
}

export default InternalServer
