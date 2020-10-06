import { NextPage } from 'next';
import React from 'react';

import MainLayout from '../../layouts/MainLayout';
import Box from '../../primitives/Box';
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
            <span className={css._humans}>Humans</span> should use <span className={css._technology}>technology</span>,<br />
            not the other way around
          </T>
        </Box>
      </Box>
      <Box className={[commonCss.contentWrapper]}>
        <Box className={[commonCss.contentInner, commonCss.__textContent, commonCss.section]}>
          <T className={css.featureQuote} mb={2}>
            Persuasive technology is now a part of our daily lives
          </T>
          <Box className={commonCss.indentedContented}>
            <T content>
              The biggest tech companies in the world make their money by coaxing you into spending more time on their platform and selling targeted advertising by understanding as much as they can about you and your personality.
            </T>
            <T content>
              The problem is not so much that platforms are consuming more of our time, or even that we have to sign over access to our data for these companies to be profitable.
            </T>
            <T content>
              The bigger problem is that the most effective way to win our attention is to feed us divisive, belief-reaffirming, often misinformed content, with no regard to the ill-effects on our mental health, the capability of the population to make educated, democratic decisions, or the loss of cohesion and unity we feel as a society.
            </T>
          </Box>
          <Box mv={4} mh={4}>
            <Hr />
          </Box>
          <T h3 className={css.notchedHeading}>What we're about</T>
          <Box className={commonCss.indentedContented}>
            <T content>
              Humane Technology Australia supports the{' '}
              <a href="https://www.humanetech.com" target="_blank">Center for Humane Technology</a>'s mission
              to <strong>realign technology with humanity’s best interests</strong>.  We bring the ongoing global discussion on
              how technology is impacting society by changing individual behaviour into an Australian context.
            </T>
            <T h4 mb={1 / 2}>Building awareness</T>
            <T content>
              The more people who understand the nature and severity of the issue, the more pressure there will be on technology platforms to operate in a way that respects individual users.
            </T>
            <T content>
              HTA brings together the best minds in the field to share insights and foster discussion amongst leaders and creators so that the people who are building the tools of today and tomorrow have an understanding of ethical best practices, and can share their own experiences.  We're also on the pulse of news and developments to share stories (subscribe or follow us for updates).
            </T>
            <T h4 mb={1 / 2}>Advocacy</T>
            <T content>
              Our goal is to ensure that policy decisions consider the well-being of Australian technology users, and preserve the integrity of public opinion by minimising artificial causes of polarisation.
            </T>
            <T content>
              To achieve this, we connect government with industry experts to encourage conversation and understanding so policy-makers have the support to make these well-informed decisions.
            </T>
          </Box>
        </Box>
      </Box>
      <Box className={[commonCss.contentWrapper, commonCss.__contrast]}>
        <Box className={[commonCss.contentInner, commonCss.__textContent, commonCss.section]}>
          <T h3 className={css.notchedHeading}>Who we are</T>
          <Box className={commonCss.indentedContented} mb={3}>
            <T content>
              We're just a handful of people who care about the survival of personal well-being and living in a thriving, cooperative society.
            </T>
            {/*<T content>*/}
            {/*  <Link to={ROUTE_PATHS.ROOT}>Meet the team</Link>*/}
            {/*</T>*/}
          </Box>
          <T content-feature>
            <strong>If you care about these things too</strong>, join our mailing list to keep
            up to date on what’s happening.
          </T>
          <T content-feature>
            <strong>If you’d like to get involved</strong>, <Link to={ROUTE_PATHS.CONTACT}>contact us</Link> to see how you can help.
          </T>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default Home;
