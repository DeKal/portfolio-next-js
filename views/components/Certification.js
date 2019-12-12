import React, { useState, Fragment } from 'react'
import styled from 'styled-components/macro'
import Icon from '~/views/components/common/Icon'
import { CERTIFICATIONS } from '~/consts/pages'
import { INIT_CERT_ACTIVE_ITEM } from '~/consts/initState'
import PropTypes from 'prop-types'

const Certification = () => {
  const [itemSelected, setSelectedItem] = useState(INIT_CERT_ACTIVE_ITEM[0])
  return (
    <Container id={CERTIFICATIONS}>
      <div className="container">
        <header className="common-section__header">
          <h2>Certifications and Prizes</h2>
          <h4></h4>
        </header>
        <div className="grid-container">
          <List className="certification">
            <Research
              itemSelected={itemSelected}
              setSelectedItem={setSelectedItem}
            />
            <Develop
              itemSelected={itemSelected}
              setSelectedItem={setSelectedItem}
            />
            <Deploy
              itemSelected={itemSelected}
              setSelectedItem={setSelectedItem}
            />
            <Deliver
              itemSelected={itemSelected}
              setSelectedItem={setSelectedItem}
            />
          </List>
        </div>
      </div>
    </Container>
  )
}

const Research = ({ itemSelected, setSelectedItem }) => {
  return (
    <Fragment>
      <ResearchItem onClick={() => setSelectedItem(INIT_CERT_ACTIVE_ITEM[0])}>
        <ItemIcon
          id={INIT_CERT_ACTIVE_ITEM[0]}
          itemSelected={itemSelected}
          name="c"
        />
      </ResearchItem>

      <ResearchInfo itemSelected={itemSelected}>
        <Header>
          <span>1</span> &mdash; Bachelor of Science
        </Header>
        <p>
          Graduating from HCM University of Science, Advanced Program in
          Computer Science.
        </p>
      </ResearchInfo>
    </Fragment>
  )
}

const Develop = ({ itemSelected, setSelectedItem }) => {
  return (
    <Fragment>
      <DevelopItem onClick={() => setSelectedItem(INIT_CERT_ACTIVE_ITEM[1])}>
        <ItemIcon
          id={INIT_CERT_ACTIVE_ITEM[1]}
          itemSelected={itemSelected}
          name="c"
        />
      </DevelopItem>

      <DevelopInfo itemSelected={itemSelected}>
        <Header>
          <span>2</span> &mdash; Communicative Certification: TOEFL ibt 85 pts
        </Header>
        <p>
          The TOEFL iBT® test measures your ability to use and understand
          English at the university level. And it evaluates how well you combine
          your reading, listening, speaking and writing skills to perform
          academic tasks.
        </p>
      </DevelopInfo>
    </Fragment>
  )
}

const Deploy = ({ itemSelected, setSelectedItem }) => {
  return (
    <Fragment>
      <DeployItem onClick={() => setSelectedItem(INIT_CERT_ACTIVE_ITEM[2])}>
        <ItemIcon
          id={INIT_CERT_ACTIVE_ITEM[2]}
          itemSelected={itemSelected}
          name="p"
        />
      </DeployItem>

      <DeployInfo itemSelected={itemSelected}>
        <Header>
          <span>3</span> &mdash; Second place
        </Header>
        <p>
          Got second prize for the competitive algorithm contest of the
          university
        </p>
      </DeployInfo>
    </Fragment>
  )
}

const Deliver = ({ itemSelected, setSelectedItem }) => {
  return (
    <Fragment>
      <DeliverItem onClick={() => setSelectedItem(INIT_CERT_ACTIVE_ITEM[3])}>
        <ItemIcon
          id={INIT_CERT_ACTIVE_ITEM[3]}
          itemSelected={itemSelected}
          name="p"
        />
      </DeliverItem>

      <DeliverInfo itemSelected={itemSelected}>
        <Header>
          <span>4</span> &mdash; First place
        </Header>
        <p>
          Highschool, got First prize for the competitive algorithm contest of
          the city.
        </p>
      </DeliverInfo>
    </Fragment>
  )
}

const ItemIcon = ({ id, itemSelected, name }) => {
  return itemSelected == id ? (
    <ActiveIcon name={name} />
  ) : (
    <InactiveIcon name={name} />
  )
}

Research.propTypes = {
  itemSelected: PropTypes.any,
  setSelectedItem: PropTypes.func
}

Develop.propTypes = {
  itemSelected: PropTypes.any,
  setSelectedItem: PropTypes.func
}

Deploy.propTypes = {
  itemSelected: PropTypes.any,
  setSelectedItem: PropTypes.func
}

Deliver.propTypes = {
  itemSelected: PropTypes.any,
  setSelectedItem: PropTypes.func
}

ItemIcon.propTypes = {
  id: PropTypes.number,
  itemSelected: PropTypes.any,
  name: PropTypes.string
}

const Container = styled.section``

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

const CertIcon = styled(Icon)`
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: 180px;
  height: 180px;
  margin-left: -90px;
  text-align: center;
  background-color: ${props => props.theme.colors.colorLight};
  border: 1px solid ${props => props.theme.colors.colorLight};
  border-radius: 50%;
  box-shadow: 3px 4px 8px -4px ${props => props.theme.colors.colorDark};
  transition: all 0.5s;

  @media screen and (max-width: 800px) {
    width: 160px;
    height: 160px;
    margin-left: -80px;
  }

  @media screen and (max-width: 600px) {
    width: 140px;
    height: 140px;
    margin-left: -70px;
  }

  @media screen and (max-width: 480px) {
    width: 120px;
    height: 120px;
    margin-left: -60px;
  }

  &::before {
    font-family: ${props => props.theme.fonts.fontCert};
    font-style: normal;
    font-weight: normal;
    font-size: 80px;
    line-height: 180px;
    color: ${props => props.theme.colors.colorLight};
    cursor: default;
    transition: all 0.5s;

    @media screen and (max-width: 800px) {
      font-size: 70px;
      line-height: 160px;
    }

    @media screen and (max-width: 600px) {
      font-size: 70px;
      line-height: 140px;
    }

    @media screen and (max-width: 480px) {
      font-size: 60px;
      line-height: 120px;
    }
  }
`

const InactiveIcon = styled(CertIcon)`
  &::before {
    text-shadow: -1px -1px 0 ${props => props.theme.colors.colorDark},
      0 -1px 0 ${props => props.theme.colors.colorDark},
      1px -1px 0 ${props => props.theme.colors.colorDark},
      1px 0 0 ${props => props.theme.colors.colorDark},
      1px 1px 0 ${props => props.theme.colors.colorDark},
      0 1px 0 ${props => props.theme.colors.colorDark},
      -1px 1px 0 ${props => props.theme.colors.colorDark},
      -1px 0 0 ${props => props.theme.colors.colorDark};
  }
`

const ActiveIcon = styled(CertIcon)`
  border-color: ${props => props.theme.colors.colorAccent};

  &::before {
    text-shadow: -1px -1px 0 ${props => props.theme.colors.colorAccent},
      0 -1px 0 ${props => props.theme.colors.colorAccent},
      1px -1px 0 ${props => props.theme.colors.colorAccent},
      1px 0 0 ${props => props.theme.colors.colorAccent},
      1px 1px 0 ${props => props.theme.colors.colorAccent},
      0 1px 0 ${props => props.theme.colors.colorAccent},
      -1px 1px 0 ${props => props.theme.colors.colorAccent},
      -1px 0 0 ${props => props.theme.colors.colorAccent};
  }
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
    props.itemSelected == INIT_CERT_ACTIVE_ITEM[0] ? 'visible' : 'hidden'};

  &::before,
  &::after {
    left: 12.5%;
  }
`

const DevelopInfo = styled(Info)`
  visibility: ${props =>
    props.itemSelected == INIT_CERT_ACTIVE_ITEM[1] ? 'visible' : 'hidden'};

  &::before,
  &::after {
    left: 37.5%;
  }
`

const DeployInfo = styled(Info)`
  visibility: ${props =>
    props.itemSelected == INIT_CERT_ACTIVE_ITEM[2] ? 'visible' : 'hidden'};

  &::before,
  &::after {
    left: 62.5%;
  }
`

const DeliverInfo = styled(Info)`
  visibility: ${props =>
    props.itemSelected == INIT_CERT_ACTIVE_ITEM[3] ? 'visible' : 'hidden'};

  &::before,
  &::after {
    left: 87.5%;
  }
`

const Header = styled.h3`
  margin-bottom: 10px;

  & span {
    color: ${props => props.theme.colors.colorDarken};
  }
`

export default Certification
