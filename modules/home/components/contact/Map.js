import React from 'react'
import styled from 'styled-components/macro'

const Map = () => <Container id="map" />

const Container = styled.div`
  z-index: 0;
  position: relative;
  width: 100%;
  margin-top: -150px;
  height: 400px;
  overflow: hidden;
  background-position: top center;
  background-size: cover;
  background-image: url(/images/map.webp);
  border-top: solid 1px ${props => props.theme.colors.colorDarken};

  @media screen and (max-width: 800px) {
    background-image: url(/images/map-mobile.webp);
  }
`
export default Map
