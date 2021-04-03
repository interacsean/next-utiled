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
import Section from '../../primitives/Section/Section';
import Theme from '../../../theme/Theme';

const MainLayoutView: FC<MainLayoutProps> = (props: MainLayoutProps) => {
  const router = useRouter();

  const { heroImage } = Theme;

  return (
    <Box
      className={[
        `theme--${props.theme || 'light'}`,
        'flex --col --sec-stretch',
        css['container'],
      ]}
    >
      <Section className={css['header-ctnr']} noVPad>
        <Box
          tagName={'header'}
          className={[
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
      </Section>
      <Box
        tagName={'main'}
        className={['flex-1 flex --col --sec-stretch', css['main-ctnr']]}
      >
        {!props.hideHero && heroImage && (
          <Box className={[css.hero, commonCss.contentWrapper]} />
        )}
        {props.children}
      </Box>
      <Section className={css['footer-ctnr']}>
        <Box tagName={'footer'} className={css._footer}>
          <Footer />
        </Box>
      </Section>
    </Box>
  );
};

export default MainLayoutView;
