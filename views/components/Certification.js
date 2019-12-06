import * as React from 'react'
import styled from 'styled-components/macro'

const Certification = () => (
  <section className="common-section" id="process">
    <div className="container">
      <header className="common-section__header">
        <h2>Certifications and Prizes</h2>
        <h4></h4>
      </header>
      <div className="grid-container">
        <List className="certification">
          <Step>
            <Research>
              <Icons />
            </Research>
          </Step>
          <Info is-active>
            <ResearchInfo>
              <Header>
                <spana>1</spana>
                &mdash;Bachelor of Science
              </Header>
              <p>
                Graduating from HCM University of Science, Advanced Program in
                Computer Science.
              </p>
            </ResearchInfo>
          </Info>
        </List>
      </div>
    </div>
  </section>
)

const List = styled.ul`
  position: relative;
  list-style-type: none;
  height: 360px;
`

const Step = styled.li`
  position: absolute;
  top: 0;
  display: block;
  width: 25%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0);
  background-repeat: repeat;
`

const Research = styled.li`
  left: 0%;
  z-index: 40;
`

const Icons = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  display: block;
  width: 180px;
  height: 180px;
  margin-left: -90px;
  text-align: center;
  background-color: ${props => props.theme.colors.colorLight};
  border: 1px solid darken(${props => props.theme.colors.colorLight}, 5%);
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
    font-size: 80px;
    line-height: 180px;
    color: darken(${props => props.theme.colors.colorLight}, 5%);
    text-shadow: -1px -1px 0 ${props => props.theme.colors.colorDark},
      0 -1px 0 ${props => props.theme.colors.colorDark},
      1px -1px 0 ${props => props.theme.colors.colorDark},
      1px 0 0 ${props => props.theme.colors.colorDark},
      1px 1px 0 ${props => props.theme.colors.colorDark},
      0 1px 0 ${props => props.theme.colors.colorDark},
      -1px 1px 0 ${props => props.theme.colors.colorDark},
      -1px 0 0 ${props => props.theme.colors.colorDark};
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

  &.is-active {
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
`

const ResearchInfo = styled.li`
  visibility: hidden;
`

const Header = styled.h3`
  margin-bottom: 10px & span {
    color: ${props => props.theme.colors.colorDarken};
  }
`

export default Certification
