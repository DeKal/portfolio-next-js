import React from 'react'
import Layout from '~/views/core/components/error/Layout'

const NotFound = () => {
  return (
    <Layout
      title={'An error 404 occurred'}
      description={
        'The page you are looking for might have been removed had its name changed or is temporarily unavailable.'
      }
    />
  )
}

export default NotFound
