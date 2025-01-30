import Link from '@/app/_sharedComponents/Link'
import { SiteTitleWrapper } from './SiteTitle.client'

const SiteTitle = ({title}: {title: string}) => {
  return (
    <SiteTitleWrapper>
      <h1><Link to="/">{title}</Link></h1>
      <p>
        I am a lifelong learner, creator, explorer, and tinkerer. This is a
        collection of my experiences.
      </p>
    </SiteTitleWrapper>
  )
}


export default SiteTitle
