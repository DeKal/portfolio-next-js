import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import ExpIcon from '~/modules/home/components/sideProject/ExpIcon'
import Title from '~/modules/home/components/sideProject/Title'
import Description from '~/modules/home/components/experiences/Description'
import Dates from '~/modules/home/components/sideProject/Dates'
import Bold from '~/modules/home/components/experiences/Bold'
import { Translate } from 'react-localize-redux'

const Item = ({ title, dates, description, skill, role }) => (
  <Container>
    <ExpIcon name="workexp" />
    <Title>
      <Translate id={title} />
    </Title>
    <Dates>
      <Translate id={role} /> (<Translate id={dates} />)
    </Dates>
    <Description>
      <Bold>
        <Translate id={skill} />
      </Bold>
    </Description>
    <Description>
      <Translate id={description} />
    </Description>
  </Container>
)

Item.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  skill: PropTypes.string,
  dates: PropTypes.string,
  role: PropTypes.string
}

export default Item

const Container = styled.div`
  margin-bottom: 50px;

  @media screen and (max-width: 800px) {
    margin-bottom: 30px;
  }
`
