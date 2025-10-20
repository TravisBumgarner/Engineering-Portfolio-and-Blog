import { SPACING } from '../styles/consts'

const MarketingLink = ({
  href,
  children,
  target
}: {
  href: string
  children: React.ReactNode
  target?: string
}) => {
  return (
    <a
      href={href}
      target={target}
      rel="noopener noreferrer"
      style={{
        fontWeight: 'bold',
        backgroundColor: 'var(--primary)',
        color: 'var(--background)',
        padding: `${SPACING.SMALL} ${SPACING.MEDIUM}`,
        textDecoration: 'none'
      }}
    >
      {children}
    </a>
  )
}

export default MarketingLink
