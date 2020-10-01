import { FC } from 'react';
import React from 'react';

import { CompWithChildren } from '../../../../types/util/CompWithChildren';
import Box from '../Box';
import T from '../Typo';

import css from './FieldSet.module.scss';
import { CompWithClassName } from '../../../../types/util/CompWithClassName';
import combineClassNames from '../../../../utils/Html/combineClassNames';
import Tooltip from '../Tooltip';
import HelpIcon from '../HelpIcon';

interface FieldSetProps extends CompWithChildren, CompWithClassName {
  title: string;
  helpIconText?: string;
  helpClickThroughPath?: string;
  'no-pad'?: boolean;
}

const FieldSet: FC<FieldSetProps> = (
  props: FieldSetProps,
): ReturnType<typeof Box> => {
  const className = combineClassNames(
    [css.container, !props['no-pad'] && css['--padded']],
    props.className,
  );

  return (
    <Box tagName="fieldset" className={className}>
      <T content-fields-set-label tagName="legend" className={css._title}>
        {props.title}
        {props.helpIconText && (
          <HelpIcon
            tip={props.helpIconText}
            clickThroughPath={props.helpClickThroughPath}
            className={css._helpIcon}
            wide
          />
        )}
      </T>
      <Box className={css._children}>{props.children}</Box>
    </Box>
  );
};

export default FieldSet;
