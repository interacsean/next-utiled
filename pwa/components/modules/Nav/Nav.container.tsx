import { FC } from 'react';
import React from 'react';

import { NavPublicProps, NavProps } from './Nav.props';

import NavView from './Nav.view';

const NavContainer: FC<NavPublicProps> = (_ownProps: NavPublicProps) => {

  const viewProps: NavProps = {
  };

  return <NavView {...viewProps} />;
};

export default NavContainer;
