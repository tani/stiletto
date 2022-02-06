# Stiletto

Given HTML, stiletto will inline your CSS properties into the style attribute.

## Installation

```
$ npm i stiletto

```

## Usage

```javascript
import * as stiletto from "stiletto"
const html = "<p> ... </p>"
const css = "p { color: red }"
console.log(stiletto.inline(html, css))
// <p style="color:red;">...</p>
```

## Copyright and License

Copyright (c) 2022 TANIGUCHI Masaya. All rights reserved.
This package is released under MIT License. https://git.io/mit-license
