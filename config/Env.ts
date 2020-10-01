import ifUndef from '../utils/Data/ifUndef/ifUndef';

const IS_PROD = process?.env?.NODE_ENV === 'production';
const IS_DEV = process?.env?.NODE_ENV === 'development';
const IS_TEST = [process?.env?.NODE_ENV, undefined].indexOf('testing') >= 0;

export default {
  // vars with defaults
  TEST_OFFLINE: Boolean(
    ifUndef<string | boolean>(process?.env?.test_offline, false),
  ),

  GLOBAL_CACHE: Boolean(
    ifUndef<string | boolean>(process?.env?.global_cache, true),
  ),
  USE_CACHE_FUNCS: Boolean(
    ifUndef<string | boolean>(process?.env?.use_cache_funcs, true),
  ),
  USE_CACHE_REQ: Boolean(
    ifUndef<string | boolean>(process?.env?.use_cache_req, true),
  ),
  ENABLE_DEBUG: !IS_PROD,

  NODE_ENV: ifUndef(process?.env?.NODE_ENV, 'testing'),

  IS_PROD,
  IS_DEV,
  IS_TEST,
};
