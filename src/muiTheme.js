import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import indigo from '@material-ui/core/colors/indigo';

const theme = createMuiTheme({
  // component styles
  overrides: {
    // icons
    MuiSvgIcon: {
      root: {
        fontSize: 30,
      },
    },
  },
  // colors
  palette: {
    primary: { main: indigo['A700'] },
    secondary: { main: green[700] },
  },
});

export default theme;
