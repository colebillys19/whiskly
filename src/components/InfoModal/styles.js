import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';

export const StyledModal = styled(Modal)`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const ModalContentWrapper = styled.div`
  background-color: white;
  border: 0.5rem solid #000;
  outline: none;
  padding: 1rem;
`;
