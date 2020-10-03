import { ObjRecord } from '../../types/util/ObjRecord';

const buildQueryString = (params: ObjRecord<string | number>) =>
  Object.keys(params)
    .map((k) => {
      const v = params[k];
      return k && v && encodeURIComponent(k) + '=' + encodeURIComponent(v);
    })
    .join('&');

export default buildQueryString;
