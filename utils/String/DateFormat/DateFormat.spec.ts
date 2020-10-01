import * as DateFormat from './DateFormat';

describe('utils/String/DateFormat/DateFormat', () => {
  const fixture = {};

  describe('codeToExp', () => {
    test('Feb 1 1998', () => {
      const fix = '19980201';
      const expected = '1 Feb 1998';

      const result: string = DateFormat.codeToExp(fix);

      expect(result).toEqual(expected);
    });
    test('Nov 28 2005', () => {
      const fix = '20051128';
      const expected = '28 Nov 2005';

      const result: string = DateFormat.codeToExp(fix);

      expect(result).toEqual(expected);
    });
    test('Dec 30 2025', () => {
      const fix = '20251230';
      const expected = '30 Dec 2025';

      const result: string = DateFormat.codeToExp(fix);

      expect(result).toEqual(expected);
    });
  });

  describe('expToCode, from short year', () => {
    test('Feb 1 1998', () => {
      const fix = '1 Feb 98';
      const expected = '19980201';

      const result: string = DateFormat.expToCode(fix);

      expect(result).toEqual(expected);
    });
    test('Nov 28 2005', () => {
      const fix = '28 Nov 05';
      const expected = '20051128';

      const result: string = DateFormat.expToCode(fix);

      expect(result).toEqual(expected);
    });
    test('Dec 30 2025', () => {
      const fix = '30 Dec 25';
      const expected = '20251230';

      const result: string = DateFormat.expToCode(fix);

      expect(result).toEqual(expected);
    });
  });

  describe('expToCode', () => {
    test('Feb 1 1998', () => {
      const fix = '1 Feb 1998';
      const expected = '19980201';

      const result: string = DateFormat.expToCode(fix);

      expect(result).toEqual(expected);
    });
    test('Nov 28 2005', () => {
      const fix = '28 Nov 2005';
      const expected = '20051128';

      const result: string = DateFormat.expToCode(fix);

      expect(result).toEqual(expected);
    });
    test('Dec 30 2025', () => {
      const fix = '30 Dec 2025';
      const expected = '20251230';

      const result: string = DateFormat.expToCode(fix);

      expect(result).toEqual(expected);
    });
  });
});
