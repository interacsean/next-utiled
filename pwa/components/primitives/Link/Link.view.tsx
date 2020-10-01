import React, { FC } from 'react';
import { pipe } from 'ramda';
import { useRouter } from 'next/router';
import NextLink, { LinkProps } from 'next/link';
import { Optional } from 'errable';

import { LinkProps as AppLinkProps } from './Link.props';
import clx from '../../../../utils/Html/clx';
import orUndef from '../../../../utils/Data/orUndef/orUndef';
import buildQueryString from '../../../../utils/String/buildQueryString';

const useIsActive = (testPath: string): boolean =>
  testPath.length <= 2
    ? testPath === useRouter()?.pathname
    : useRouter()?.pathname.startsWith(testPath);

const Link: FC<AppLinkProps> = ({ children, ...props }: AppLinkProps) => {
  const className = props.className === undefined ? 'link' : props.className;
  const activeClass = orUndef(
    props.activeClass && useIsActive(props.to) && props.activeClass,
  );

  const payload = props.payload;
  const query = props.query;
  const vAs: Optional<string> = !payload
    ? undefined
    : pipe(
        () =>
          Object.keys(payload).reduce(
            (acc: string, elem: string) =>
              acc.replace(
                `[${elem}]`,
                props?.payload?.[elem]?.toString() || '',
              ),
            props.to,
          ),
        (payloadAs) =>
          !query ? payloadAs : `${payloadAs}?${buildQueryString(query)}`,
      )();

  const href = !query ? props.to : { pathname: props.to, query: query };

  const nextLinkProps: LinkProps = {
    href,
    as: vAs,
    // @ts-ignore
    ...(props.onClick ? { linkClicked: props.onClick } : {}),
  };

  return (
    <NextLink {...nextLinkProps}>
      {typeof children === 'string' ? (
        <a className={clx([className, activeClass])}>{children}</a>
      ) : (
        children
      )}
    </NextLink>
  );
};

export default React.memo(Link);
