type options = {
  encodedText?: string
  text?: string
  delimiter?: string
  capitalizer?: string
  uppercase?: boolean
}
export const encode = (ops: options): string => {
  const { text, delimiter = '-', capitalizer = '', uppercase = false } = ops
  if (!text) return 'ERROR: text not found!'
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
        .join(delimiter),
    )
    .join(' ')
}
export const decode = (ops: options): string => {
  const { encodedText, delimiter = '-', capitalizer = '', uppercase = false } = ops
  if (!encodedText) return 'ERROR: encodedText not found!'
  return encodedText
    .split(' ')
    .map((word) =>
      word
        .split(delimiter)
        .map((code) => {
          if (code.startsWith(capitalizer)) {
            const parsed = parseInt(code.slice(capitalizer.length), 10)
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
