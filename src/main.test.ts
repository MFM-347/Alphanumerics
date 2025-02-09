import { test, expect } from 'vitest'
import { encode, decode } from './main'

function on() {
  const text = 'Hello World!'
  test('convert text string to alphanumeric', () => {
    expect(encode(text, '-', '^')).toBe('^8-5-12-12-15 ^23-15-18-12-4')
  })
  const encodedText = '^8-5-12-12-15 ^23-15-18-12-4'
  test('convert alphanumeric string to text', () => {
    expect(decode(encodedText, '-', '^')).toBe('Hello World')
  })
}
on()
function off() {
  const text = 'hELLO wORLD!'
  test('convert text string to alphanumeric', () => {
    expect(encode(text, '-', '^', true)).toBe('^8-5-12-12-15 ^23-15-18-12-4')
  })
  const encodedText = '^8-5-12-12-15 ^23-15-18-12-4'
  test('convert alphanumeric string to text', () => {
    expect(decode(encodedText, '-', '^', true)).toBe('hELLO wORLD')
  })
}
off()
