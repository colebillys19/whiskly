import React, { forwardRef } from 'react';

import { ModalContentWrapper } from './styles';

const ModalContent = forwardRef((props, ref) => (
  <ModalContentWrapper ref={ref} {...props}>
    <h2 id="info-modal">Transition modal</h2>
    <p id="describes-how-to-search">react-transition-group animates me.</p>
	</ModalContentWrapper>
));

export default ModalContent;
