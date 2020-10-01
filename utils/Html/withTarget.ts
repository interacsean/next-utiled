import { useCallback } from 'react';

type E = {
  target: {
    value: string;
  };
};

export default function withTarget<R>(handler: (val: string) => R) {
  return useCallback((e: E) => handler(e.target.value), [handler]);
}
