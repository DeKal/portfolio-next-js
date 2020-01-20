import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Header from '~/modules/core/components/error/layout/Header'
import Title from '~/modules/core/components/error/layout/Title'
import Description from '~/modules/core/components/error/layout/Description'
import Button from '~/modules/core/components/error/layout/Button'

const Layout = ({ title, description }) => {
  return (
    <Fragment>
      <Header>Oops!</Header>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Link href="/">
        <Button> Go To Homepage </Button>
      </Link>
    </Fragment>
  )
}

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default Layout
