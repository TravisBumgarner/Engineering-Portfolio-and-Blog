'use client'

import { BORDER_COLOR, CSSHover } from '@/lib/theme'
import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Input = styled.input`
  background-color: ${BORDER_COLOR};
  padding: 0.5rem;
  border: 0;
`

const TextArea = styled.textarea`
  background-color: ${BORDER_COLOR};
  padding: 0.5rem;
  border: 0;
  min-height: 100px;
`

const SubmitButton = styled.button<{ $disabled?: boolean }>`
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: none;
  cursor: ${props => (props.$disabled ? 'not-allowed' : 'pointer')};
  font-weight: 700;
  font-style: italic;
  font-size: 1rem;
  text-decoration: underline;
  opacity: ${props => (props.$disabled ? 0.5 : 1)};

  ${CSSHover}
`

const Contact = () => {
  const [success, setSuccess] = useState(false)
  const [failure, setFailure] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    website: 'engineering-portfolio-and-blog'
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    const response = await fetch('https://contact-form.nfshost.com/contact', {
      method: 'POST',
      body: JSON.stringify(formData)
    })
    if (response.ok) {
      setSuccess(true)
      setFormData(prev => ({
        ...prev,
        ...{
          name: '',
          email: '',
          message: ''
        }
      }))
    } else {
      setFailure(true)
    }
    setIsSubmitting(false)
  }

  const resetButtonText = useCallback(() => {
    setTimeout(() => {
      setSuccess(false)
      setFailure(false)
    }, 3_000)
  }, [])

  const buttonText = useMemo(() => {
    if (isSubmitting) {
      return 'Sending...'
    }
    if (success) {
      resetButtonText()
      return 'Message sent!'
    }
    if (failure) {
      resetButtonText()
      return 'Failed to send message.'
    }
    return 'Send'
  }, [isSubmitting, success, failure, resetButtonText])

  return (
    <Wrapper>
      <h1>Contact</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Name (Optional)"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <Input
          placeholder="Email (Optional)"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
        />
        <TextArea
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <SubmitButton
          $disabled={isSubmitting || formData.message.length === 0}
          type="submit"
          disabled={isSubmitting || formData.message.length === 0}
        >
          {buttonText}
        </SubmitButton>
      </Form>
    </Wrapper>
  )
}

export default Contact
