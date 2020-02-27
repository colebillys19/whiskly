import styled from 'styled-components';
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';

import { offBlack, offWhite } from '../../styleConstants';

export const ModalContentWrapper = styled.div`
  background-color: ${offWhite};
  border: 0.5rem solid ${offBlack};
  outline: none;
  padding: 5rem;
  position: absolute;
  border-radius: 1rem;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const StyledBackdrop = styled(Backdrop)`
  background-color: rgba(0, 0, 0, 0.4);
`;

export const StyledModal = styled(Modal)`
  align-items: center;
  display: flex;
  justify-content: center;
`;
