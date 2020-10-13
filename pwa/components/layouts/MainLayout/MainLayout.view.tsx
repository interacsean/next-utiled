import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Box from '../../primitives/Box';

import Logo from '../../primitives/Logo';
import Nav from '../../modules/Nav';

import { MainLayoutProps } from './MainLayout.props';
import css from './MainLayout.module.scss';
import commonCss from '../../pages/common.module.scss';
import routes from '../../../../consts/ROUTE_PATHS';
import Footer from '../../modules/Footer';

const MainLayoutView: FC<MainLayoutProps> = (props: MainLayoutProps) => {
  const router = useRouter();

  return (
    <Box
      className={[
        `theme--${props.theme || 'light'}`,
        'flex --col --sec-stretch',
        css['container'],
      ]}
    >
      <Box className={[commonCss.contentWrapper, css['header-ctnr']]}>
        <Box
          tagName={'header'}
          className={[
            commonCss.contentInner,
            commonCss['--padded'],
            'flex --sec-center --pri-space-between',
            css.header,
          ]}
        >
          <Box onClick={() => router.push(routes.ROOT)}>
            <Logo />
          </Box>
          <Box tagName={'nav'}>
            <Nav />
          </Box>
        </Box>
      </Box>
      <Box
        tagName={'main'}
        className={['flex-1 flex --col --sec-stretch', css['main-ctnr']]}
      >
        {!props.hideHero && (
          <Box className={[css.hero, commonCss.contentWrapper]} />
        )}
        {props.children}
      </Box>
      <Box className={css['footer-ctnr']} flex-center flex-col>
        <Box tagName={'footer'} className={css._footer}>
          <Footer />
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayoutView;
