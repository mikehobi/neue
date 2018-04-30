import styled from 'react-emotion'
import {
  space,
  color,
  width,
  fontSize,
  fontWeight,
  textAlign,
  lineHeight,
  fontFamily
} from 'styled-system'

// Example of a general purpose Box layout component
// export const Box = styled.div`
//   ${space}
//   ${color}
//   ${width}
// `

// General purpose typographic component
export const Text = styled.div`
  ${space}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${fontFamily}
  ${textAlign}
  ${lineHeight}
`
Text.defaultProps = {
  fontWeight: 'bold'
}