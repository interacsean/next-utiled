import { FC } from 'react';
import React from 'react';

import Box from '../Box';
import T from '../Typo';

import { CompWithChildren } from '../../../../types/util/CompWithChildren';
import { CompWithClassName } from '../../../../types/util/CompWithClassName';
import combineClassNames from '../../../../utils/Html/combineClassNames';

import css from './InputLabelInline.module.scss';

interface InputLabelInlineProps extends CompWithChildren, CompWithClassName {
  label: string;
  disabled?: boolean;
}

const InputLabelInline: FC<InputLabelInlineProps> = (
  props: InputLabelInlineProps,
): ReturnType<typeof Box> => {
  return (
    <Box inline-block className={props.className}>
      <T
        content-field-label-inline
        anemic
        className={[css.label, props.disabled && css['--disabled']]}
      >
        {props.label}
      </T>
      {props.children}
    </Box>
  );
};

export default InputLabelInline;
