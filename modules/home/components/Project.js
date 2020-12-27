import React, { useState, useCallback } from 'react'
import { Translate } from 'react-localize-redux'
import Container from '~/modules/home/components/project/Container'
import Header from '~/modules/home/components/common/section/Header'
import Content from '~/modules/home/components/project/Content'
import SelectedImage from '~/modules/home/components/project/SelectedImage'
import { PROJECTS } from '~/modules/home/consts/pages'
import Anchor, {
  ANCHOR_DISTANCE_TO_TOP_OF_SECTION
} from '~/modules/home/components/common/Anchor'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { photos } from '~/modules/home/consts/photos.js'
import useWindowDimensions from '~/modules/core/utils/useWindowDimensions'

const Project = () => {
  const { width } = useWindowDimensions()
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback(index => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }
  const imageRenderer = useCallback(({ index, key, photo }) => (
    <SelectedImage
      key={key}
      margin={'2px'}
      index={index}
      photo={photo}
      onClick={openLightbox}
    />
  ))

  return (
    <Container>
      <Anchor id={PROJECTS} top={ANCHOR_DISTANCE_TO_TOP_OF_SECTION} />
      <Header>
        <h2>
          <Translate id="Project: Title" />
        </h2>
        <h4>
          <Translate id="Project: SubTitle" />
        </h4>
      </Header>
      <Content>
        <Gallery
          photos={photos}
          direction={width < 768 ? 'column' : 'row'}
          renderImage={imageRenderer}
        />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  src: `${x.src}.jpg`,
                  srcSet: `${x.src}.jpg`,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </Content>
    </Container>
  )
}

export default Project
