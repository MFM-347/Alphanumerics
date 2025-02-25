import { test, expect, describe } from 'vitest'
import { encode, decode } from './main'

describe('Encoding and Decoding Tests', () => {
  describe('uppercase on tests', () => {
    const text = 'Hello World!'
    const encodedText = '^8=5=12=12=15 ^23=15=18=12=4'
    test('convert text string to alphanumeric', () => {
      expect(encode({ text, delimiter: '=', capitalizer: '^' })).toBe(encodedText)
    })
    test('convert alphanumeric string to text', () => {
      expect(decode({ encodedText, delimiter: '=', capitalizer: '^' })).toBe('Hello World')
    })
  })
  describe('uppercase off tests', () => {
    const text = 'hELLO wORLD!'
    const encodedText = '^8=5=12=12=15 ^23=15=18=12=4'
    test('convert text string to alphanumeric (uppercase enabled)', () => {
      expect(encode({ text, delimiter: '=', capitalizer: '^', uppercase: true })).toBe(encodedText)
    })
    test('convert alphanumeric string to text (uppercase enabled)', () => {
      expect(decode({ encodedText, delimiter: '=', capitalizer: '^', uppercase: true })).toBe(
        'hELLO wORLD',
      )
    })
  })
})
