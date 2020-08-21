# deno_text_indent

[![tag](https://img.shields.io/github/release/justjavac/deno_text_indent)](https://github.com/justjavac/deno_text_indent/releases)
[![Build Status](https://github.com/justjavac/deno_text_indent/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_text_indent/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_text_indent)](https://github.com/justjavac/deno_text_indent/blob/master/LICENSE)

Sets the length of empty space (indentation) that is put before lines of text in a block.

## Usage

```js
import indent from 'https://deno.land/x/text_indent/mod.ts';

indent('Lorem ipsum dolor sit amet,\nconsectetur adipisicing elit,\nsed do eiusmod tempor incididunt.', 2);
```

Results in:

```
  Lorem ipsum dolor sit amet,
  consectetur adipisicing elit,
  sed do eiusmod tempor incididunt.
```

## Example

```bash
deno run https://deno.land/x/text_indent/example.ts
```

## License

[deno_text_indent](https://github.com/justjavac/deno_text_indent) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
