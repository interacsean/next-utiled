import { NextPage } from 'next';
import React from 'react';

import MainLayout from '../../layouts/MainLayout';
import useMediaQuery from '../../../../utils/Hooks/useMediaQuery';
import Box from '../../primitives/Box';
import Card from '../../primitives/Card';
import GridCols from '../../primitives/GridCols';
import T from '../../primitives/Typo';
import Hr from '../../primitives/Hr';

import css from './Home.module.scss';
import commonCss from '../common.module.scss';

type HomePublicProps = {};

const Home: NextPage<HomePublicProps> = (
  ownProps: HomePublicProps,
) => {
  const isMobile = useMediaQuery('tablet-large-down');

  return (
    <MainLayout>
      <Box className={[css.hero, commonCss.contentWrapper]} flex-col flex-pri="end">
        <Box className={[commonCss.contentInner, commonCss['--padded']]} pv={1} flex-col flex-pri="end" flex-sec="start">
          <T h2 anemic className={css._blurb}>
            Humans should use technology,<br />
            not the other way around
          </T>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default Home;
