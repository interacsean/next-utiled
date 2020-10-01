import React from 'react';
import Stories from '../../stories';
import Story from '../../../../pwa/components/primitives/Story/Story.view';
import T from '../../../../pwa/components/primitives/Typo';
import Box from '../../../../pwa/components/primitives/Box';

import css from './pad.module.scss';
import GridCols from '../../../../pwa/components/primitives/GridCols';
import Link from '../../../../pwa/components/primitives/Link/Link.view';

export default () => (
  <Stories>
    <T h3>Used in styling</T>
    <GridCols>
      <Story title="$pad" className="_cols-4">
        <Box className={css.pad}>
          <pre>padding: $pad</pre>
          <T>= 16px</T>
        </Box>
      </Story>
      <Story title="$pad-2" className="_cols-4">
        <Box className={css.pad2}>
          <pre>padding: $pad-2</pre>
          <T>~= 25.89px</T>
        </Box>
      </Story>
      <Story title="$pad-3" className="_cols-4">
        <Box className={css.pad3}>
          <pre>padding: $pad-3</pre>
          <T>~= 41.89px</T>
        </Box>
      </Story>
      <Story title="$pad-4" className="_cols-4">
        <Box className={css.pad4}>
          <pre>padding: $pad-4</pre>
          <T>~= 67.77px</T>
        </Box>
      </Story>
    </GridCols>
    <T h3>Fractional padding</T>
    <GridCols>
      <Story
        title="$pad-1-2"
        className="_cols-4"
        desc="$pad-1-2 is the golden fraction of $pad"
      >
        <Box className={css.pad1_2}>
          <pre>padding: $pad-1-2</pre>
          <T>~= 9.89px</T>
        </Box>
      </Story>
      <Story
        title="$pad-1-3"
        className="_cols-4"
        desc="$pad-1-3 is the golden fraction of $pad-1-2"
      >
        <Box className={css.pad1_3}>
          <pre>padding: $pad-1-3</pre>
          <T>~= 6.11px</T>
        </Box>
      </Story>
      <Story title="$pad-1-4" className="_cols-4">
        <Box className={css.pad1_4}>
          <pre>padding: $pad-1-4</pre>
          <T>~= 3.77px</T>
        </Box>
      </Story>
    </GridCols>
    <T h3>As Box props</T>
    <Link to="/stories/theme/box">View the Box story for more</Link>
  </Stories>
);
