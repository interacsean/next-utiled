import React from 'react';

export interface ButtonPublicProps<A extends any[]> {
  text?: string;
  children?: React.ReactNode;
  onClick?: (...args: A) => void;
  onClickParams?: A;
  className?: string;
  icon?: React.ReactNode;
  buttonRef?: React.Ref<any>;

  secondary?: boolean;
  tertiary?: boolean;
  outline?: boolean;
  small?: boolean;
  'x-small'?: boolean;
  large?: boolean;
  disabled?: boolean;
  loading?: boolean;
  'full-width'?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export interface ButtonProps<A extends any[]> extends ButtonPublicProps<A> {}
