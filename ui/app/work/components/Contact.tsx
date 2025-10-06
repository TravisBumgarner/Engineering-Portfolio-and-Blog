'use client'

import Button from '@/app/_sharedComponents/Button'
import { Input, TextArea } from '@/app/_sharedComponents/Input'
import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'

const MAX_LENGTH = 800

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
    if (e.target.name === 'message' && e.target.value.length > MAX_LENGTH) {
      return
    }

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

  const canSubmit =
    formData.email.length > 0 &&
    formData.message.length > 0 &&
    formData.name.length > 0

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <Input
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        type="email"
      />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <p>{`${formData.message.length}/${MAX_LENGTH}`}</p>
      </div>
      <TextArea
        placeholder="Message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={4}
      />
      <Button type="submit" disabled={isSubmitting || !canSubmit}>
        {buttonText}
      </Button>
    </Form>
  )
}

export default Contact
