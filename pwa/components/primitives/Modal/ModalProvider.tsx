import React, { useState, useCallback, createContext, useContext } from 'react';
import Modal from './Modal.view';
import { ModalContextParams, ModalConfig } from './Modal.props';

interface Props {
  children: JSX.Element;
}

const ModalContext = createContext<ModalContextParams>({
  showModal: () => null,
  hideModal: () => null,
});

export default function ModalProvider({ children }: Props): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const [modalConfig, setModalConfig] = useState<ModalConfig>({
    // eslint-disable-next-line react/display-name
    content: () => <div />,
  });
  const showModal = useCallback(
    (newConfig) => {
      setOpen(true);
      setModalConfig(newConfig);
    },
    [setOpen, setModalConfig],
  );

  const hideModal = useCallback(() => {
    setOpen(false);
    if (modalConfig.onCloseModal) {
      modalConfig.onCloseModal();
    }
  }, [setOpen, modalConfig]);

  return (
    <ModalContext.Provider
      value={{
        hideModal,
        showModal,
      }}
    >
      <Modal
        open={open}
        onClose={hideModal}
        content={modalConfig.content}
        customHeader={modalConfig.customHeader}
        headerString={modalConfig.headerString}
      />
      {children}
    </ModalContext.Provider>
  );
}

export const useModalContext = (): ModalContextParams =>
  useContext(ModalContext);
