import React, { useState, Fragment } from 'react'
import styled from 'styled-components/macro'
import CertIcon from '~/views/components/common/CertIcon'
import { CERTIFICATIONS } from '~/consts/pages'
import { CERT_ACTIVE_ITEM } from '~/consts/certification'
import PropTypes from 'prop-types'
import Container from '~/views/components/common/Container'
import Header from '~/views/components/common/Header'
import { Translate } from 'react-localize-redux'

const Certification = () => {
  const [itemSelected, setSelectedItem] = useState(CERT_ACTIVE_ITEM[0])

  return (
    <Container id={CERTIFICATIONS}>
      <div className="container">
        <Header>
          <h2>Certifications and Prizes</h2>
        </Header>
        <List className="certification">
          <Research
            itemSelected={itemSelected}
            setSelectedItem={setSelectedItem}
            title="CertResearch"
            content="CertContentResearch"
          />
          <Develop
            itemSelected={itemSelected}
            setSelectedItem={setSelectedItem}
            title="CertDevelop"
            content="CertContentDevelop"
          />
          <Deploy
            itemSelected={itemSelected}
            setSelectedItem={setSelectedItem}
            title="CertDeploy"
            content="CertContentDeploy"
          />
          <Deliver
            itemSelected={itemSelected}
            setSelectedItem={setSelectedItem}
            title="CertDeliver"
            content="CertContentDeliver"
          />
        </List>
      </div>
    </Container>
  )
}

export default Certification

const Research = ({ itemSelected, setSelectedItem, title, content }) => {
  return (
    <Fragment>
      <ResearchItem onClick={() => setSelectedItem(CERT_ACTIVE_ITEM[0])}>
        <CertIcon
          id={CERT_ACTIVE_ITEM[0]}
          itemSelected={itemSelected}
          name="c"
        />
      </ResearchItem>

      <ResearchInfo itemSelected={itemSelected}>
        <Title>
          <span>1</span> &mdash; <Translate id={title} />
        </Title>
        <p>
          <Translate id={content} />
        </p>
      </ResearchInfo>
    </Fragment>
  )
}

const Develop = ({ itemSelected, setSelectedItem, title, content }) => {
  return (
    <Fragment>
      <DevelopItem onClick={() => setSelectedItem(CERT_ACTIVE_ITEM[1])}>
        <CertIcon
          id={CERT_ACTIVE_ITEM[1]}
          itemSelected={itemSelected}
          name="c"
        />
      </DevelopItem>

      <DevelopInfo itemSelected={itemSelected}>
        <Title>
          <span>2</span> &mdash; <Translate id={title} />
        </Title>
        <p>
          <Translate id={content} />
        </p>
      </DevelopInfo>
    </Fragment>
  )
}

const Deploy = ({ itemSelected, setSelectedItem, title, content }) => {
  return (
    <Fragment>
      <DeployItem onClick={() => setSelectedItem(CERT_ACTIVE_ITEM[2])}>
        <CertIcon
          id={CERT_ACTIVE_ITEM[2]}
          itemSelected={itemSelected}
          name="p"
        />
      </DeployItem>

      <DeployInfo itemSelected={itemSelected}>
        <Title>
          <span>3</span> &mdash; <Translate id={title} />
        </Title>
        <p>
          <Translate id={content} />
        </p>
      </DeployInfo>
    </Fragment>
  )
}

const Deliver = ({ itemSelected, setSelectedItem, title, content }) => {
  return (
    <Fragment>
      <DeliverItem onClick={() => setSelectedItem(CERT_ACTIVE_ITEM[3])}>
        <CertIcon
          id={CERT_ACTIVE_ITEM[3]}
          itemSelected={itemSelected}
          name="p"
        />
      </DeliverItem>

      <DeliverInfo itemSelected={itemSelected}>
        <Title>
          <span>4</span> &mdash; <Translate id={title} />
        </Title>
        <p>
          <Translate id={content} />
        </p>
      </DeliverInfo>
    </Fragment>
  )
}

Research.propTypes = {
  itemSelected: PropTypes.any,
  setSelectedItem: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string
}

Develop.propTypes = {
  itemSelected: PropTypes.any,
  setSelectedItem: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string
}

Deploy.propTypes = {
  itemSelected: PropTypes.any,
  setSelectedItem: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string
}

Deliver.propTypes = {
  itemSelected: PropTypes.any,
  setSelectedItem: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.string
}

const List = styled.ul`
  position: relative;
  list-style-type: none;
  height: 360px;
`

const Item = styled.li`
  position: absolute;
  top: 0;
  display: block;
  width: 25%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0);
  background-repeat: repeat;
  margin-left: -12.5%;
`

const ResearchItem = styled(Item)`
  left: 0%;
  margin-left: 0%;
  z-index: 40;
`

const DevelopItem = styled(Item)`
  left: 37.5%;
  z-index: 30;
`

const DeployItem = styled(Item)`
  left: 62.5%;
  z-index: 20;
`

const DeliverItem = styled(Item)`
  left: 87.5%;
  z-index: 10;
`

const Info = styled.li`
  position: absolute;
  top: 180px;
  left: 0;
  z-index: -1;
  display: block;
  width: 100%;
  margin: 40px 0 50px;
  padding: 10px;
  background-color: ${props => props.theme.colors.colorLight};
  border-top: 10px solid ${props => props.theme.colors.colorAccent};
  box-shadow: 2px 2px 4px -2px ${props => props.theme.colors.colorDark};

  @media screen and (max-width: 800px) {
    top: 160px;
  }

  @media screen and (max-width: 600px) {
    top: 140px;
  }

  @media screen and (max-width: 480px) {
    top: 120px;
  }

  &::before {
    content: '';
    position: absolute;
    top: -40px;
    margin-left: -40px;
    border-bottom: 40px solid ${props => props.theme.colors.colorAccent};
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
  }

  &::after {
    content: '';
    position: absolute;
    top: -25px;
    margin-left: -27px;
    border-bottom: 27px solid ${props => props.theme.colors.colorLight};
    border-left: 27px solid transparent;
    border-right: 27px solid transparent;
  }
`

const ResearchInfo = styled(Info)`
  visibility: ${props =>
    props.itemSelected == CERT_ACTIVE_ITEM[0] ? 'visible' : 'hidden'};

  &::before,
  &::after {
    left: 12.5%;
  }
`

const DevelopInfo = styled(Info)`
  visibility: ${props =>
    props.itemSelected == CERT_ACTIVE_ITEM[1] ? 'visible' : 'hidden'};

  &::before,
  &::after {
    left: 37.5%;
  }
`

const DeployInfo = styled(Info)`
  visibility: ${props =>
    props.itemSelected == CERT_ACTIVE_ITEM[2] ? 'visible' : 'hidden'};

  &::before,
  &::after {
    left: 62.5%;
  }
`

const DeliverInfo = styled(Info)`
  visibility: ${props =>
    props.itemSelected == CERT_ACTIVE_ITEM[3] ? 'visible' : 'hidden'};

  &::before,
  &::after {
    left: 87.5%;
  }
`

const Title = styled.h3`
  margin-bottom: 10px;

  & span {
    color: ${props => props.theme.colors.colorDarken};
  }
`
