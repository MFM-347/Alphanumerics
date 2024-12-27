import { test, expect } from 'vitest';
import { decode } from './main';

let encodedText = '8-5-12-12-15 23-15-18-12-4';

test('convert alphanumeric string to text', () => {
  expect(decode(encodedText)).toBe('hello world');
});
