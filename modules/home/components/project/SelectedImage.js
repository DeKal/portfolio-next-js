import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/macro'

const SelectedImage = ({ index, photo, margin, onClick }) => (
  <div style={{ margin, height: photo.height, width: photo.width }}>
    <Image alt={photo.title} {...photo} onClick={() => onClick(index)} />
  </div>
)

SelectedImage.propTypes = {
  index: PropTypes.number,
  photo: PropTypes.shape({
    title: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number
  }),
  margin: PropTypes.string,
  onClick: PropTypes.func
}

export default SelectedImage

const Image = styled.img`
  border: 0.5px solid ${props => props.theme.colors.colorDarken};

  &:hover {
    transition: transform 0.135s cubic-bezier(0, 0, 0.2, 1),
      opacity linear 0.15s;
    opacity: 0.6;
    border: 3px solid ${props => props.theme.colors.colorAccent};
  }
`
