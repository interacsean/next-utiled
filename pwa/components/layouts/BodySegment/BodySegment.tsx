import { FC } from 'react';
import React from 'react';

import { CompWithChildren } from '../../../../types/util/CompWithChildren';
import { CompWithClassName } from '../../../../types/util/CompWithClassName';
import combineClassNames from '../../../../utils/Html/combineClassNames';
import getUtilClasses, { UtilProps } from '../../../../utils/Html/getUtilClasses';
import Box from '../../primitives/Box';
import T from '../../primitives/Typo';

import css from './BodySegment.module.scss';

interface BoxSegmentProps extends CompWithChildren, CompWithClassName, UtilProps {
  heading: string;
  bodyFormatted?: boolean;
  noLine?: boolean;
}

const BodySegment: FC<BoxSegmentProps> = (
  props: BoxSegmentProps,
): ReturnType<typeof Box> => {
  const utilClasses = getUtilClasses(props);
  const cn = combineClassNames([css.container, ...utilClasses], props.className);

  return (
    <Box className={cn}>
      <Box className={css._heading}>
        <T h3 className={css._text} mb={1 / 4}>{props.heading}</T>
      </Box>
      <Box className={[css._body, !props.noLine && css.__withLine, props.bodyFormatted && 'formatted-content']}>
        {props.children}
      </Box>
    </Box>
  );
};

export default BodySegment;
