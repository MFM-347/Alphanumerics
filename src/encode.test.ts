import { test, expect } from 'vitest';
import { encode } from './main';

let text = 'hello world!';

test('convert text string to alphanumeric', () => {
  expect(encode(text)).toBe('8-5-12-12-15 23-15-18-12-4');
});
