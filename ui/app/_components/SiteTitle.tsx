import Link from '@/app/_sharedComponents/Link'
import { SiteTitleWrapper } from './SiteTitle.client'

const SiteTitle = ({title}: {title: string}) => {
  return (
    <SiteTitleWrapper>
      <Link to="/">{title}</Link>
    </SiteTitleWrapper>
  )
}


export default SiteTitle
