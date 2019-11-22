import React from 'react'
import Link from 'next/link'
import styled from 'styled-components/macro'

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.positiveDark};
`

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <StyledLink>Home</StyledLink>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <StyledLink href={href}>{label}</StyledLink>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav
