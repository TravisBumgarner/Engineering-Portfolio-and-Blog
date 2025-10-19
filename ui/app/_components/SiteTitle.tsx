'use client'

import { ABOUT_ME_SENTENCE_1, ABOUT_ME_SENTENCE_2 } from '@/lib/consts'
import Link from 'next/link'
import Weak from '../../lib/sharedComponents/Weak'
import styled from 'styled-components'
import { FONT_SIZES, FONT_WEIGHTS, SPACING } from '@/lib/styles/consts'

const SiteTitle = ({ title }: { title: string }) => {
  return (
    <Wrapper>
      <Link href="/">
        <h1>{title}</h1>
      </Link>
      <Weak text={ABOUT_ME_SENTENCE_1} />
      <Weak text={ABOUT_ME_SENTENCE_2} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: ${SPACING.LARGE} 0;

  @media (max-width: 768px) {
    margin-top: ${SPACING.SMALL};
  }

  a {
    text-decoration: none;
    color: var(--primary);
  }

  h1 {
    font-size: ${FONT_SIZES.LARGE};
    font-weight: ${FONT_WEIGHTS.BOLD};
    margin-bottom: ${SPACING.SMALL};

    @media (max-width: 768px) {
      font-size: ${FONT_SIZES.MEDIUM};
    }
  }
`

export default SiteTitle
