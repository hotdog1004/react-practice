import React from 'react';
import { ModalContainer, StyledModal } from './styled';
export interface IModal {
  visible: boolean;
  children: React.ReactNode;
}
const Modal = ({ visible, children }: IModal) => {
  if (!visible) return null;
  return (
    <ModalContainer>
      <StyledModal>{children}</StyledModal>
    </ModalContainer>
  );
};
export default Modal;
