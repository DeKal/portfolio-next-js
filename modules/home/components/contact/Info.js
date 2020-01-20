import React from 'react'
import styled from 'styled-components/macro'
import Icon from '~/modules/home/components/common/Icon'
import { Translate } from 'react-localize-redux'

const Info = () => (
  <Container>
    <Name>
      <Translate id="Contact: Info Name" />
    </Name>
    <Role>
      <Translate id="Contact: Info Role" />
    </Role>
    <Location>
      <LocationIcon name="location" />
      <Underline href="#map">
        <Country>
          <Translate id="Contact: Info Country" />
        </Country>
        ,&nbsp;
        <Address>
          <Translate id="Contact: Info Dist" />
        </Address>
      </Underline>
    </Location>
    <Email>
      <EmailIcon name="mail" />
      <Underline>hohuuphat22@gmail.com</Underline>
    </Email>
    <Phone>
      <PhoneIcon name="phone" />
      <Underline>+84 906323761</Underline>
    </Phone>
  </Container>
)

export default Info

const Container = styled.div`
  @media screen and (max-width: 800px) {
    margin-left: 0;
  }
`
const Name = styled.h4`
  margin-bottom: 10px;
  font-weight: bold;
`
const Paragraph = styled.div`
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 1.5;

  &::before {
    float: left;
    display: block;
    width: 25px;
    height: 25px;
    border: none;
    vertical-align: top;
  }
`
const Role = styled(Paragraph)``

const Location = styled(Paragraph)``

const Email = styled(Paragraph)``

const Phone = styled(Paragraph)``

const Inline = styled.span`
  display: inline-block;
`
const Country = styled(Inline)``

const Address = styled(Inline)``

const Underline = styled.a`
  display: inline-block;
  vertical-align: top;
`
const LocationIcon = styled(Icon)`
  padding-right: 15px;
`
const EmailIcon = styled(Icon)`
  padding-right: 8px;
`
const PhoneIcon = styled(Icon)`
  padding-right: 10px;
`
