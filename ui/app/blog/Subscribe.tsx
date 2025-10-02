'use client'

import { FONT_SIZES, FONT_WEIGHTS, SPACING } from '@/lib/styles/consts'
import { useState } from 'react'
import styled from 'styled-components'
import Button from '../_sharedComponents/Button'
import { Input } from '../_sharedComponents/Input'

const Wrapper = styled.div`
  margin-bottom: ${SPACING.MEDIUM};
  padding: ${SPACING.XSMALL};
  background-color: var(--bright-background);
  display: flex;
  flex-direction: row;
  gap: ${SPACING.SMALL};
  align-items: center;
  justify-content: center;

  a,
  input,
  button {
    height: 36px;
    font-size: ${FONT_SIZES.SMALL};
    margin: 0;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    gap: ${SPACING.XSMALL};
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
`

const Subscribe = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    window.open('https://buttondown.com/tbumgarner', 'popupwindow')
  }

  return (
    <Wrapper>
      <RSSLink href="/rss.xml" target="_blank" rel="noopener noreferrer">
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
        <span>RSS</span>
      </RSSLink>
      <p>Or</p>
      <Form
        action="https://buttondown.com/api/emails/embed-subscribe/tbumgarner"
        method="post"
        target="popupwindow"
        onSubmit={handleSubmit}
        className="embeddable-buttondown-form"
      >
        <Input
          placeholder="Email"
          type="email"
          name="email"
          id="bd-email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ borderRadius: 0 }}
        />
        <Button
          style={{ padding: `0 8px` }}
          type="submit"
          disabled={email.length === 0}
        >
          Subscribe
        </Button>
      </Form>
    </Wrapper>
  )
}

const RSSLink = styled.a`
  background-color: var(--secondary-background);
  width: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${SPACING.XSMALL};
  border: 0;
  color: var(--primary);
  text-decoration: none;
  font-weight: ${FONT_WEIGHTS.REGULAR};
  &:hover {
    text-decoration: underline;
  }
`

export default Subscribe
