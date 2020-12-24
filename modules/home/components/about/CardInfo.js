import * as React from 'react'
import styled from 'styled-components/macro'
import { Translate, withLocalize } from 'react-localize-redux'
import useWindowDimensions from '~/modules/core/utils/useWindowDimensions'

const CardInfo = () => {
  const { width } = useWindowDimensions()
  return (
    <Container>
      <p>
        {width < 700 ? (
          <Translate id="About me: Card Info Mobile Verse 1" />
        ) : (
          <Translate id="About me: Card Info Verse 1" />
        )}
      </p>
      <Quote>
        <Translate id="About me: Card Info Quote" />
      </Quote>
      <p>
        <Translate id="About me: Card Info Verse 2" />
      </p>
      <Status>
        <Bold>Current Status:</Bold> <Translate id="About me: Current status" />
      </Status>
    </Container>
  )
}

export default withLocalize(CardInfo)

const Container = styled.div`
  padding: 20px;
  background-color: ${props => props.theme.colors.colorLight};
  font-style: italic;
`

const Quote = styled.blockquote`
  margin: 20px 0 20px 20px;
  font-family: ${props => props.theme.fonts.fontSerif};
  font-style: italic;
  font-size: ${props => props.theme.fonts.XL};
  font-weight: bold;
`
const Status = styled.p`
  margin-top: 20px;
  padding-top: ${props => props.theme.spaces.xxsmall};
  font-weight: normal;
  border-top: 1px dashed ${props => props.theme.colors.colorDarken};
`

const Bold = styled.span`
  font-weight: bold;
  text-transform: uppercase;
`
