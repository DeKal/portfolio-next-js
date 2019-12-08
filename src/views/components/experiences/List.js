import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Item from '~/views/components/experiences/Item'

const List = ({ companies }) => (
  <Container className="services">
    {companies.map(company => (
      <Item
        key={company}
        title={`Exp: ${company} Title`}
        description={`Exp: ${company} Desc`}
        skill={`Exp: ${company} Skill`}
      />
    ))}
  </Container>
)

List.propTypes = {
  companies: PropTypes.any
}

export default List

const Container = styled.ul`
  list-style-type: none;
`
