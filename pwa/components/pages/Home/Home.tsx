import { NextPage } from 'next';
import React from 'react';

import MainLayout from '../../layouts/MainLayout';
import useMediaQuery from '../../../../utils/Hooks/useMediaQuery';
import Box from '../../primitives/Box';
import commonCss from '../common.module.scss';
import Card from '../../primitives/Card';
import GridCols from '../../primitives/GridCols';
import css from './Home.module.scss';
import T from '../../primitives/Typo';
import Hr from '../../primitives/Hr';

type HomePublicProps = {};

const Home: NextPage<HomePublicProps> = (
  ownProps: HomePublicProps,
) => {
  const isMobile = useMediaQuery('tablet-large-down');

  return (
    <MainLayout>
      <Box className={css.hero} flex-col flex-pri="end" flex-sec="start">
        <T h2 anemic className={css._blurb}>
          Humans should use technology,<br />
          not the other way around
        </T>
      </Box>
    </MainLayout>
  );
};

export default Home;
