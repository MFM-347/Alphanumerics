export const encode = (
  text: string,
  delimitter: string,
  capitalizer: string,
  uppercase: boolean = false,
): string => {
  if (!text) return 'ERROR: text not found!'
  if (!delimitter) return 'ERROR: delimitterer not found!'
  return text
    .split(' ')
    .map((word) =>
      word
        .split('')
        .map((char) => {
          const charCode = char.toLowerCase().charCodeAt(0)
          if (charCode >= 97 && charCode <= 122) {
            const num = charCode - 96
            if (uppercase) {
              return char === char.toLowerCase() ? capitalizer + num : num.toString()
            } else {
              return char === char.toUpperCase() ? capitalizer + num : num.toString()
            }
          }
          return ''
        })
        .filter(Boolean)
        .join(delimitter),
    )
    .join(' ')
}
export const decode = (
  encodedText: string,
  delimitter: string,
  capitalizer: string,
  uppercase: boolean = false,
): string => {
  if (!encodedText) return 'ERROR: encodedText not found!'
  if (!delimitter) return 'ERROR: delimitterer not found!'
  return encodedText
    .split(' ')
    .map((word) =>
      word
        .split(delimitter)
        .map((code) => {
          if (code.startsWith(capitalizer)) {
            const parsed = parseInt(code.slice(1), 10)
            if (isNaN(parsed)) return ''
            const charCode = parsed + 96
            return charCode >= 97 && charCode <= 122
              ? uppercase
                ? String.fromCharCode(charCode)
                : String.fromCharCode(charCode).toUpperCase()
              : ''
          } else {
            const parsed = parseInt(code, 10)
            if (isNaN(parsed)) return ''
            const charCode = parsed + 96
            return charCode >= 97 && charCode <= 122
              ? uppercase
                ? String.fromCharCode(charCode).toUpperCase()
                : String.fromCharCode(charCode)
              : ''
          }
        })
        .join(''),
    )
    .join(' ')
}
