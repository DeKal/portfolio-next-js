import * as React from 'react'

import styled from 'styled-components/macro'

const Home = () => (
  <ContentWrapper>
    <Background />
    <Overlay>
      <div className="container">
        <Header>
          <TitleName> Phat Ho</TitleName>
          <TitleJob> Fullstack Developer</TitleJob>
        </Header>
      </div>
    </Overlay>
  </ContentWrapper>
)

const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
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
  font-family: 'Open Sans Condensed'
  text-shadow: 1px 1px 2px ${props => props.theme.colors.colorDark};
`

const Background = styled.div`
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  z-index: 0;
  background-attachment: fixed;
  background-size: cover;
  background: transparent url(${props => props.theme.image.background}) center 0
    no-repeat;
`

// const After = styled.div`
//   content: "";
//   position: absolute
//   left: 0
//   bottom: 0
//   display: block
//   width: 100%
//   height: 0
//   clear: both
//   box-shadow: 0 0 2px 1px ${props => props.theme.colors.colorDark};
// `

const Overlay = styled.div`
  padding: 6em;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100%;
  background-color: transparent;
  background-color: rgba(#2c3e50, 0.3);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#4C000000,endColorstr=#4C000000);
  zoom: 1;
  background-image: url(${props => props.theme.image.overlay});
  background-repeat: repeat;
  background-attachment: fixed;
`

const Header = styled.div`
  padding: 200px 10px 400px
  text-align: left
  @media screen and (max-width: 800px)
    text-align: center
  @media screen and (max-width: 600px)
    padding: 100px 0 300px
`
export default Home
