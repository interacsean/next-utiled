import React, { ChangeEvent, FocusEvent, Ref } from 'react';

// import { CompWithChildren } from '../../../types/util/CompWithChildren';

type HTMLInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface InputPublicProps
  extends Omit<HTMLInputProps, 'className' | 'onChange' | 'onBlur'> {
  inputRef?: Ref<any>;
  className?: string | (string | undefined | false)[];
  inputClassName?: string | (string | undefined | false)[];
  onChange?: (val: string, evt: ChangeEvent<HTMLInputElement>) => void;
  noTypoStylesOnInput?: boolean;
  onBlur?: (val: string, evt: FocusEvent<HTMLInputElement>) => void;
  inline?: boolean;
  filled?: boolean;
  noUnderline?: boolean;
  icon?: React.ReactNode;
  inputId?: string;
  prefix?: string;
  prefixWidthRem?: number;
  error?: string;
  debounce?: boolean;
  noStyle?: boolean;
}

export interface InputProps extends InputPublicProps {}
