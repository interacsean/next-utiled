import React, { ReactElement } from 'react';

import orUndef from '../../../../utils/Data/orUndef/orUndef';
import clx from '../../../../utils/Html/clx';

import { ButtonProps } from './Button.props';

import css from './Button.module.scss';
import Icon from '../Icon';
import Box from '../Box';

const Button = <A extends any[]>(
  props: ButtonProps<A>,
): ReactElement<'div'> => {
  if (!props.text && !props.children) {
    throw new Error('Button requires either `text` or `children` prop');
  }
  const onClickHandler = React.useCallback(
    () =>
      !props.disabled && props.onClick
        ? props.onClick(...(((props?.onClickParams || []) as unknown) as A))
        : null,
    [props.onClick, props.disabled, ...(props?.onClickParams || [])],
  );
  const child = props.children || <span>{props.text}</span>;

  return (
    <button
      onClick={onClickHandler}
      className={clx([
        css['button-main'],
        props.className,
        props.secondary && css['--style-secondary'],
        props.tertiary && css['--style-tertiary'],
        props.outline && css['--style-outline'],
        props.large && css['--size-large'],
        props.small && css['--size-small'],
        props['x-small'] && css['--size-x-small'],
        props.disabled && css['--state-disabled'],
        props['full-width'] && css['--var-full-width'],
      ])}
      ref={props.buttonRef}
      disabled={props.disabled}
      type={props.type}
    >
      {props.loading && (
        <Box flex className={['--center', css['loading-indicator']]}>
          <Icon icon="loading" />
        </Box>
      )}
      <span
        className={clx([
          css.buttonContent,
          orUndef(props.loading && css['--loading']),
        ])}
      >
        {child}
      </span>
    </button>
  );
};

export default React.memo(Button);
