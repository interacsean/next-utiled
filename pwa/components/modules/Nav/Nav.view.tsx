/* eslint-disable no-unused-expressions */
/* eslint-disable no-underscore-dangle */
import React, {
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react';

import useMediaQuery from '../../../../utils/Hooks/useMediaQuery';
import Box from '../../primitives/Box';
import Icon from '../../primitives/Icon';
import MobileMenu from '../../primitives/MobileMenu';
import { useModalContext } from '../../primitives/Modal/ModalProvider';

import useModal from '../../primitives/Modal/useModal';
import css from './Nav.module.scss';
import { NavProps } from './Nav.props';
import StaticNavLinks from './StaticNavLinks.view';

const NavView: FC<NavProps> = (props: NavProps): ReactElement<'div'> => {
  const [openState, setOpenState] = useState(false);
  const closeMenu = useCallback(() => setOpenState(false), [setOpenState]);
  const { setModalOpen } = useModal();
  const isMobileSize = useMediaQuery('tablet-down');

  useEffect(() => {
    setModalOpen(openState);
    if (openState) {
      // @ts-ignore
      window?.scrollTo && window?.scrollTo(0, 0);
    }
  }, [openState]);

  const { showModal } = useModalContext();
  const onOpenUpdateAccountModal = useCallback(
    () => {
    },
    [showModal, closeMenu],
  );

  return (
    <MobileMenu
      menuClass={css.mobileMenu}
      overlayClass={css.mobileMenuOverlay}
      isExpanded={openState}
      onExpandedUpdated={setOpenState}
    >
      <Box className={css._menu}>
        <StaticNavLinks closeMenu={closeMenu} isMobileSize={isMobileSize} />
      </Box>
    </MobileMenu>
  );
};

export default NavView;
