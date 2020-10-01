import { FC, ReactElement } from 'react';
import React from 'react';
import { flatten } from 'ramda';

import clx from '../../../../utils/Html/clx';

import { CardProps } from './Card.props';

import css from './Card.module.scss';
import { Optional } from 'errable';

const Card: FC<CardProps> = (props: CardProps): ReactElement<'div'> => {
  const classes = flatten([props.className]) as Optional<string>[];

  return (
    <div
      className={clx([
        ...classes,
        css.main,
        props['high-contrast'] && css['--var-high-contrast'],
        props.inset ? css['--var-inset'] : css['--var-card'],
        props.level2 && css['--level-2'],
        !props['no-radius'] && css['--default-radius'],
        !props['no-pad'] && css['--default-padding'],
      ])}
    >
      {props.children}
    </div>
  );
};

export default React.memo(Card);
