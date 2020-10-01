import React, { useCallback, useState } from 'react';

import ROUTE_PATHS from '../../../../consts/ROUTE_PATHS';
import useMediaQuery from '../../../../utils/Hooks/useMediaQuery';
import Box from '../../primitives/Box';
import Button from '../../primitives/Button';
import Icon from '../../primitives/Icon';
import Link from '../../primitives/Link';
import { useModalContext } from '../../primitives/Modal/ModalProvider';
import T from '../../primitives/Typo';

import ModalContainer from '../../primitives/Modal/ModalContainer';
import LoginRegistrationContainer, {
  LoginRegistrationTabOptions,
} from '../Session/LoginRegistration.container';
import { AUTH_STATUS } from '../Session/Session.types';
import { UserSettingsTabOptions } from '../UserSettings/UserSettings.types';
import AccountMenu from './AccountMenu';
import css from './Nav.module.scss';

interface ProfileProps {
  closeMenu: () => void;
  authStatus: AUTH_STATUS;
  onLogout: () => void;
  onOpenUpdateAccountModal: (initialActiveTab: UserSettingsTabOptions) => void;
}

const ProfileLinks = ({
  closeMenu,
  authStatus,
  onOpenUpdateAccountModal,
  onLogout,
}: ProfileProps) => {
  // Note: query should keep in sync with mixin mobile-menu-size value
  const isMobileSize = useMediaQuery('tablet-down');
  const [isAccountMenuVisible, setIsAccountMenuVisible] = useState(false);

  const { showModal, hideModal } = useModalContext();
  const onLogin = useCallback(() => {
    showModal({
      // eslint-disable-next-line react/display-name
      content: () => (
        <LoginRegistrationContainer
          initialActiveTab={LoginRegistrationTabOptions.Login}
          onLoginSuccess={hideModal}
        />
      ),
    });
  }, [showModal]);

  const onRegister = useCallback(() => {
    showModal({
      // eslint-disable-next-line react/display-name
      content: () => (
        <LoginRegistrationContainer
          initialActiveTab={LoginRegistrationTabOptions.Register}
          onLoginSuccess={hideModal}
        />
      ),
    });
  }, [showModal]);

  const onCloseAccountMenu = useCallback(() => {
    setIsAccountMenuVisible(false);
  }, [setIsAccountMenuVisible]);

  const onAccountMenuClicked = useCallback(() => {
    setIsAccountMenuVisible((currentValue) => !currentValue);
  }, [setIsAccountMenuVisible]);

  switch (authStatus) {
    case AUTH_STATUS.STATE_ANON:
      return isMobileSize ? (
        <Box onClick={closeMenu} className={css['nav-link-ctnr']}>
          <T className={css._link} onClick={onLogin}>
            Login/Register
          </T>
        </Box>
      ) : (
        <>
          <Button
            outline
            secondary
            className={css.loginButton}
            onClick={onLogin}
          >
            Login
          </Button>
          <Button secondary onClick={onRegister}>
            {' '}
            Register
          </Button>
        </>
      );
    case AUTH_STATUS.STATE_LOADING: // todo: on STATE_LOADING, disable buttons / show loading ?
      return isMobileSize ? (
        <Box onClick={closeMenu} className={css['nav-link-ctnr']}>
          <T className={css._link} onClick={onLogin}>
            Login/Register
          </T>
        </Box>
      ) : (
        <>
          <Button
            outline
            secondary
            className={css.loginButton}
            onClick={onLogin}
            loading
          >
            Login
          </Button>
          <Button secondary onClick={onRegister} loading>
            {' '}
            Register
          </Button>
        </>
      );

    case AUTH_STATUS.STATE_AUTHED:
      return isMobileSize ? (
        <>
          <Box className={[css.footerSpace, css.menuDivider]} />
          <Box className={css['nav-link-ctnr']} onClick={closeMenu}>
            <T
              onClick={() =>
                onOpenUpdateAccountModal(UserSettingsTabOptions.Calculator)
              }
              className={css._link}
            >
              Calculator Settings
            </T>
          </Box>
          <Box className={css['nav-link-ctnr']}>
            <T
              onClick={() => {
                onLogout();
                closeMenu();
              }}
              className={css._link}
            >
              Sign out
            </T>
          </Box>
        </>
      ) : (
        <>
          <Box className={[css['nav-link-ctnr'], css.portfolio]}>
            <Link
              to={ROUTE_PATHS.ROOT}
              className={css._link}
              activeClass={css['--active']}
            >
              My Portfolio
            </Link>
          </Box>
          <ModalContainer
            onClickOutside={onCloseAccountMenu}
            onEscapeKeyPressed={onCloseAccountMenu}
            className={[css['nav-link-ctnr'], css.accountMenuIcon]}
          >
            <Icon
              icon="user"
              className={css.icon}
              onClick={onAccountMenuClicked}
            />
            {isAccountMenuVisible && (
              <AccountMenu closeAccountMenu={onCloseAccountMenu} />
            )}
          </ModalContainer>
        </>
      );

    case AUTH_STATUS.STATE_ERROR:
    default:
      return null;
  }
};

export default ProfileLinks;
