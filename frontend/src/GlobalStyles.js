import { createGlobalStyle } from 'styled-components';
import mediaQueryFor from './_global_styles/responsive_querie';

/**
 * Color palette:
 * #17151B << Dark Gray
 * #FF8C63 << Orange
 * #FFD17C << Lt Orange
 * #DE3B61 << Red
 * #3F1F6A << Purple
 * #F1FCEF << Creme
 * #73FF6D << Green
 */

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Comfortaa|Righteous');
    background-color: #17151B;
    max-width:1000px;
    width:100%;
    margin:0 auto;
    ${mediaQueryFor.smDevice`
      width:100vw;
    `}
    ${mediaQueryFor.xsDevice`
      width:100vw;
    `}
  }
`;

export default GlobalStyle;
