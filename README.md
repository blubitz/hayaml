[![npm](https://img.shields.io/npm/v/hayaml?style=flat-square&color=CC3534)](https://www.npmjs.com/package/hayaml) ![npm bundle size](https://img.shields.io/bundlephobia/min/hayaml?style=flat-square)

# hayaml

**hayaml** converts between JS objects and HAYAML. [HAYAML](https://github.com/blubitz/HAYAML-Spec) (Human-Readable Serialization for Complex Web Content) is a human-readable, cross-language data serialization format for serializing complex web components.

## Installation

```bash
npm i hayaml
```

## Usage

This package provides native support for ES Modules (MJS), CommonJS (CJS), and UMD. It uses the `exports` field (Node.js ^12.7.0) in its `package.json` to ensure the correct module format is loaded depending on your project's setup without the need for relative paths.

### CommonJS

```js
const HAYAML = require('hayaml')
```

### ES Modules

```js
import HAYAML from 'hayaml'
```

### UMD

```html
<script src="https://cdn.jsdelivr.net/gh/blubitz/hayaml/dist/umd/hayaml.min.js"></script>
<!--
<script>
    const data = { /* your data */ }
    const serialized = HAYAML.stringify(data)
</script>
-->
```

### JSON object to HAYAML

```js
const data = {
    "type": "image-gallery",
    "gallery-title": "Summer Vacation",
    "content": {
        "type": "image-panel",
        "content": "<div class=\"center\"><img src=\"vacation1.png\" style=\"max-width:200px\" alt=\"beach\"></div>"
    }
}

console.log(HAYAML.stringify(data))
```

Output

```
type: image-gallery
gallery-title: Summer Vacation
content:
  type: image-panel
  content:
    node: root
    child:
      - node: element
        tag: div
        attr:
          class: center
        child:
          - node: element
            tag: img
            attr:
              src: vacation1.png
              style: max-width:200px
              alt: beach
```

### HAYAML to JSON object

```js
const hayaml = `type: image-gallery
gallery-title: Summer Vacation
content:
  type: image-panel
  content:
    node: root
    child:
      - node: element
        tag: div
        attr:
          class: center
        child:
          - node: element
            tag: img
            attr:
              src: vacation1.png
              style: max-width:200px
              alt: beach`

console.log(HAYAML.parse(hayaml))
```

Output
```js
{
  type: 'image-gallery',
  'gallery-title': 'Summer Vacation',
  content: {
    type: 'image-panel',
    content: '<div class="center"><img src="vacation1.png" style="max-width:200px" alt="beach"></div>'
  }
}
```

### Assertion

```js
const data = { /* your object */ }
const serialized = HAYAML.stringify(data)
const deserialized = HAYAML.parse(serialized)
JSON.stringify(deserialized) == JSON.stringify(data) // => always true
```

## Builds

The source file is located at `src/cjs/hayaml.js`. Building to ESM and UMD is automatic by calling `npm run build`. Build files are located in the `dev` directory.

## Tests

```
npm run test
```

## License

The code is available under the [MIT](LICENSE) license.

## Contributing

If you want to help fix a bug or add new features,

1. Fork this repository
2. Apply changes
3. Past tests
4. Submit a pull request
