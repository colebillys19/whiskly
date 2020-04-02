import React from 'react';
import T from 'prop-types';

import ModalContent from './ModalContent';
import { StyledBackdrop, StyledModal } from './styles';

const InfoModal = ({ handleModalClose, open }) => (
  <StyledModal
    aria-describedby="describes-how-to-search"
    aria-labelledby="info-modal"
    BackdropComponent={StyledBackdrop}
    BackdropProps={{
      timeout: 500,
    }}
    closeAfterTransition
    disableScrollLock
    onClose={handleModalClose}
    open={open}
  >
    <ModalContent open={open} />
  </StyledModal>
);

InfoModal.propTypes = { handleModalClose: T.func.isRequired, open: T.bool.isRequired };

export default InfoModal;
