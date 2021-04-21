import ifUndef from '../utils/Data/ifUndef/ifUndef';

const IS_PROD = process?.env?.NODE_ENV === 'production';
export default {
  ENABLE_DEBUG: !IS_PROD,
  NODE_ENV: ifUndef(process?.env?.NODE_ENV, 'test'),
  IS_PROD,
  IS_DEV: process?.env?.NODE_ENV === 'development',
  IS_TEST: [process?.env?.NODE_ENV, undefined].indexOf('test') >= 0,
};
