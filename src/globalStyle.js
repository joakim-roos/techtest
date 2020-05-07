import { createGlobalStyle } from 'styled-components';
import FontBureauMillerBannerLight from './assets/font/FontBureau-MillerBannerLight.otf'

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'MillerBanner Light';
  src: local('MillerBanner Light'), local('MillerBannerLight'),
  url(${FontBureauMillerBannerLight}) format('opentype');
}

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Helvetica Neue', 'MillerBanner Light';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;