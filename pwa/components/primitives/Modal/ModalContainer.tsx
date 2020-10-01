import { CompWithChildren } from '../../../../types/util/CompWithChildren';
import { CompWithClassName } from '../../../../types/util/CompWithClassName';
import React, { useEffect, useRef } from 'react';
import clx from '../../../../utils/Html/clx';

interface Props extends CompWithClassName, CompWithChildren {
  onClickOutside: () => void;
  onEscapeKeyPressed?: () => void;
}

export default function ModalContainer({
  onClickOutside,
  children,
  onEscapeKeyPressed,
  className,
}: Props) {
  const wrapperRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // eslint-disable-next-line prettier/prettier
      // @ts-ignore
      if (wrapperRef?.current && !wrapperRef?.current?.contains(event.target)) {
        onClickOutside();
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.code === 'Escape') {
        if (onEscapeKeyPressed) {
          onEscapeKeyPressed();
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', onKeyDown, false);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', onKeyDown, false);
    };
  }, [wrapperRef]);

  return (
    <div ref={wrapperRef} className={className && clx(className)}>
      {children}
    </div>
  );
}
