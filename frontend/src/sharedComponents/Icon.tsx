import { FaGithub, FaInstagram, FaLinkedinIn, FaReddit, FaYoutube } from 'react-icons/fa'
import { FaBluesky } from 'react-icons/fa6'
import { LiaExternalLinkSquareAltSolid } from 'react-icons/lia'

export const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  reddit: FaReddit,
  bsky: FaBluesky,
  youtube: FaYoutube,
  externalLink: LiaExternalLinkSquareAltSolid,
}

const Icon = ({
  name,
  size = 20,
  color = 'currentColor',
}: {
  name: keyof typeof iconMap
  size?: number
  color?: string
}) => {
  const IconComponent = iconMap[name]
  return <IconComponent size={size} color={color} />
}

export default Icon
