function objectEntries<K extends string | number, T>(
  obj: Record<K, T>,
): [K, T][] {
  // @ts-ignore (seems correct)
  return Object.keys(obj).map((key: keyof O) => [key, obj[key]]);
}

export default objectEntries;
