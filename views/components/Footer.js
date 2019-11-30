import React from 'react'
import styled from 'styled-components/macro'
import GoTop from '~/views/components/footer/GoTop'

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <CopyRight>
        &copy;&nbsp;<Bold>Phat Ho</Bold>
      </CopyRight>
      <GoTop />
    </div>
  </FooterContainer>
)

export default Footer

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  background-color: ${props => props.theme.colors.colorAccent};
  color: ${props => props.theme.colors.colorLight};
  box-shadow: 0 -2px 2px -1px ${props => props.theme.colors.colorDark};
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
  font-weight: lighter;

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
