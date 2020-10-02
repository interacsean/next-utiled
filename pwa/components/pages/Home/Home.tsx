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
import Link from '../../primitives/Link/Link.view';
import ROUTE_PATHS from '../../../../consts/ROUTE_PATHS';

type HomePublicProps = {};

const Home: NextPage<HomePublicProps> = (
  _props: HomePublicProps,
) => {
  return (
    <MainLayout>
      <Box className={[css.hero, commonCss.contentWrapper]} flex-col flex-pri="end">
        <Box className={[commonCss.contentInner]} pv={1} flex-col flex-pri="end" flex-sec="start">
          <T h2 anemic className={css._blurb}>
            Humans should use technology,<br />
            not the other way around
          </T>
        </Box>
      </Box>
      <Box className={[commonCss.contentWrapper]}>
        <Box className={[commonCss.contentInner, commonCss.section]}>
          <T className={css.featureQuote}>
            Persuasive technology is a part of our daily lives, whether we think about it or not.
            The biggest tech companies in the world make their money by understanding who you are
            in order to coax you into spending more time on their platforms.
          </T>
          <Box mv={4} mh={4}>
            <Hr />
          </Box>
          <T h3 className={css.notchedHeading}>What we're about</T>
          <Box className={commonCss.indentedContented}>
            <T content>
              Humane Technology Australia supports the <a href="https://www.humanetech.com">Center for Humane Technology</a>’s
              mission to <strong>realign technology with humanity’s best interests</strong>,
              bringing the global discussion to an Australian context.
            </T>
            <T h4 mb={1 / 2}>Building awareness</T>
            <T content>
              The more people who understand the severity of the issue, the more pressure
              there is on technology platforms to reform.
            </T>
            <T content>
              HTA brings the best minds in this field to lend their insights at events and workshops.
            </T>
            <T h4 mb={1 / 2}>Advocacy</T>
            <T content>
              We seek to inform policy-makers in government and businesses to ensure that
              the well-being of technology users is considered and protected.
            </T>
            <T h4 mb={1 / 2}>Research</T>
            <T content mb={2}>
            </T>
          </Box>
        </Box>
      </Box>
      <Box className={[commonCss.contentWrapper, commonCss.__contrast]}>
        <Box className={[commonCss.contentInner, commonCss.section]}>
          <T h3 className={css.notchedHeading}>Who we are</T>
          <Box className={commonCss.indentedContented} mb={3}>
            <T content>
              We’re just a handful of people who care about personal
              well-being and living in a thriving, cooperative society.
            </T>
            <T content>
              <Link to={ROUTE_PATHS.ROOT}>Meet the team</Link>
            </T>
          </Box>
          <T content>
            <strong>If you care about these things too</strong>, join our mailing list to keep
            up to date on what’s happening.
          </T>
          <T content>
            <strong>If you’d like to get involved</strong>, <Link to={ROUTE_PATHS.CONTACT}>contact us</Link> to see how you can help.
          </T>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default Home;
