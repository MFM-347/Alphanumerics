const encode = (text: string): string => {
  if (!text) {
    return 'ERROR: text not found!';
  }
  return text
    .split(' ')
    .map((word) =>
      word
        .toLowerCase()
        .split('')
        .map((char) => {
          const charCode = char.charCodeAt(0);
          return charCode >= 97 && charCode <= 122 ? charCode - 96 : '';
        })
        .filter((n) => n)
        .join('-')
    )
    .join(' ');
};
const decode = (encodedText: string): string => {
  if (!encodedText) {
    return 'ERROR: encodedText not found!';
  }
  return encodedText
    .split(' ')
    .map((word) =>
      word
        .split('-')
        .map((num) => {
          const charCode = Number(num) + 96;
          return charCode >= 97 && charCode <= 122
            ? String.fromCharCode(charCode)
            : '';
        })
        .join('')
    )
    .join(' ');
};

export { encode, decode };
