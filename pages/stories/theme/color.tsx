import React from 'react';

import Story from '../../../pwa/components/primitives/Story/Story.view';
import Box from '../../../pwa/components/primitives/Box';
import Stories from '../index';

import css from './color.module.scss';
import GridCols from '../../../pwa/components/primitives/GridCols';

export default () => (
  <Stories>
    <GridCols>
      <Story title={'$col-neutral'} className="_cols-4">
        <Box className={css.colBgPanelContrast}>-</Box>
      </Story>
      <Story title={'$col-neutral-a20'} className="_cols-4">
        <Box className={css.colBgPanelContrastA20}>-</Box>
      </Story>
      <Story title={'$col-neutral-a08'} className="_cols-4">
        <Box className={css.colBgPanelContrastA08}>-</Box>
      </Story>
      <Story title={'$col-neutral-dk35'} className="_cols-4">
        <Box className={css.colBgPanelContrastDk35}>-</Box>
      </Story>
    </GridCols>
  </Stories>
);
