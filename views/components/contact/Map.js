import React from 'react'
import styled from 'styled-components/macro'

const Map = () => <Container id="map" />

const Container = styled.div`
  z-index: 0;
  position: relative;
  width: 100%;
  margin-top: -150px;
  height: 500px;
  overflow: hidden;
  background-position: top center;
  background-size: cover;
  background-image: url(/images/map.jpg);
  border-top: solid 1px ${props => props.theme.colors.colorDarken};
`
export default Map
