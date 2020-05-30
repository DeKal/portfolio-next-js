import React from 'react'
import styled from 'styled-components/macro'
import GoTop from '~/modules/home/components/footer/GoTop'
import { Container, Row, Col } from 'react-bootstrap'
import { FaGithub } from 'react-icons/fa'

const Footer = () => (
  <FooterContainer>
    <Container>
      <Row>
        <Col md={4} xs={4}>
          <CopyRight>
            &copy;&nbsp;<Bold>Phat Ho</Bold>
          </CopyRight>
        </Col>
        <Col
          md={{ span: 4, offset: 4 }}
          xs={{ span: 4, offset: 4 }}
          className="d-flex justify-content-end"
        >
          <GitLogo href="https://github.com/DeKal/portfolio-next-js">
            <FaGithub size="40px"></FaGithub>
          </GitLogo>
        </Col>
        <GoTop />
      </Row>
    </Container>
  </FooterContainer>
)

export default Footer

const FooterContainer = styled.footer`
  position: relative;
  z-index: 100;
  width: 100%;
  background-color: ${props => props.theme.colors.colorAccent};
  color: ${props => props.theme.colors.colorLight};
  box-shadow: 0 -2px 2px -1px ${props => props.theme.colors.colorAccent};
  height: ${props => props.theme.footerHeight};

  &::before {
    content: '';
    position: absolute;
    top: -30px;
    left: 50%;
    margin-left: -40px;
    border-bottom: 40px solid ${props => props.theme.colors.colorAccent};
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
  }
`

const CopyRight = styled.p`
  margin-left: 10px;
  padding-top: 10px;
  float: left;
  line-height: 40px;

  @media screen and (max-width: 600px) {
    padding-top: 20px;
    line-height: 1;
    float: none;
    text-align: center;
  }
`

const Bold = styled.span`
  font-weight: bold;
`

const GitLogo = styled.a`
  color: ${props => props.theme.colors.colorLight};
  padding-top: 5px;
  border: none;

  &:hover {
    color: ${props => props.theme.colors.colorDark};
    text-decoration: none;
  }

  &:active {
    color: ${props => props.theme.colors.colorDark};
  }
`
