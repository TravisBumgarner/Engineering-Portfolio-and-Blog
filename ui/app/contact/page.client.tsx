'use client'

import React from 'react'
import ContentStyler from '../../lib/sharedComponents/ContentStyler'
import ContactForm from '../../lib/sharedComponents/ContactForm'
import { useSearchParams } from 'next/navigation'

const Contact = () => {
  const searchParams = useSearchParams()
  const rawSubject = searchParams.get('subject')
  const subject = rawSubject
    ? rawSubject.replace(/[^a-zA-Z0-9 :]/g, '').slice(0, 100)
    : undefined

  return (
    <ContentStyler>
      <h2>Let&apos;s Chat</h2>
      <ContactForm subject={subject} />
    </ContentStyler>
  )
}

export default Contact
