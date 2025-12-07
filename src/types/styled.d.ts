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
      dark: string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    shadows: {
      sm: string;
      md: string;
      lg: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      round: string;
    };
  }
}