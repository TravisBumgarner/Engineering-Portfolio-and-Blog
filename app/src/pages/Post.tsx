import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'

import posts, { postMappings } from 'Posts'
import Header, {
  LargeHeaderStyles,
  MediumHeaderStyles,
  SmallHeaderStyles
} from 'SharedComponents/Header'
import InternalLink from 'SharedComponents/InternalLink'
import { TextStyles } from 'SharedComponents/Text'
import { BORDER_COLOR, CSSHover, PRIMARY_COLOR, SPACING } from 'Theme'

const MarkdownStyles = styled.div`
  max-width: 800px;
  margin: 0 auto;

  h1 {
    ${LargeHeaderStyles}
  }
  h2 {
    ${MediumHeaderStyles};
  }
  h3 {
    ${SmallHeaderStyles};
  }
  strong {
    font-weight: 700;
    font-size: 1rem;
  }

  a {
    font-weight: 100;
    color: ${PRIMARY_COLOR};
    ${CSSHover};
    text-decoration: underline;
    text-decoration-thickness: from-font;
  }

  li,
  p {
    display: block;
    ${TextStyles}
  }
  ul,
  ol {
    li {
      margin: 0.25rem 0rem 0.25rem 1rem;
    }
  }
  ul {
    list-style: circle;
    margin-bottom: 1rem;
  }
  ol {
    list-style: decimal;
  }

  code {
    position: relative;
    font-size: 1rem;
    border: 1px solid ${BORDER_COLOR};
    font-family: 'Roboto Mono', monospace;
    font-weight: 100;
    display: block;
    box-sizing: border-box;
    padding: ${SPACING.MEDIUM}px;
    margin: ${SPACING.MEDIUM}px 0;
  }

  p > code {
    display: inline;
    border: 0;
    padding: 0;
    border-radius: 0;
    background-color: color-mix(in srgb, ${BORDER_COLOR} 25%, transparent);

    &:before,
    &:after {
      content: '';
      display: inline;
    }
  }

  blockquote {
    position: relative;
    font-size: 1rem;
    border: 1px solid ${BORDER_COLOR};
    font-family: 'Roboto Mono', monospace;
    font-weight: 100;
    display: block;
    box-sizing: border-box;
    padding: ${SPACING.MEDIUM}px;
    margin: ${SPACING.MEDIUM}px 0;
  }

  figure {
    margin: ${SPACING.MEDIUM}px 0;

    figcaption {
      ${TextStyles};
      font-size: 0.8rem;
    }
  }
`

const loadPost = async (fileName: keyof typeof postMappings) => {
  const postModule = await postMappings[fileName]()
  return postModule.default // Assuming the default export is the MDX component
}

const Post = () => {
  const { id } = useParams()
  const post = useMemo(() => (id ? posts[id] : null), [id])
  const navigate = useNavigate()
  const [PostComponent, setPostComponent] = useState<React.FC | null>(null)

  useEffect(() => {
    if (!post) return

    const load = async () => {
      const component = await loadPost(post.postMapping)
      setPostComponent(() => component)
    }
    load()
  }, [post])

  if (!post) {
    navigate('/blog')
    return null
  }

  return (
    <MarkdownStyles>
      <Header size="large">
        <InternalLink to="/artifacts">Posts://</InternalLink> {post.title}
      </Header>
      <time>{new Date(post.date).toDateString()}</time>
      {PostComponent ? <PostComponent /> : <div>Loading...</div>}
    </MarkdownStyles>
  )
}

export default Post
