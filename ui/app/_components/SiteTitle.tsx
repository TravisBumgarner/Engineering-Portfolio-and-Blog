import Link from "next/link"

const SiteTitle = ({title}: {title: string}) => {
  return (
    <div id="site-title">
      <Link href="/"><h1>{title}</h1></Link>
      <p>
        I am a lifelong learner, creator, explorer, and tinkerer. This is a
        collection of my experiences.
      </p>
    </div>
  )
}


export default SiteTitle
