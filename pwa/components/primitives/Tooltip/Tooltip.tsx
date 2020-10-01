import React, { FC } from 'react';

import { CompWithChildren } from '../../../../types/util/CompWithChildren';
import { CompWithClassName } from '../../../../types/util/CompWithClassName';

import combineClassNames from '../../../../utils/Html/combineClassNames';
import Box from '../Box';

import css from './Tooltip.module.scss';

export interface TooltipProps extends CompWithChildren, CompWithClassName {
  tip: string | React.ReactNode;
  wide?: boolean;
  right?: boolean;
  left?: boolean;
  bottom?: boolean;
  'bottom-left'?: boolean;
}

const Tooltip: FC<TooltipProps> = (
  props: TooltipProps,
): ReturnType<typeof Box> => {
  const classNames = combineClassNames([css.container], props.className);
  const posTop =
    !props.bottom && !props.left && !props.right && !props['bottom-left'];
  return (
    <Box className={classNames} inline-block>
      {props.children}
      <Box
        className={[
          css.tooltip,
          typeof props.tip === 'string' && css['--basic'],
          props.wide && css['--wide'],
          props.right && css['--pos-right'],
          props.left && css['--pos-left'],
          props.bottom && css['--pos-bottom'],
          props['bottom-left'] && css['--pos-bottomLeft'],
          posTop && css['--pos-top'],
        ]}
      >
        {props.tip}
      </Box>
    </Box>
  );
};

export default Tooltip;
