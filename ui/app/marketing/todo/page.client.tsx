'use client'

import { Box, List, ListItem, Typography } from '@mui/material'
import { FaApple, FaGithub } from 'react-icons/fa'
import BlurHashImage from '@/lib/sharedComponents/BlurHashImage'
import ContactForm from '@/lib/sharedComponents/ContactForm'
import { SPACING } from '@/lib/styles/consts'
import Link from '../../../lib/sharedComponents/Link'
import MarketingHeader from '../../../lib/sharedComponents/MarketingHeader'
import { TODO_DESCRIPTION, TODO_FAVICON, TODO_TITLE } from '../classifieds/_consts'

const MAC_DOWNLOAD = 'https://github.com/TravisBumgarner/Todo-Today/releases/download/v3.0.0/Todo.Today-3.0.0-arm64.dmg'

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
  fix: 'Fix',
}

const UPDATES: Update[] = [
  {
    title: 'Oh hey, another almost full rewrite',
    date: '2025-10-11',
    updates: {
      add: [],
      update: ['Update all dependencies and deployments to latest versions'],
      fix: [],
    },
  },
  {
    title: 'Full Rewrite',
    date: '2025-01-26',
    updates: {
      add: ['Complete rewrite of Todo Today from the ground up'],
      update: [
        'Simplified focus on daily task management',
        'Removed timers, history, successes, workspaces, and other distracting features',
      ],
      fix: ['Removed timers, history, successes, workspaces, and other distracting features'],
    },
  },
  {
    title: 'Workspaces',
    date: '2024-09-25',
    updates: {
      add: ['Support for grouping tasks into workspaces'],
      update: [],
      fix: [],
    },
  },
  {
    title: 'Windows Support',
    date: '2024-07-05',
    updates: {
      add: ['Support for Windows automatic updates'],
      update: [],
      fix: [],
    },
  },
  {
    title: 'Notifications and Timers',
    date: '2023-10-08',
    updates: {
      add: ['Timer for tasks and notification system'],
      update: [],
      fix: [],
    },
  },
  {
    title: 'Initial Release',
    date: '2023-10-06',
    updates: {
      add: ['App has been in beta testing for almost a year and is now ready for release!'],
      update: [],
      fix: [],
    },
  },
]

const UpdateComponent = ({ title, date, updates }: Update) => {
  // Flatten updates to a single array of { type, text }
  const flatUpdates: { type: UpdateType; text: string }[] = []
  ;(['add', 'update', 'fix'] as UpdateType[]).forEach((type: UpdateType) => {
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
        {flatUpdates.map((item) => (
          <ListItem key={item.type + item.text}>
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
      <MarketingHeader src={TODO_FAVICON} title={TODO_TITLE} description={TODO_DESCRIPTION} />
      <Typography>
        <Link type="block" target="_blank" href={MAC_DOWNLOAD}>
          Download for Mac
        </Link>
      </Typography>

      <Typography>
        Todo Today isn&apos;t about the past or the future, it&apos;s about right now. Focus on what matters today. Set
        your tasks, order them, and add notes or subtasks. Nothing more, nothing less.
      </Typography>

      <BlurHashImage src="/marketing-resources/todo_today/main_page.png" priority={true} />

      <Typography variant="h3">Release Notes</Typography>
      {UPDATES.map((update) => (
        <UpdateComponent key={update.title + update.date} {...update} />
      ))}

      <Typography variant="h3">Contact</Typography>
      <ContactForm subject="Todo Today Feedback" />
      <Box style={{ height: SPACING.HUGE.PX }} />
    </Box>
  )
}

export default TodoToday
