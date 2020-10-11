import { FC } from 'react';
import React from 'react';

import Box from '../Box';
import T from '../Typo';

import css from './Hr.module.scss';
import clx from '../../../../utils/Html/clx';

type HrProps = {
  stumpy?: boolean;
};

const Hr: FC<HrProps> = (props: HrProps): ReturnType<typeof Box> => {
  return <hr className={clx([css.hr, props.stumpy && css.__stumpy])} />;
};

export default Hr;
