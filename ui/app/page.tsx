import snapshots from '@/content/snapshots/index.json'
import ListItem from './_sharedComponents/ListItem'

const Snapshots = () => {
  return (
    <div>
      {Object.values(snapshots).map(({ src }, index) => (
        <ListItem
          type="snapshot"
          key={index}
          src={src}
          priority={index === 0}
        />
      ))}
    </div>
  )
}

export default Snapshots
