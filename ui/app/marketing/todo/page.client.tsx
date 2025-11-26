'use client'

import BlurHashImage from '@/lib/sharedComponents/BlurHashImage'
import ContactForm from '@/lib/sharedComponents/ContactForm'
import { Box, List, ListItem } from '@mui/material'
import { SPACING } from '@/lib/styles/consts'
import Link from 'next/dist/client/link'
import { FaApple, FaGithub } from 'react-icons/fa'
import Image from 'next/image'
import { Typography } from '@mui/material'

const MAC_DOWNLOAD =
  'https://github.com/TravisBumgarner/Todo-Today/releases/download/v3.0.0/Todo.Today-3.0.0-arm64.dmg'

const GITHUB = 'https://github.com/travisBumgarner/todo-Today'

type UpdateType = 'add' | 'update' | 'fix'
type Update = {
  title: string
  date: string
  updates: Record<UpdateType, string[]>
}

const LABELS: Record<UpdateType, string> = {
  add: 'Add',
  update: 'Update',
  fix: 'Fix'
}

const UPDATES: Update[] = [
  {
    title: 'Oh hey, another almost full rewrite',
    date: '2025-10-11',
    updates: {
      add: [],
      update: ['Update all dependencies and deployments to latest versions'],
      fix: []
    }
  },
  {
    title: 'Full Rewrite',
    date: '2025-01-26',
    updates: {
      add: ['Complete rewrite of Todo Today from the ground up'],
      update: [
        'Simplified focus on daily task management',
        'Removed timers, history, successes, workspaces, and other distracting features'
      ],
      fix: [
        'Removed timers, history, successes, workspaces, and other distracting features'
      ]
    }
  },
  {
    title: 'Workspaces',
    date: '2024-09-25',
    updates: {
      add: ['Support for grouping tasks into workspaces'],
      update: [],
      fix: []
    }
  },
  {
    title: 'Windows Support',
    date: '2024-07-05',
    updates: {
      add: ['Support for Windows automatic updates'],
      update: [],
      fix: []
    }
  },
  {
    title: 'Notifications and Timers',
    date: '2023-10-08',
    updates: {
      add: ['Timer for tasks and notification system'],
      update: [],
      fix: []
    }
  },
  {
    title: 'Initial Release',
    date: '2023-10-06',
    updates: {
      add: [
        'App has been in beta testing for almost a year and is now ready for release!'
      ],
      update: [],
      fix: []
    }
  }
]

const UpdateComponent = ({ title, date, updates }: Update) => {
  // Flatten updates to a single array of { type, text }
  const flatUpdates: { type: UpdateType; text: string }[] = []
    ; (['add', 'update', 'fix'] as UpdateType[]).forEach((type: UpdateType) => {
      updates[type].forEach((text: string) => {
        flatUpdates.push({ type, text })
      })
    })

  return (
    <Box>
      <Typography>
        <strong>{title}</strong>
      </Typography>
      <Typography>
        <time>{date}</time>
      </Typography>
      <List>
        {flatUpdates.map((item, idx) => (
          <ListItem key={item.type + item.text + idx}>
            {LABELS[item.type]}: {item.text}
          </ListItem>
        ))}
      </List>
    </Box>
  )
}

const TodoToday = () => {
  return (
    <Box>
      <Box>
        <Box
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: SPACING.SMALL.PX
          }}
        >
          <Box>
            <Image
              src="/marketing-resources/todo_today/favicon.png"
              alt="App Screenshot"
              width={100}
              height={100}
            />
          </Box>
          <Box>
            <Typography variant="h2">Todo Today</Typography>
            <Typography>The todo List for the easily distracted</Typography>
          </Box>
        </Box>
      </Box>
      <Typography>
        Todo Today isn&apos;t about the past or the future, it&apos;s about
        right now. Focus on what matters today. Set your tasks, order them, and
        add notes or subtasks. Nothing more, nothing less.
      </Typography>

      <BlurHashImage
        src="/marketing-resources/todo_today/main_page.png"
        priority={true}
      />

      <Typography variant="h3">Release Notes</Typography>
      {UPDATES.map(update => (
        <UpdateComponent key={update.title + update.date} {...update} />
      ))}

      <Typography variant="h3">Contact</Typography>
      <ContactForm subject="Todo Today Feedback" />
      <Box style={{ height: SPACING.HUGE.PX }} />

      <Box
        style={{
          position: 'fixed',
          top: 10,
          right: 10,
          fontSize: 12,
          color: '#888'
        }}
      >
        <Link style={{ fontSize: '30px' }} href={MAC_DOWNLOAD} download>
          <FaApple size={40} />
        </Link>
        <Link style={{ fontSize: '30px' }} href={GITHUB} download>
          <FaGithub size={40} />
        </Link>
      </Box>
    </Box>
  )
}

export default TodoToday
