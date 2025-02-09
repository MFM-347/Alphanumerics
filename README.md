# Alphanumerics

[![Version](https://img.shields.io/npm/v/alphanumerics.svg)](https://www.npmjs.com/package/alphanumerics)
[![Downloads](https://img.shields.io/npm/dm/alphanumerics.svg)](https://www.npmjs.com/package/alphanumerics)
[![Number of GitHub contributors](https://img.shields.io/github/contributors/MFM-347/alphanumerics)](https://github.com/MFM-347/alphanumerics/graphs/contributors)
[![GitHub commit activity](https://img.shields.io/github/commit-activity/m/MFM-347/alphanumerics)](https://github.com/MFM-347/alphanumerics/)
[![Number of GitHub stars](https://img.shields.io/github/stars/MFM-347/alphanumerics)](https://github.com/MFM-347/alphanumerics/stargazers)
[![License MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/MFM-347/alphanumerics/blob/main/LICENSE)

`alphanumerics` is a simple JavaScript library that provides two core functions: `encode` and `decode`. The `encode` function converts plain text into a numeric representation, while the `decode` function transforms the encoded text back into the original string.

## Features

- **encode**: Converts each letter of a word into its corresponding alphabetic position (e.g., `a` becomes `1`, `b` becomes `2`, etc.).
- **decode**: Converts a numeric alphabetic position back into the corresponding character.
- Customizable delimiter for separating numbers
- Support for marking capitalized letters
- Flexible uppercase/lowercase handling
- Handles spaces between words and returns text in a readable format

## Installation

You can install the package via npm:

```bash
npm install alphanumerics
```

## Usage

### Basic Encoding and Decoding

```javascript
import { encode, decode } from 'alphanumerics'

// Basic usage with default settings
const encodedText = encode('Hello World', '-', '*')
console.log(encodedText)
// Output: "*8-5-12-12-15 23-15-18-12-4"

const decodedText = decode('*8-5-12-12-15 23-15-18-12-4', '-', '*')
console.log(decodedText)
// Output: "Hello World"

// Using different delimiter and capitalizer
const customEncoded = encode('Hello World', '/', '#')
console.log(customEncoded)
// Output: "#8/5/12/12/15 23/15/18/12/4"

// Using uppercase mode
const uppercaseEncoded = encode('Hello World', '-', '*', true)
console.log(uppercaseEncoded)
// Output: "8-5-12-12-15 *23-15-18-12-4"
```

## API

### `encode(text: string, delimitter: string, capitalizer: string, uppercase?: boolean): string`

- **Description**: Converts a string into its alphabetic numeric representation.
- **Parameters**:
  - `text` (string): The plain text to be encoded.
  - `delimitter` (string): The character used to separate numbers in the encoded output.
  - `capitalizer` (string): The character used to mark capitalized letters.
  - `uppercase` (boolean, optional): When true, reverses the capitalization marking behavior. Defaults to false.
- **Returns**: A string of numeric values separated by the specified delimiter, where each value represents the position of a letter in the alphabet.
- **Error handling**: Returns error message if text or delimiter is not provided.

### `decode(encodedText: string, delimitter: string, capitalizer: string, uppercase?: boolean): string`

- **Description**: Converts an encoded numeric string back into the original text.
- **Parameters**:
  - `encodedText` (string): The encoded numeric string to decode.
  - `delimitter` (string): The character that separates numbers in the encoded input.
  - `capitalizer` (string): The character that marks capitalized letters.
  - `uppercase` (boolean, optional): When true, reverses the capitalization behavior. Defaults to false.
- **Returns**: The original text with proper capitalization.
- **Error handling**: Returns error message if encodedText or delimiter is not provided.

## Contributing

We welcome contributions! Please check the [CONTRIBUTING.md](https://github.com/MFM-347/Alphanumerics/blob/main/CONTRIBUTING.md) for guidelines.

## Credits

Created with ❤️ by [@MFM-347](https://github.com/mfm-347).

## License

The code in this repository is licensed under the **MIT License**.

[![License MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
