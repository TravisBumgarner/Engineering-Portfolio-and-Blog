'use client'

import { FONT_SIZES, FONT_WEIGHTS, SPACING } from '@/lib/styles/consts'
import { useState } from 'react'
import styled from 'styled-components'

const SubWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${SPACING.SMALL};
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${SPACING.XSMALL};
  }

  a {
    width: 120px;
  }
`

const Wrapper = styled.div`
  margin-bottom: ${SPACING.MEDIUM};
  padding: ${SPACING.MEDIUM};
  background-color: var(--bright-background);

  h2 {
    font-size: ${FONT_SIZES.LARGE};
    font-weight: ${FONT_WEIGHTS.BOLD};
    margin-top: 0;
    margin-bottom: ${SPACING.SMALL};
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: row;
  gap: ${SPACING.SMALL};
  width: 100%;
  input {
    flex-grow: 1;
  }

  @media (max-width: 768px) {
    input,
    button {
      font-size: ${FONT_SIZES.SMALL};
      padding: ${SPACING.XSMALL};
    }
  }
`

const Subscribe = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    window.open('https://buttondown.com/tbumgarner', 'popupwindow')
  }

  return (
    <Wrapper>
      <h2>Subscribe</h2>
      <SubWrapper>
        <a
          className="rss"
          href="/rss.xml"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            style={{ position: 'relative', top: '2px' }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="rss-icon"
          >
            <path d="M4 11a9 9 0 0 1 9 9" />
            <path d="M4 4a16 16 0 0 1 16 16" />
            <circle cx="5" cy="19" r="1" />
          </svg>
          <span style={{ position: 'relative', top: '-3px', left: '5px' }}>
            RSS
          </span>
        </a>
        <p>Or</p>
        <Form
          action="https://buttondown.com/api/emails/embed-subscribe/tbumgarner"
          method="post"
          target="popupwindow"
          onSubmit={handleSubmit}
          className="embeddable-buttondown-form"
        >
          <input
            placeholder="Email"
            type="email"
            name="email"
            id="bd-email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ borderRadius: 0 }}
          />
          <button type="submit" disabled={email.length === 0}>
            Submit
          </button>
        </Form>
      </SubWrapper>
    </Wrapper>
  )
}

export default Subscribe
