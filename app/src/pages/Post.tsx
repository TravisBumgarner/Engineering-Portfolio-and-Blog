import { transparentize } from 'polished'
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
import { CSSHover, PRIMARY_COLOR } from 'Theme'

const MarkdownStyles = styled.div`
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
    color: ${PRIMARY_COLOR};
    ${CSSHover};
    text-decoration: underline;
    text-decoration-thickness: from-font;
  }

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
    margin: calc(3 * 18px) 0;
    position: relative;
    border: 1px solid #979797;
    border-radius: 18px;
    font-family: 'Roboto Mono', monospace;
    font-weight: 300;
    padding: 2rem;
    display: block;
    box-sizing: border-box;

    &:before {
      padding-bottom: 2rem;
      content: '<code>';
      color: #979797;
      font-size: calc(1rem);
      font-weight: 100;
      line-height: 0;
      display: flex;
      justify-content: start;
    }

    &:after {
      padding-top: 2rem;
      padding: 1rem 0;
      content: '</code>';
      color: #979797;
      font-size: calc(1rem);
      font-weight: 100;
      line-height: 0;
      display: flex;
      justify-content: end;
    }
  }

  p > code {
    display: inline;
    border: 0;
    padding: 0;
    border-radius: 0;
    background-color: ${transparentize(0.6, PRIMARY_COLOR)};

    &:before,
    &:after {
      content: '';
      display: inline;
    }
  }

  blockquote {
    margin: calc(3 * 18px) 0;
    position: relative;
    border: 1px solid #979797;
    border-radius: 18px;
    font-family: 'Roboto Mono', monospace;
    font-weight: 300;
    padding: 2rem;
    display: block;
    box-sizing: border-box;

    &:before {
      padding-bottom: 2rem;
      content: '<quote>';
      color: #979797;
      font-size: calc(1rem);
      font-weight: 100;
      line-height: 0;
      display: flex;
      justify-content: start;
    }

    &:after {
      padding-top: 2rem;
      padding: 1rem 0;
      content: '</quote>';
      color: #979797;
      font-size: calc(1rem);
      font-weight: 100;
      line-height: 0;
      display: flex;
      justify-content: end;
    }
  }

  figure {
    margin: 1rem 0;
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
