// "use client"

// import {
//   LargeHeaderStyles,
//   MediumHeaderStyles,
//   SmallHeaderStyles
// } from '@/app/_sharedComponents/Header.client'
// import { TextStyles } from '@/app/_sharedComponents/Text.client'
// import { BORDER_COLOR, CSSHover, PRIMARY_COLOR, SPACING } from '@/lib/theme'
// import styled from 'styled-components'

// export const MarkdownStyles = styled.div`
//   max-width: 800px;
//   margin: 0 auto;

//   h1 {
//     ${LargeHeaderStyles}
//   }
//   h2 {
//     ${MediumHeaderStyles};
//   }
//   h3 {
//     ${SmallHeaderStyles};
//   }
//   strong {
//     font-weight: 700;
//     font-size: 1rem;
//   }

//   a {
//     font-weight: 100;
//     color: ${PRIMARY_COLOR};
//     ${CSSHover};
//     text-decoration: underline;
//     text-decoration-thickness: from-font;
//   }

//   li,
//   p {
//     display: block;
//     ${TextStyles}
//   }
//   ul,
//   ol {
//     li {
//       margin: 0.25rem 0rem 0.25rem 1rem;
//     }
//   }
//   ul {
//     list-style: circle;
//     margin-bottom: 1rem;
//   }
//   ol {
//     list-style: decimal;
//   }

//   code {
//     position: relative;
//     font-size: 1rem;
//     border: 1px solid ${BORDER_COLOR};
//     font-family: 'Roboto Mono', monospace;
//     font-weight: 100;
//     display: block;
//     box-sizing: border-box;
//     padding: ${SPACING.MEDIUM}px;
//     margin: ${SPACING.MEDIUM}px 0;
//   }

//   p > code {
//     display: inline;
//     border: 0;
//     padding: 0;
//     border-radius: 0;
//     background-color: color-mix(in srgb, ${BORDER_COLOR} 25%, transparent);

//     &:before,
//     &:after {
//       content: '';
//       display: inline;
//     }
//   }

//   blockquote {
//     position: relative;
//     font-size: 1rem;
//     border: 1px solid ${BORDER_COLOR};
//     font-family: 'Roboto Mono', monospace;
//     font-weight: 100;
//     display: block;
//     box-sizing: border-box;
//     padding: ${SPACING.MEDIUM}px;
//     margin: ${SPACING.MEDIUM}px 0;
//   }

//   figure {
//     margin: ${SPACING.MEDIUM}px 0;

//     figcaption {
//       ${TextStyles};
//       font-size: 0.8rem;
//     }
//   }
// `