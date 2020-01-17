import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import ExpIcon from '~/views/home/components/experiences/ExpIcon'
import Title from '~/views/home/components/experiences/Title'
import Description from '~/views/home/components/experiences/Description'
import Bold from '~/views/home/components/experiences/Bold'
import { Translate } from 'react-localize-redux'

const Item = ({ title, description, skill }) => (
  <Container>
    <ExpIcon name="workexp" />
    <Title>
      <Translate id={title} />
    </Title>
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
  skill: PropTypes.string
}

export default Item

const Container = styled.li`
  margin-bottom: 50px;

  @media screen and (max-width: 800px) {
    margin-bottom: 30px;
  }
`
