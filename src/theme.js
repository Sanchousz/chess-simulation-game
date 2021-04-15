import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#37474f',
      contrastText: '#fafafa',
    },
    secondary: {
      main: '#f5f5f5',
      dark: '#e0e0e0',
      light: '#fafafa',
      contrastText: '#000000',
    },
  },
});

theme = responsiveFontSizes(theme);

export { theme };
