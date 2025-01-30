'use client'

import ROUTES from '@/lib/routes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styled from 'styled-components'

const SidebarClient = () => {
  const pathname = usePathname()

  // const isActive = (route: string, exact?: boolean) => {
  //   if (exact) {
  //     return pathname === route
  //   }
  //   return pathname.includes(route)
  // }

  // const isSnapshotsActive = isActive(ROUTES.SNAPSHOTS.path, true)
  // const isCreationsActive = isActive(ROUTES.CREATIONS.path)
  // const isBlogActive = isActive(ROUTES.BLOG.path)
  // const isContactActive = isActive(ROUTES.CONTACT.path)

  return (
    <Wrapper>
      <h3>Here</h3>
      <ul>
        <li>
          <Link href={ROUTES.SNAPSHOTS.path}>
            {ROUTES.SNAPSHOTS.title}
          </Link>
        </li>
        <li>
          <Link href={ROUTES.CREATIONS.path}>
            {ROUTES.CREATIONS.title}
          </Link>
        </li>
        <li>
          <Link href={ROUTES.BLOG.path}>{ROUTES.BLOG.title}</Link>
        </li>
        <li>
          <Link href={ROUTES.CONTACT.path}>
            {ROUTES.CONTACT.title}
          </Link>
        </li>
      </ul>
      <h3>Elsewhere</h3>
      <ul>
        <li>
          <Link target="_blank" href="/travis_bumgarner_resume.pdf">
            Resume
          </Link>
        </li>
        <li>
          <Link target="_blank" href="https://www.linkedin.com/in/travisbumgarner/">
            LinkedIn
          </Link>
        </li>
        <li>
          <Link target="_blank" href="https://github.com/travisBumgarner/">
            Github
          </Link>
        </li>
        <li>
          <Link target="_blank" href="https://travisbumgarner.photography">
            Photography
          </Link>
        </li>
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: fixed;
  padding: 10px;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
`

export default SidebarClient
