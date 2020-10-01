import { FC } from 'react';
import React from 'react';

import Box from '../Box';
import T from '../Typo';

import css from './Hr.module.scss';

type HrProps = {};

const Hr: FC<HrProps> = (props: HrProps): ReturnType<typeof Box> => {
  return <hr className={css.hr} />;
};

export default Hr;
