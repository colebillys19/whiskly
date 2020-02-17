import { createMuiTheme } from '@material-ui/core/styles';
// import amber from '@material-ui/core/colors/amber';
// import indigo from '@material-ui/core/colors/indigo';

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
    // primary: { main: indigo['A700'] },
    // secondary: { main: amber[500] },
  },
});

export default theme;
