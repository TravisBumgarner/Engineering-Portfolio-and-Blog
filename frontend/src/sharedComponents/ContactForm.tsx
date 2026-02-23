import { Input } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import type React from 'react'
import { useCallback, useMemo, useState } from 'react'
import { SPACING } from '../styles/consts'

const MAX_LENGTH = 800

const ContactForm = ({ subject }: { subject?: string }) => {
  const [success, setSuccess] = useState(false)
  const [failure, setFailure] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    subject: subject || '',
    website: 'engineering-portfolio-and-blog',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.name === 'message' && e.target.value.length > MAX_LENGTH) {
      return
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    const response = await fetch('https://contact-form.nfshost.com/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (response.ok) {
      setSuccess(true)
      setFormData((prev) => ({
        ...prev,
        ...{
          name: '',
          email: '',
          message: '',
          subject: '',
        },
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
    <Box id="contact">
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: SPACING.MEDIUM.PX,
          width: '100%',
        }}
        onSubmit={handleSubmit}
      >
        <Input fullWidth placeholder="Name (Optional)" name="name" value={formData.name} onChange={handleChange} />
        <Input
          fullWidth
          placeholder="Email (Optional)"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
        />
        <Input fullWidth placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: SPACING.TINY.PX }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Typography sx={{ padding: 0, margin: 0 }}>{`${formData.message.length}/${MAX_LENGTH}`}</Typography>
          </Box>
          <Input
            multiline
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            fullWidth
          />
        </Box>
        <Button variant="contained" type="submit" disabled={isSubmitting || formData.message.length === 0}>
          {buttonText}
        </Button>
      </form>
    </Box>
  )
}

export default ContactForm
