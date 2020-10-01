import Modal from 'react-responsive-modal';
import React from 'react';

import Icon from '../Icon';
import T from '../Typo';

import css from './Modal.module.scss';
import { ModalContainerProps } from './Modal.props';

export default function ModalView({
  open,
  onClose,
  content: Content,
  customHeader: CustomHeader,
  headerString,
}: ModalContainerProps) {
  const modalClassnames = {
    overlay: css.overlay,
    modal: css.modal,
  };

  return (
    // eslint-disable-next-line prettier/prettier
    <Modal
      open={open}
      onClose={onClose}
      closeOnEsc
      classNames={modalClassnames}
      closeIcon={<Icon icon="close" small className={css.closeIcon} />}
      animationDuration={100}
    >
      {CustomHeader ? (
        // @ts-ignore (typescript doesn't know what CustomHeader is)
        <CustomHeader />
      ) : headerString ? (
        <T h5 className={css.header} mb={2}>
          {headerString}
        </T>
      ) : null}
      {/* @ts-ignore (typescript doesn't know what customHeader is) */}
      <div className={css.container}>{Content && <Content />}</div>
    </Modal>
  );
}
