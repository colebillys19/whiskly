import React, { forwardRef } from 'react';

import { modalText } from './constants';
import { Heading, ModalContentWrapper } from './styles';

const ModalContent = forwardRef((props, ref) => (
  <ModalContentWrapper ref={ref} {...props}>
    <Heading id="info-modal">Info Modal</Heading>
    <p id="describes-how-to-search">{modalText}</p>
	</ModalContentWrapper>
));

export default ModalContent;
