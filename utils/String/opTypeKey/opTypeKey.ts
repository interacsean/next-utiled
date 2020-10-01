const opTypeKey = (opType: 'call' | 'put') => opType[0] as 'c' | 'p';

opTypeKey.CALL = 'c' as 'c';
opTypeKey.PUT = 'p' as 'p';

export default opTypeKey;
