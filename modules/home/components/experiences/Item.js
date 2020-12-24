import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Title from '~/modules/home/components/experiences/Title'
import Role from '~/modules/home/components/experiences/Role'
import Description from '~/modules/home/components/experiences/Description'
import Bold from '~/modules/home/components/experiences/Bold'
import { Translate } from 'react-localize-redux'

const Item = ({ title, description, descriptionExtra, skill, role }) => {
  const [isShowExtra, setIsShowExtra] = useState(false)
  return (
    <Container>
      <Title>
        <Translate id={title} />
      </Title>
      <Role>
        <Translate id={role} />
      </Role>
      <Description>
        <Bold>
          <Translate id={skill} />
        </Bold>
      </Description>
      <Description>
        <Translate id={description} />
        <Translate>
          {({ translate }) => {
            const translation = translate(descriptionExtra)
            if (!translation.toString().includes('Missing translationId')) {
              return (
                <>
                  <HideOrShowBlock isShowExtra={isShowExtra}>
                    <Translate id={descriptionExtra} />
                  </HideOrShowBlock>

                  <ExtraContainer>
                    <Extra onClick={() => setIsShowExtra(!isShowExtra)}>
                      {isShowExtra ? null : translate('See more')}
                    </Extra>
                  </ExtraContainer>
                </>
              )
            }
            return ''
          }}
        </Translate>
      </Description>
    </Container>
  )
}

Item.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  descriptionExtra: PropTypes.string,
  skill: PropTypes.string,
  role: PropTypes.string
}

export default Item

const Container = styled.div``

const HideOrShowBlock = styled.span`
  display: ${props => (props.isShowExtra ? 'block' : 'none')};
`

const ExtraContainer = styled.span`
  display: flex;
  justify-content: flex-end;
`

const Extra = styled.a`
  cursor: pointer;
  color: ${props => props.theme.colors.colorDark};
  font-weight: 600 !important;
  text-decoration: underline;

  @media screen and (max-width: 1170px) {
    font-size: 0.8125rem;
  }
`
