import * as React from 'react'
import { HOME } from '~/consts/pages'
import styled from 'styled-components/macro'

const Home = () => (
  <HomeSection id={HOME}>
    <Background />
    <Overlay>
      <div className="container">
        <Header>
          <TitleName> Phat Ho</TitleName>
          <TitleJob> Fullstack Developer</TitleJob>
        </Header>
      </div>
    </Overlay>
  </HomeSection>
)

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
  text-shadow: 1px 1px 1px ${props => props.theme.colors.colorDark};

  @media screen and (max-width: 1200px) {
    font-size: 75px;
  }

  @media screen and (max-width: 800px) {
    font-size: 50px;
  }
`

const TitleJob = styled.h2`
  color: ${props => props.theme.colors.colorLight};
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
`

const Overlay = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(44, 62, 80, 0.3);
  zoom: 1;
  background-image: url(${props => props.theme.images.overlay});
  background-repeat: repeat;
  background-attachment: fixed;
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
