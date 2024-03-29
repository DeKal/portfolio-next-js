import React from 'react'
import { HOME } from '~/modules/home/consts/pages'
import styled from 'styled-components/macro'
import { Translate } from 'react-localize-redux'
import Container from 'react-bootstrap/Container'
import Anchor from '~/modules/home/components/common/Anchor'
import Typist from '~/modules/home/components/common/Typist'
import useWindowDimensions from '~/modules/core/utils/useWindowDimensions'

const Home = () => {
  const { width } = useWindowDimensions()
  return (
    <HomeSection>
      <Anchor id={HOME} />
      <Background />
      <Overlay>
        <Container>
          <Header>
            <TitleName>
              <Translate id="Name" />
            </TitleName>
            <TitleJob>
              <Typist>{getTexts(width)}</Typist>
            </TitleJob>
          </Header>
        </Container>
      </Overlay>
    </HomeSection>
  )
}

export const getTexts = width => {
  const typingTexts = ['Job']

  const secondText = width < 460 ? 'Welcome-short' : 'Welcome'
  typingTexts.push(secondText)

  return typingTexts.map(item => <Translate key={item} id={item} />)
}

const HomeSection = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 0;
    clear: both;
    box-shadow: 0 0 2px 1px ${props => props.theme.colors.colorDark};
  }
`

const TitleName = styled.h1`
  margin-bottom: 10px;
  font-size: 100px;
  color: ${props => props.theme.colors.ghostWhite};
  text-shadow: 1px 1px 1px ${props => props.theme.colors.colorDark};
  width: fit-content;
  background: ${props => props.theme.titleBgColor};

  @media screen and (max-width: 1200px) {
    font-size: 75px;
  }

  @media screen and (max-width: 800px) {
    font-size: 50px;
  }
`

const TitleJob = styled.h2`
  width: fit-content;
  background: ${props => props.theme.titleBgColor};
  color: ${props => props.theme.colors.ghostWhite};
  font-family: ${props => props.theme.fonts.fontTrebuchet};
  text-shadow: 1px 1px 2px ${props => props.theme.colors.colorDark};
`

const Background = styled.div`
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  z-index: 0;
  background: transparent url(${props => props.theme.images.background}) center
    0 no-repeat;
  background-attachment: fixed;
  background-size: cover;

  @media screen and (max-width: 800px) {
    background: transparent url(${props => props.theme.images.backgroundMobile})
      center 0 no-repeat;
    background-size: cover;
    background-position: center;
  }
`

const Overlay = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.images.overlayBgColor};
  zoom: 1;
  background-image: url(${props => props.theme.images.overlay});
  background-repeat: repeat;
  background-attachment: fixed;

  @media screen and (max-width: 800px) {
    background-color: ${props => props.theme.images.overlayBgColorMobile};
  }
`

const Header = styled.header`
  padding: ${props => props.theme.headerPadding};
  text-align: left;

  @media screen and (max-width: 800px) {
    text-align: center;
  }

  @media screen and (max-width: 600px) {
    padding: 100px 0 300px;
  }
`
export default Home
