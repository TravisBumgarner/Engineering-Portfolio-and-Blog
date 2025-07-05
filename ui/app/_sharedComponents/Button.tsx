import { FONT_SIZES, SPACING } from '@/lib/styles/consts'
import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer;
  font-size: ${FONT_SIZES.MEDIUM};
  background-color: var(--secondary-background);
  color: var(--foreground);
  border: 0;
  margin: ${SPACING.XSMALL} 0;
  padding: ${SPACING.SMALL};

  &:hover {
    color: var(--primary);
  }

  &:disabled {
    color: var(--foreground-disabled);
    cursor: not-allowed;
  }
`

export default Button
