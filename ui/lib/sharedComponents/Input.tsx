import { FONT_SIZES, FONT_WEIGHTS, SPACING } from '@/lib/styles/consts'
import styled from 'styled-components'

export const Input = styled.input`
  background-color: var(--secondary-background);
  color: var(--foreground);
  font-size: ${FONT_SIZES.MEDIUM};
  border: 0;
  font-weight: ${FONT_WEIGHTS.LIGHT};
  margin: ${SPACING.XSMALL} 0;
  padding: ${SPACING.SMALL};
`

export const TextArea = styled.textarea`
  background-color: var(--secondary-background);
  color: var(--foreground);
  font-size: ${FONT_SIZES.MEDIUM};
  border: 0;
  font-weight: ${FONT_WEIGHTS.LIGHT};
  margin: ${SPACING.XSMALL} 0;
  padding: ${SPACING.SMALL};
`
