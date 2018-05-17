import getMuiTheme from 'material-ui/styles/getMuiTheme';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

export const Mui = getMuiTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
  },
  appBar: {
    height: 50
  }
});