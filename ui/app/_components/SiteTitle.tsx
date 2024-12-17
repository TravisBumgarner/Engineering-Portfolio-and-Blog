import InternalLink from '@/app/_sharedComponents/InternalLink'
import { SiteTitleWrapper } from './SiteTitle.client'

const SiteTitle = ({title}: {title: string}) => {
  return (
    <SiteTitleWrapper>
      <InternalLink to="/">{title}</InternalLink>
    </SiteTitleWrapper>
  )
}


export default SiteTitle
