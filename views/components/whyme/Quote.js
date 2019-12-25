import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

const Quote = ({ children }) => (
  <Container>
    <Content>{children}</Content>
  </Container>
)

Quote.propTypes = {
  children: PropTypes.element
}

export default Quote

const Container = styled.div`
  padding: 40px 0;
  border-bottom: 10px solid ${props => props.theme.colors.colorAccent};

  @media screen and (max-width: 600px) {
    padding: 20px 0;
  }
`

const Content = styled.p`
  display: inline-block;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 20px;
  font-size: 25px;

  @media screen and (max-width: 960px) {
    font-size: 20px;
  }

  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`
