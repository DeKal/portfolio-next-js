import React from 'react'
import styled from 'styled-components/macro'

const Map = () => <Container id="map" />

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  overflow: hidden;
  background-position: top center;
  background-size: cover;
  background-image: url(/images/map.jpg);
  box-shadow: 0 0 2px 1px ${props => props.theme.colors.colorDark};
`
export default Map
