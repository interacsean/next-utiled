import { ChangeEvent, FC, ReactElement, useCallback, FocusEvent } from 'react';
import React from 'react';

import { Optional } from 'errable';
import Box from '../Box';
import { InputProps } from './Input.props';

import css from './Input.module.scss';
import clx from '../../../../utils/Html/clx';
import T from '../Typo';

const DEBOUNCE_TIMEOUT_MS = 500;

const Input: FC<InputProps> = ({
  inputRef,
  className,
  inputClassName,
  onChange,
  onBlur,
  inline,
  filled,
  icon,
  inputId,
  prefix,
  prefixWidthRem,
  error,
  noUnderline,
  noTypoStylesOnInput,
  debounce,
  noStyle,
  ...inputProps
}: InputProps): ReactElement<'div'> => {
  const [debounceTimerId, setDebounceTimerId] = React.useState<
    Optional<number>
  >(undefined);
  const classNames = (className && clx(className)) || undefined;
  const inputClassNames = (inputClassName && clx(inputClassName)) || undefined;
  const underline = !(filled || noUnderline);

  const onBlurCb = useCallback(
    (e: FocusEvent<HTMLInputElement>) => onBlur && onBlur(e.target.value, e),
    [onBlur],
  );

  const onChangeCb = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      onChange && onChange(e.target.value, e);
      if (debounce) {
        e.persist();
        // @ts-ignore (event type is a bit different)
        setDebounceTimerId(setTimeout(() => onBlurCb(e), DEBOUNCE_TIMEOUT_MS));
      }
    },
    [onChange, debounce, onBlurCb, setDebounceTimerId],
  );
  React.useEffect(() => () => clearTimeout(debounceTimerId), [debounceTimerId]);

  return (
    <>
      <Box
        className={[
          'flex --sec-center',
          classNames,
          css['input-ctnr'],
          !inline && css['--width-full'],
          filled && css['--filled'],
          underline && css['--underline'],
          inputProps.disabled && css['--disabled'],
        ]}
      >
        {prefix && (
          <T content-pragmatic anemic className={css.prefix}>
            {prefix}
          </T>
        )}
        <input
          ref={inputRef}
          type="text"
          className={clx([
            'flex-1',
            inputClassNames,
            css['input'],
            !noTypoStylesOnInput && css['--with-typo'],
            !prefix ? css['--no-prefix'] : '',
            !inputProps.disabled && !noStyle && css['--enabled'],
            inputProps.disabled && !noStyle && css['--disabled'],
          ])}
          style={
            prefixWidthRem
              ? {
                  paddingLeft: `${prefixWidthRem}rem`,
                }
              : {}
          }
          onChange={onChangeCb}
          onBlur={onBlurCb}
          id={inputId}
          {...inputProps}
        />
        {!icon ? null : <Box className={css['icon-ctnr']}>{icon}</Box>}
      </Box>
      {error && (
        <T content-detail anemic className={['text-error', css['error-text']]}>
          {error}
        </T>
      )}
    </>
  );
};

export default React.memo(Input);
