import React, { forwardRef } from 'react';
import Fade from '@material-ui/core/Fade';

import { modalText } from './constants';
import { Heading, ModalContentWrapper } from './styles';

const ModalContent = forwardRef((props, ref) => (
  <Fade in={props.open} timeout={500}>
    <ModalContentWrapper ref={ref} {...props}>
      <Heading id="info-modal">Info Modal</Heading>
      <p id="describes-how-to-search">{modalText}</p>
    </ModalContentWrapper>
  </Fade>
));

export default ModalContent;
