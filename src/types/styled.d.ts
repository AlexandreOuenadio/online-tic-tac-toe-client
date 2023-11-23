import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    warningColor: string;
    okColor: string;
    primary: string;
    text: string;
    background: string;
    inputBorder: string;
    grayscale: {
      light: string;
      soft: string;
    };
  }
}