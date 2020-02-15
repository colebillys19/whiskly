import React, { forwardRef } from 'react';

import { modalText } from './constants';
import {
  Heading,
  ModalContentWrapper,
  Text,
} from './styles';

const ModalContent = forwardRef((props, ref) => (
  <ModalContentWrapper ref={ref} {...props}>
    <Heading id="info-modal">Info Modal</Heading>
    <Text id="describes-how-to-search">{modalText}</Text>
	</ModalContentWrapper>
));

export default ModalContent;
