'use client'

import { SPACING } from '@/lib/styles/consts'
import { SHARED_SPACING } from '@/lib/styles/theme'
import styled from 'styled-components'
import Contact from './components/Contact'

const WorkWithMe = () => {
  return (
    <div id="work">
      <h2>Bring your Prototype to Life</h2>
      <Section>
        <h3>App or Website?</h3>
        <p>Ideas Down</p>
        <p>Seis Colores</p>
        <p>Photo Palettes</p>
        <p>All sites planned, designed, developed by myself</p>
      </Section>

      <Section>
        <h3>Need a physical prototype?</h3>
        <p>Pixels 64</p>
        <p>Painless Prototyping</p>
      </Section>

      <Section>
        <h3>Let's Connect</h3>
      </Section>
      <Contact />
    </div>
  )
}

const Section = styled.div`
  ${SHARED_SPACING}
  display: flex;
  background-color: var(--secondary-background);
  color: var(--foreground);
  flex-direction: column;
  text-decoration: none;
  margin-bottom: ${SPACING.LARGE};
`

export default WorkWithMe
