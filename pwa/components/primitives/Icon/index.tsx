import React, { FC, ReactElement } from 'react';

import clx from '../../../../utils/Html/clx';

import AppleIcon from '../../../../public/images/icons/apple.svg'
import CloseIcon from '../../../../public/images/icons/close.svg';
import LoadingIcon from '../../../../public/images/icons/loading.svg';
// import StrategyDoubleDiagonalSpread from '../../../../public/images/icons/strategy-double-diagonal-spread.svg';

import { IconProps } from './Icon.props';

import css from './Icon.module.scss';

export const validIconMap = {
  apple: AppleIcon,
  close: CloseIcon,
  loading: LoadingIcon,
};

const Icon: FC<IconProps> = (props: IconProps) => {
  const IconSvg = validIconMap[props.icon];

  return !IconSvg ? null : (
    <span
      className={clx([
        css.icon,
        props.ctnrClassName,
        props.small && css['--size-small'],
        props.large && css['--size-large'],
        !props.small && !props.large && !props.noSize && css['--size-medium'],
      ])}
      {...(props.onClick ? { onClick: props.onClick } : {})}
    >
      <IconSvg className={clx([props.className, css.img])} />
    </span>
  );
};

export default React.memo(Icon);
