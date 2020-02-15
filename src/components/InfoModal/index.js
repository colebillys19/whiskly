import React from 'react';
import T from 'prop-types';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import ModalContent from './ModalContent';
import { StyledModal } from './styles';

const InfoModal = ({ handleModalClose, open }) => (
  <StyledModal
    aria-describedby="describes-how-to-search"
    aria-labelledby="info-modal"
    BackdropComponent={Backdrop}
    BackdropProps={{ timeout: 300 }}
    closeAfterTransition
    onClose={handleModalClose}
    open={open}
    >
    <Fade in={open} timeout={300}>
      <ModalContent />
    </Fade>
  </StyledModal>
);

InfoModal.propTypes = { handleModalClose: T.func.isRequired, open: T.bool.isRequired };

export default InfoModal;
