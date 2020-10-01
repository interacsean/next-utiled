import { FC } from 'react';
import React from 'react';
import { useRouter } from 'next/router';

import Box from '../Box';
import Tooltip, { TooltipProps } from '../Tooltip/Tooltip';

import css from './HelpIcon.module.scss';

type HelpIconProps = Omit<TooltipProps, 'children'> & {
  clickThroughPath?: string;
};

const HelpIcon: FC<HelpIconProps> = (
  props: HelpIconProps,
): ReturnType<typeof Box> => {
  const router = useRouter();

  const onClick = React.useCallback(
    () => props.clickThroughPath && router.push(props.clickThroughPath),
    [router],
  );

  return (
    <Tooltip
      tip={props.tip}
      wide={props.wide}
      className={props.className || css.tooltip}
    >
      <Box
        className={[
          css.clickTarget,
          props.clickThroughPath && css['--clickable'],
        ]}
        onClick={onClick}
      >
        <Box
          className={[css._icon, props.clickThroughPath && css['--clickable']]}
          tagName="span"
        >
          ?
        </Box>
      </Box>
    </Tooltip>
  );
};

export default HelpIcon;
