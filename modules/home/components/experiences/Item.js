import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import ExpIcon from '~/modules/home/components/experiences/ExpIcon'
import Title from '~/modules/home/components/experiences/Title'
import Description from '~/modules/home/components/experiences/Description'
import Dates from '~/modules/home/components/experiences/Dates'
import Bold from '~/modules/home/components/experiences/Bold'
import { Translate } from 'react-localize-redux'

const Item = ({ title, dates, description, skill }) => (
  <Container>
    <ExpIcon name="workexp" />
    <Title>
      <Translate id={title} />
    </Title>
    <Dates>
      (<Translate id={dates} />)
    </Dates>
    <Description>
      <Translate id={description} />
    </Description>
    <Description>
      <Bold>
        <Translate id={skill} />
      </Bold>
    </Description>
  </Container>
)

Item.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  skill: PropTypes.string,
  dates: PropTypes.string
}

export default Item

const Container = styled.li`
  margin-bottom: 50px;

  @media screen and (max-width: 800px) {
    margin-bottom: 30px;
  }
`
