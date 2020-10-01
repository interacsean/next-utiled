import React from 'react';

import clx from '../../../../utils/Html/clx';

import css from './TextDivider.module.scss';

type Props = {
  'no-pad'?: boolean;
};

const TextDivider = (props: Props) => (
  <span
    className={clx([
      css['price-divider'],
      !props['no-pad'] && css['--default-pad'],
    ])}
  >
    /
  </span>
);

export default TextDivider;
