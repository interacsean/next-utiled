import { FC } from 'react';
import React from 'react';

import Box from '../Box';
import T from '../Typo';

import css from './MobileMenu.module.scss';
import { CompWithChildren } from '../../../../types/util/CompWithChildren';

interface MobileMenuProps extends CompWithChildren {
  menuClass?: string;
  overlayClass?: string;
  isExpanded?: boolean;
  onExpandedUpdated?: (state: boolean) => void;
  openButtonComponent?: React.ReactNode;
  closeButtonComponent?: React.ReactNode;
  openButtonColor?: string;
}

const clx = (arr: (string | false | undefined)[]) =>
  arr.filter((c) => !!c).join(' ');

const MobileMenu: FC<MobileMenuProps> = (
  props: MobileMenuProps,
): ReturnType<typeof Box> => {
  const [isExpanded, setExpanded] = React.useState(false);
  const onMenuButtonClick = React.useCallback(() => {
    const newIsExpanded = !isExpanded;
    setExpanded(newIsExpanded);
    props.onExpandedUpdated && props.onExpandedUpdated(newIsExpanded);
  }, [isExpanded, setExpanded, props.onExpandedUpdated]);
  const onOverlayClick = React.useCallback(() => {
    props.onExpandedUpdated && props.onExpandedUpdated(false);
    setExpanded(false);
  }, [setExpanded, props.onExpandedUpdated]);
  React.useEffect(() => {
    if (props.isExpanded !== undefined) {
      setExpanded(props.isExpanded);
    }
  }, [props.isExpanded]);

  return (
    <>
      <div
        className={clx([
          css.overlay,
          props.overlayClass || css['--style-default'],
          isExpanded && css['--is-expanded'],
        ])}
        onClick={onOverlayClick}
      />

      {!isExpanded
        ? props.openButtonComponent || (
            <div
              className={css.openBtn}
              style={
                props.openButtonColor ? { color: props.openButtonColor } : {}
              }
              onClick={onMenuButtonClick}
            >
              <hr />
              <hr />
              <hr />
            </div>
          )
        : props.closeButtonComponent || (
            <div
              className={css.closeBtn}
              style={
                props.openButtonColor ? { color: props.openButtonColor } : {}
              }
              onClick={onMenuButtonClick}
            >
              <hr />
              <hr />
            </div>
          )}
      <div
        className={clx([
          css.menuCtnr,
          isExpanded && css['--is-expanded'],
          props.menuClass || css['--style-default'],
        ])}
      >
        {props.children}
      </div>
    </>
  );
};

export default MobileMenu;
