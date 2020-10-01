import { FC } from 'react';
import React from 'react';

import Box from '../Box';
import T from '../Typo';
import Icon from '../Icon';

import { LoadingTextProps } from './LoadingText.props';

import css from './LoadingText.module.scss';

const LoadingText: FC<LoadingTextProps> = ({
  text,
}: LoadingTextProps): ReturnType<typeof Box> => {
  return (
    <Box className={'flex --col --sec-center'}>
      <Icon icon="loading" small className={css.icon} />
      {text && (
        <T content-hint className={css['loading-text']}>
          {text}
        </T>
      )}
    </Box>
  );
};

export default React.memo(LoadingText);
