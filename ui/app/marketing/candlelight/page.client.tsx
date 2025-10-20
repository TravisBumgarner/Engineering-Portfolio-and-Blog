'use client'

import ContentStyler from '@/lib/sharedComponents/ContentStyler'
import MarketingLink from '@/lib/sharedComponents/MarketingLink'
import { SPACING } from '@/lib/styles/consts'
import Image from 'next/image'

const CandlelightPage = () => {
  return (
    <ContentStyler>
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: SPACING.SMALL
          }}
        >
          <div>
            <Image
              src="/marketing-resources/candlelight/favicon.png"
              alt="App Screenshot"
              width={75}
              height={75}
            />
          </div>
          <div>
            <h2>Candlelight</h2>
            <p>A Puzzle Game of Shape, Color, and Alchemy</p>
          </div>
        </div>
      </div>

      <p>
        Candlelight is a puzzle game where each shape you place onto the grid
        inverts the color of the space it occupies. Every inversion offers the
        opportunity to alchemize a gem and advance.
      </p>

      <h3>Puzzle Mode</h3>
      <p>
        <strong>Solve puzzles using limited shapes.</strong>
      </p>
      <p>
        Complete 50 levels across 9 worlds, each challenging you to work with a
        limited number of shapes. Every move counts as you aim for the most
        efficient solution.
      </p>

      <h3>Free Play</h3>
      <p>
        <strong>Unwind and play at your own pace.</strong>
      </p>
      <p>
        There is no goal here, just relax, enjoy the music, and experiment with
        shapes to your heart&apos;s content.
      </p>

      <h3>Daily Challenge</h3>
      <p>
        <strong>Solve the daily challenge with the fewest moves.</strong>
      </p>
      <p>
        Every day brings a fresh puzzle. Compete with friends to see who can
        solve it using the fewest shapes.
      </p>

      <h3>Tutorial</h3>
      <p>
        <strong>Master the game&apos;s basics.</strong>
      </p>
      <p>
        New to Candlelight? The tutorial will guide you through core mechanics,
        ensuring you&apos;re ready to tackle the game.
      </p>

      <h2>Get Candlelight</h2>
      <p>
        <MarketingLink
          target="_blank"
          href="https://store.steampowered.com/app/3157820/Candlelight/"
        >
          Steam Store
        </MarketingLink>
      </p>
    </ContentStyler>
  )
}

export default CandlelightPage
