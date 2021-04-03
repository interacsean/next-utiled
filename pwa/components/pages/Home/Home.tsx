import { NextPage } from 'next';
import React from 'react';

import MainLayout from '../../layouts/MainLayout';
import T from '../../primitives/Typo';

import Section from '../../primitives/Section/Section';

type HomePublicProps = {};

const Home: NextPage<HomePublicProps> = (
  _props: HomePublicProps,
) => {
  return (
    <MainLayout>
      <Section>
        <T>Hi</T>
      </Section>
      <Section altPanel>
        <T>Hi</T>
      </Section>
    </MainLayout>
  );
};

export default Home;
