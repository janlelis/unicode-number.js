# unicode-number.js [![[ci]](https://github.com/janlelis/unicode-number/workflows/Test/badge.svg)](https://github.com/janlelis/unicode-number/actions?query=workflow%3ATest)

Convert a Unicode character into its numeric value.

Unicode version: **16.0.0** (September 2024)

## Install

Use npm or your favorite package manager to install this module:

```sh
npm install unicode-number
```

## Usage

### `unicodeNumber(char)`

```js
import { unicodeNumber } from "unicode-number";

unicodeNumber("1"); // 1
unicodeNumber("Ⅷ"); // 8
unicodeNumber("⓳"); // 19
unicodeNumber("¾"); // 0.75
unicodeNumber("༳"); // -0.5
unicodeNumber("𑿀"); // 0.003125
unicodeNumber("𖭡"); // 1000000000000
unicodeNumber("五"); // 5
unicodeNumber("𜳷"); // 7
unicodeNumber("A"); // undefined
```

### `unicodeNumberString(char)`

```js
import { unicodeNumberString } from "unicode-number";

unicodeNumberString("1"); // "1"
unicodeNumberString("Ⅷ"); // "8"
unicodeNumberString("⓳"); // "19"
unicodeNumberString("¾"); // "3/4"
unicodeNumberString("༳"); // "-1/2"
unicodeNumberString("𑿀"); // "1/320"
unicodeNumberString("𖭡"); // "1000000000000"
unicodeNumberString("五"); // "5"
unicodeNumberString("𜳷"); // "7"
unicodeNumberString("A"); // undefined
```

### `listUnicodeNumberCharacters()`

```js
listUnicodeNumberCharacters()
['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '²', …]
```

See a list of all numbers in Unicode: [character.construction/numbers](https://character.construction/numbers)

## MIT License

- Copyright (C) 2024 Jan Lelis <https://janlelis.com>. Released under the MIT license.
- Unicode data: https://www.unicode.org/copyright.html#Exhibit1
