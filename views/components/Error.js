import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import NotFound from '~/views/components/error/NotFound'
import InternalServer from '~/views/components/error/InternalServer'
import General from '~/views/components/error/General'

const Error = ({ statusCode }) => {
  return (
    <Fragment>
      <Wrapper>
        <Content>
          <Container>
            <Text>Oops!</Text>
          </Container>
          {renderError(statusCode)}
        </Content>
      </Wrapper>
    </Fragment>
  )
}

const renderError = statusCode => {
  switch (statusCode) {
    case 404:
      return <NotFound />
    case 500:
      return <InternalServer />
    default:
    case undefined:
      return <General />
  }
}

Error.propTypes = {
  statusCode: PropTypes.number
}

export default Error

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  text-align: center;
  transform: translateY(-50%);
  background-color: ${props => props.theme.colors.colorLight};
`
const Content = styled.div`
  max-width: 410px;
  position: relative;
  float: left;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Container = styled.div`
  height: 280px;
  position: relative;
  z-index: -1;

  @media only screen and (max-width: 767px) {
    height: 142px;
  }
`
const Text = styled.h1`
  @media only screen and (max-width: 767px) {
    font-size: 112px;
  }

  font-size: 230px;
  margin: 0;
  font-weight: 900;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  background: url(/images/oops.jpg) no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: cover;
  background-position: center;
`
