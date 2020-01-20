import React from 'react'
import Layout from '~/modules/core/components/error/Layout'

const General = () => {
  return (
    <Layout
      title={'An error occurred'}
      description={
        'There are some errors happened during the process, please back to home page and try again.'
      }
    />
  )
}

export default General
