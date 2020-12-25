import React, { useState, useCallback } from 'react'
import { Translate } from 'react-localize-redux'
import Container from '~/modules/home/components/project/Container'
import Header from '~/modules/home/components/common/section/Header'
import Content from '~/modules/home/components/project/Content'
import { PROJECTS } from '~/modules/home/consts/pages'
import Anchor from '~/modules/home/components/common/Anchor'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from 'react-images'
import { photos } from '~/modules/home/consts/photos.js'
import useWindowDimensions from '~/modules/core/utils/useWindowDimensions'

const Project = () => {
  const { width } = useWindowDimensions()
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((__, { index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <Container>
      <Anchor id={PROJECTS} top={-125} />
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
          onClick={openLightbox}
          margin={2}
          direction={width < 768 ? 'column' : 'row'}
        />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  src: `${x.src}.jpg`,
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
