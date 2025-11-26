'use client'

import { useState } from 'react'
import { Box, Link, Typography, Button, TextField } from '@mui/material'
import { SPACING, FONT_SIZES, FONT_WEIGHTS } from '@/lib/styles/consts'

export default function Subscribe() {
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    window.open('https://buttondown.com/tbumgarner', 'popupwindow')
  }

  return (
    <Box
      sx={{
        mb: SPACING.MEDIUM.PX,
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: SPACING.XSMALL.PX, sm: SPACING.SMALL.PX },
        alignItems: 'center',
        justifyContent: 'center',

        '& a, & input, & button': {
          height: 36,
          fontSize: FONT_SIZES.SMALL,
          m: 0,
        },
      }}
    >
      {/* RSS LINK */}
      <Link
        href="/rss.xml"
        target="_blank"
        rel="noopener noreferrer"
        underline="none"
        sx={{
          bgcolor: 'var(--secondary-background)',
          width: 120,
          display: 'flex',
          flexDirection: 'row',
          gap: SPACING.XSMALL.PX,
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--primary)',
          fontWeight: FONT_WEIGHTS.REGULAR,
          '&:hover': { textDecoration: 'underline' },
        }}
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
        >
          <path d="M4 11a9 9 0 0 1 9 9" />
          <path d="M4 4a16 16 0 0 1 16 16" />
          <circle cx="5" cy="19" r="1" />
        </svg>
        <span>RSS</span>
      </Link>

      <Typography>Or</Typography>

      {/* FORM */}
      <Box
        component="form"
        action="https://buttondown.com/api/emails/embed-subscribe/tbumgarner"
        method="post"
        target="popupwindow"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: SPACING.SMALL.PX,
          width: '100%',
        }}
        className="embeddable-buttondown-form"
      >
        <TextField
          placeholder="Email"
          type="email"
          name="email"
          id="bd-email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          fullWidth
          size="small"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: 0,
              height: 36,
            },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          disabled={email.length === 0}
        >
          Subscribe
        </Button>
      </Box>
    </Box>
  )
}
