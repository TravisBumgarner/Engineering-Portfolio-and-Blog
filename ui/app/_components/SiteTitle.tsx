import { MAX_LIST_WIDTH } from '@/lib/consts'
import Link from 'next/link'
import Weak from '../_sharedComponents/Weak'

const SiteTitle = ({ title }: { title: string }) => {
  return (
    <div id="site-title" >
      <Link href="/">
        <h1>{title}</h1>
      </Link>
      <p>
        <Weak>
          I am a lifelong learner, creator, explorer, and tinkerer.
          <br />
          This is a collection of my experiences.
        </Weak>
      </p>
    </div>
  )
}

export default SiteTitle
