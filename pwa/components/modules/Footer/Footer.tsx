import React, { FC, useCallback } from 'react';

import Box from '../../primitives/Box';
import T from '../../primitives/Typo';

import css from './Footer.module.scss';
import Link from '../../primitives/Link/Link.view';
import ROUTE_PATHS from '../../../../consts/ROUTE_PATHS';
import { CompWithChildren } from '../../../../types/util/CompWithChildren';
import clx from '../../../../utils/Html/clx';
import { useModalContext } from '../../primitives/Modal/ModalProvider';

type FooterProps = {};

const CALCULATORS: [string, string][] = [
  ['long-call', 'Call option calculator'],
  ['long-put', 'Put option calculator'],
  ['bearish-call-credit-spread', 'Call credit spread calculator'],
  ['bullish-put-credit-spread', 'Put credit spread calculator'],
  ['iron-condor', 'Iron condor calculator'],
  ['straddle', 'Straddle calculator'],
];

const LEARN_OPTIONS: [string, string][] = [
  ['path', 'Introduction to options trading'],
];

const Group = ({ children }: CompWithChildren) => (
  <Box className={css.group} mb={1}>
    {children}
  </Box>
);
const MenuHeader = ({ children }: CompWithChildren) => (
  <T className={css._header} content mb={1 / 2}>
    {children}
  </T>
);
const MenuBody = ({ children }: CompWithChildren) => (
  <Box tagName={'ul'} className={css._menu} flex-col flex-sec={'start'}>
    {children}
  </Box>
);

const Footer: FC<FooterProps> = (
  props: FooterProps,
): ReturnType<typeof Box> => {
  const { showModal, hideModal } = useModalContext();

  const onSettingsClick = useCallback(
    () => {
    },
    [showModal, hideModal],
  );

  const onLoginClick = useCallback(
    () => {

    },
    [showModal, hideModal],
  );

  return (
    <Box>
      <Box flex-pri={'stretch'} flex-wrap className={'theme-override--dark'}>
        {/*<Group>*/}
        {/*  <MenuHeader>Calculators</MenuHeader>*/}
        {/*  <MenuBody>*/}
        {/*    {CALCULATORS.map((linkInfo) => (*/}
        {/*      <Link*/}
        {/*        className={css._link}*/}
        {/*        key={linkInfo[0]}*/}
        {/*        to={ROUTE_PATHS.ROOT}*/}
        {/*        payload={{ strat: linkInfo[0] }}*/}
        {/*      >*/}
        {/*        {linkInfo[1]}*/}
        {/*      </Link>*/}
        {/*    ))}*/}
        {/*    <Link*/}
        {/*      className={clx([css._link, css['--more']])}*/}
        {/*      to={ROUTE_PATHS.ROOT}*/}
        {/*    >*/}
        {/*      See all calculators...*/}
        {/*    </Link>*/}
        {/*  </MenuBody>*/}
        {/*</Group>*/}
        {/*<Group>*/}
        {/*  <MenuHeader>Learn Options</MenuHeader>*/}
        {/*  <MenuBody>*/}
        {/*    {LEARN_OPTIONS.map((linkInfo) => (*/}
        {/*      <Link className={css._link} key={linkInfo[0]} to={linkInfo[0]}>*/}
        {/*        {linkInfo[1]}*/}
        {/*      </Link>*/}
        {/*    ))}*/}
        {/*    <Link*/}
        {/*      className={clx([css._link, css['--more']])}*/}
        {/*      to={ROUTE_PATHS.ROOT}*/}
        {/*    >*/}
        {/*      More education...*/}
        {/*    </Link>*/}
        {/*  </MenuBody>*/}
        {/*</Group>*/}
        {/*<Group>*/}
        {/*  <MenuHeader>Features</MenuHeader>*/}
        {/*  <MenuBody>*/}
        {/*    <>{null}</>*/}
        {/*  </MenuBody>*/}
        {/*</Group>*/}
        {/*<Group>*/}
        {/*  <MenuHeader>Help</MenuHeader>*/}
        {/*  <MenuBody>*/}
        {/*    <>{null}</>*/}
        {/*  </MenuBody>*/}
        {/*</Group>*/}
        {/*<Group>*/}
        {/*  <MenuHeader>About</MenuHeader>*/}
        {/*  <MenuBody>*/}
        {/*    <>{null}</>*/}
        {/*  </MenuBody>*/}
        {/*</Group>*/}
        {/*<Group>*/}
        {/*  <MenuHeader>Account</MenuHeader>*/}
        {/*</Group>*/}
      </Box>
      <T className={[css.copyright, 'align-center']} mt={2}>
        Humane Technology Australia
      </T>
    </Box>
  );
};

export default Footer;
