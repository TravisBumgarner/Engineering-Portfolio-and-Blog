import {
  ABOUT_ME_SENTENCE_0,
  ABOUT_ME_SENTENCE_1,
  ABOUT_ME_SENTENCE_2
} from '@/lib/consts'
import Link from 'next/link'
import Weak from '../_sharedComponents/Weak'

const SiteTitle = ({ title }: { title: string }) => {
  return (
    <div id="site-title">
      <Link href="/">
        <h1>{title}</h1>
      </Link>
      <p>
        <strong>{ABOUT_ME_SENTENCE_0}</strong>
        <br />
        <Weak>
          {ABOUT_ME_SENTENCE_1}
          <br />
          {ABOUT_ME_SENTENCE_2}
        </Weak>
      </p>
    </div>
  )
}

export default SiteTitle
