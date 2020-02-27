import { createMuiTheme } from '@material-ui/core/styles';
// import amber from '@material-ui/core/colors/amber';
// import indigo from '@material-ui/core/colors/indigo';
// import blueGrey from '@material-ui/core/colors/blueGrey';

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
    primary: { main: '#1d1d1d' },
    // secondary: { main: amber[500] },
  },
});

export default theme;
