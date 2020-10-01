import { Optional } from 'errable';
import forceArray from '../Data/forceArray/forceArray';

const combineClassNames = (
  localClassNames: (string | undefined | false)[],
  propsClassName: Optional<string | (string | undefined | false)[]>,
) =>
  localClassNames.concat(
    forceArray<string | false | undefined>(propsClassName),
  );

export default combineClassNames;
