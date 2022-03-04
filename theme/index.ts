import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '480px',
  md: '960px',
  lg: '1460px',
  xl: '1740px',
  '2xl': '1740px',
})

export const theme = extendTheme({
  breakpoints,
  fonts: {
    heading: 'Open Sans, sans-serif',
    body: 'Raleway, sans-serif',
  },
})

export * from './colors'
export * from './sizes'
export * from './spaces'
