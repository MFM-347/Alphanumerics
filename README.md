# Alphanumerics

`alphanumerics` is a simple JavaScript library that provides two core functions: `encode` and `decode`. The `encode` function converts plain text into a numeric representation, while the `decode` function transforms the encoded text back into the original string.

## Features

- **encode**: Converts each letter of a word into its corresponding alphabetic position (e.g., `a` becomes `1`, `b` becomes `2`, etc.).
- **decode**: Converts a numeric alphabetic position back into the corresponding character.
- Handles spaces between words and returns text in a readable format.

## Installation

You can install the package via npm:

```bash
npm install alphanumerics
```

## Usage

### Encoding Text

```javascript
import { encode } from 'alphanumerics';

const encodedText = encode('hello world');
console.log(encodedText);
// Output: "8-5-12-12-15 23-15-18-12-4"
```

### Decoding Text

```javascript
import { decode } from 'alphanumerics';

const decodedText = decode('8-5-12-12-15 23-15-18-12-4');
console.log(decodedText);
// Output: "hello world"
```

## API

### `encode(text: string): string`

- **Description**: Converts a string into its alphabetic numeric representation.
- **Parameters**:
  - `text` (string): The plain text to be encoded.
- **Returns**: A string of numeric values, separated by hyphens (`-`), where each value represents the position of a letter in the alphabet.

### `decode(encodedText: string): string`

- **Description**: Converts an encoded numeric string back into the original text.
- **Parameters**:
  - `encodedText` (string): The encoded numeric string to decode.
- **Returns**: The original text.

## Contributing

We welcome contributions! Please check the [CONTRIBUTING.md](https://github.com/MFM-347/Alphanumerics/blob/main/CONTRIBUTING.md) for guidelines.

## Credits

Created with ❤️ by [@MFM-347](https://github.com/mfm-347).

## License

The code in this repository is licensed under the **MIT License**.

[![License MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
