'use client'

import { Box, Typography } from '@mui/material'
import { useSearchParams } from 'next/navigation'
import ContactForm from '../../lib/sharedComponents/ContactForm'

const Contact = () => {
  const searchParams = useSearchParams()
  const rawSubject = searchParams.get('subject')
  const subject = rawSubject ? rawSubject.replace(/[^a-zA-Z0-9 :]/g, '').slice(0, 100) : undefined

  return (
    <Box>
      <Typography variant="h2">Let&apos;s Chat</Typography>
      <ContactForm subject={subject} />
    </Box>
  )
}

export default Contact
