import React from 'react';
import { createPortal } from 'react-dom';
import { IModal } from 'components/modal';
import { ModalContainer, StyledModal } from 'components/modal/styled';
const PortalModal = ({ visible, children }: IModal) => {
  const modalRoot = document.getElementById('modal-root') as HTMLElement;
  if (!visible) return null;
  return createPortal(
    <ModalContainer>
      <StyledModal>
        {children}
        <button>다른 버튼</button>
      </StyledModal>
    </ModalContainer>,
    modalRoot
  );
};

export default PortalModal;
