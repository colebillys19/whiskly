import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';

export const ModalContentWrapper = styled.div`
  background-color: white;
  border: 0.5rem solid black;
  outline: none;
  padding: 5rem;
  border-radius: 1rem;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const StyledModal = styled(Modal)`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Text = styled.p``;
