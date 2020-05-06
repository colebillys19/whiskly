export const ellipsisSwitch = (str, setter) => {
  switch (str.length) {
    case 0:
      setter('.');
      break;
    case 1:
      setter('. .');
      break;
    case 3:
      setter('. . .');
      break;
    default:
      setter('');
  }
};
