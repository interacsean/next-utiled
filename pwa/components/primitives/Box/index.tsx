import React, { FC, ReactElement } from 'react';
import { omit } from 'ramda';

import { BoxProps } from './Box.props';
import clx from '../../../../utils/Html/clx';
import orUndef from '../../../../utils/Data/orUndef/orUndef';
import getUtilClasses from '../../../../utils/Html/getUtilClasses';

const NON_TAG_PROPS = [
  'mt',
  'mr',
  'mb',
  'ml',
  'mh',
  'mv',
  'pt',
  'pr',
  'pb',
  'pl',
  'ph',
  'pv',
  'p',
  'h',
];

const Box: FC<BoxProps> = ({
  className,
  flex: flex,
  'flex-1': flex1,
  'flex-col': flexCol,
  'flex-center': flexCenter,
  'flex-wrap': flexWrap,
  'inline-block': inlineBlock,
  'flex-pri': flexPri,
  'flex-sec': flexSec,
  children,
  tagName,
  ...props
}: BoxProps): ReactElement<'div'> => {
  const Tag = tagName || 'div';
  const utilClasses = getUtilClasses(props);

  const tagProps = omit(NON_TAG_PROPS, props);

  return (
    // @ts-ignore
    <Tag
      className={clx([
        className && clx(className),
        orUndef(
          (flex || flexCol || flexCenter || flexPri || flexSec || flexWrap) &&
            'flex',
        ),
        orUndef(flexCol && '--col'),
        orUndef(flexCenter && '--center'),
        orUndef(flexWrap && '--wrap'),
        orUndef(flexPri && `--pri-${flexPri}`),
        orUndef(flexSec && `--sec-${flexSec}`),
        orUndef(flex1 && 'flex-1'),
        orUndef(inlineBlock && 'inline-block'),
        ...utilClasses,
      ])}
      {...tagProps}
    >
      {children || null}
    </Tag>
  );
};

export default React.memo(Box);
