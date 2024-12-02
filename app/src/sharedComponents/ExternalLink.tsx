import styled from 'styled-components'

import { CSSHover, CSSTransition, TERTIARY_COLOR } from 'Theme'

const ExternalLinkWrapper = styled.a`
  text-decoration-color: ${TERTIARY_COLOR};
  text-decoration: underline;
  ${CSSHover};
  ${CSSTransition};
  font-family: Raleway, sans-serif;
  &:visited {
    color: ${TERTIARY_COLOR};
  }
`

type ExternalLinkProps = {
  children: React.ReactNode
  href: string
}

const ExternalLink = ({ children, href }: ExternalLinkProps) => {
  return (
    <ExternalLinkWrapper target="_blank" href={href}>
      {children}
    </ExternalLinkWrapper>
  )
}

export default ExternalLink
