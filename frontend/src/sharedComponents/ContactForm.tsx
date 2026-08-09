import { Input } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import type React from 'react'
import { useCallback, useMemo, useState } from 'react'
import { SPACING } from '../styles/consts'

const MAX_LENGTH = 800

// Good enough to catch typos and empty submissions. Real validation happens on the server.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * `requireEmail` is for pages where a message I can't reply to is a dropped lead
 * (hiring, project inquiries). Feedback forms on the marketing pages leave it off.
 */
const ContactForm = ({ subject, requireEmail = false }: { subject?: string; requireEmail?: boolean }) => {
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

  const isEmailValid = EMAIL_REGEX.test(formData.email)
  const showEmailError = requireEmail && formData.email.length > 0 && !isEmailValid
  const canSubmit = formData.message.length > 0 && (!requireEmail || isEmailValid)

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
        <Input
          fullWidth
          placeholder={requireEmail ? 'Name' : 'Name (Optional)'}
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: SPACING.TINY.PX }}>
          <Input
            fullWidth
            placeholder={requireEmail ? 'Email (so I can reply)' : 'Email (Optional)'}
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            required={requireEmail}
            error={showEmailError}
          />
          {showEmailError && (
            <Typography variant="body2" sx={{ m: 0 }}>
              That doesn&apos;t look like a valid email address.
            </Typography>
          )}
        </Box>
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
        <Button variant="contained" type="submit" disabled={isSubmitting || !canSubmit}>
          {buttonText}
        </Button>
      </form>
    </Box>
  )
}

export default ContactForm
