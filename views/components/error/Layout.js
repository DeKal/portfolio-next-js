import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import Link from 'next/link'

const Layout = ({ title, description }) => {
  return (
    <Fragment>
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

const Title = styled.h2`
  font-family: ${props => props.theme.fonts.fontSans};
  color: ${props => props.theme.colors.colorDark};
  font-size: ${props => props.theme.fontSizes.XXL};
  font-weight: 700;
  text-transform: uppercase;
  margin: 10px;
`
const Description = styled.p`
  color: ${props => props.theme.colors.colorDark};
  font-size: 14px;
  font-weight: 400;
  margin: 10px;
`
const Button = styled.a`
  font-size: ${props => props.theme.fontSizes.M};
  text-decoration: none;
  text-transform: uppercase;
  background: ${props => props.theme.colors.colorAccent};
  display: inline-block;
  padding: 15px 30px;
  border-radius: 40px;
  color: ${props => props.theme.colors.colorLight};
  font-weight: 700;
  box-shadow: 0 4px 15px -5px ${props => props.theme.colors.colorAccent};
  border: none;
  margin: 10px;
`
