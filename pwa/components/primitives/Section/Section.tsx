import React from 'react';

import Box from '../Box/';

import Theme from '../../../theme/Theme';
import { CompWithChildren } from '../../../../types/util/CompWithChildren';

import css from './Section.module.scss';
import { CompWithClassName } from '../../../../types/util/CompWithClassName';
import combineClassNames from '../../../../utils/Html/combineClassNames';

interface Props extends CompWithChildren, CompWithClassName {
  bgColor?: string,
  altPanel?: boolean,
  noVPad?: boolean,
}

const Section = (props: Props) => {
  const custClass = combineClassNames(
    [
      css.sectionCtnr,
      props.altPanel && css.__altPanel,
      !props.noVPad && css.__vPad,
    ],
    props.className,
  );
  const sectionCtnrStyle = React.useMemo(
    () => ({
      backgroundColor: props.bgColor,
    }),
    [props.bgColor],
  );

  return (
    <Box className={custClass} style={sectionCtnrStyle}>
      <Box className={css.sectionInner}>
        {props.children}
      </Box>
    </Box>
  );
};

export default Section;
