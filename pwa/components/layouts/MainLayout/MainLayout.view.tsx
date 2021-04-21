import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Box from '../../primitives/Box';

import Logo from '../../primitives/Logo';
import Nav from '../../modules/Nav';

import { MainLayoutProps } from './MainLayout.props';
import css from './MainLayout.module.scss';
import routes from '../../../../consts/ROUTE_PATHS';
import Footer from '../../modules/Footer';
import Section from '../../primitives/Section/Section';
import Theme from '../../../theme/Theme';

const MainLayoutView: FC<MainLayoutProps> = (props: MainLayoutProps) => {
  const router = useRouter();

  const { heroImage } = Theme;

  return (
    <Box
      flex-col
      flex-sec="stretch"
      className={[
        `theme--${props.theme || 'light'}`,
        css['container'],
      ]}
    >
      <Section className={css['header-ctnr']} noVPad>
        <Box
          tagName={'header'}
          flex-sec="center"
          flex-pri="space-between"
          className={[css.header]}
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
        flex-col
        flex-sec="stretch"
        flex-1
        className={[css['main-ctnr']]}
      >
        {!props.hideHero && heroImage && (
          <Box className={[css.hero]} />
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
