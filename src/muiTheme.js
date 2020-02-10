import { createMuiTheme } from '@material-ui/core/styles';
// import amber from '@material-ui/core/colors/amber';
// import deepPurple from '@material-ui/core/colors/deepPurple';

const theme = createMuiTheme({
  // component styles
  overrides: {
    // icons
    MuiSvgIcon: {
      root: {
        fontSize: 35,
      },
    },
  },
  // colors
  // palette: {
  //   primary: { dark: deepPurple[300] },
  //   secondary: { main: amber[300] },
  // },
});

export default theme;
