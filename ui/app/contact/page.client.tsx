'use client'

import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'

const Form = styled.form`
  display: flex;
  flex-direction: column;
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
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
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
    <div id="contact">
      <h2>Contact</h2>
      <Form onSubmit={handleSubmit}>
        <input
          placeholder="Name (Optional)"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          placeholder="Email (Optional)"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
        />
        <textarea
          placeholder="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
        />
        <button
          type="submit"
          disabled={isSubmitting || formData.message.length === 0}
        >
          {buttonText}
        </button>
      </Form>
    </div>
  )
}

export default Contact
