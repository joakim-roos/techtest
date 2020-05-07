import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    bg_primary: '#ffffff',
    bg_secondary: '#f9f9f9',
    font_col_primary: '#202020',
    font_col_secondary: '#656565',
    black: '#000000',
    white: '#ffffff',
    light_grey: '#d8d8d8',
    gold: '#b69f58',
    mineshaft: '#2b2b2b',
  },
  fontSizes: {
    lg: '22px',
    md: '20px',
    sm: '15px',
    xs: '13px',
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme