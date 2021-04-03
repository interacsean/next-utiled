import React, { FC, ReactElement } from 'react';

import { LogoProps } from './Logo.props';
import T from '../Typo';

import css from './Logo.module.scss';
import Box from '../Box';

const LogoView: FC<LogoProps> = (_props: LogoProps): ReactElement<'div'> => {
  return (
    <Box className={[css['logo-ctnr'], 'flex --sec-center']}>
      <T tagName="h3" className={css.text}>
        MentorMatchmaker
      </T>
    </Box>
  );
};

export default React.memo(LogoView);
