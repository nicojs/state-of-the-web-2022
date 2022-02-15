### ES modules example

```js
// math/add.js
export function product(...numbers) {
  return numbers.reduce((acc, n) => n * acc, 1);
}
```

```js
// math/pi.js
export const pi = 3.14;
```

```js
// math/index.js
export * from './add.js';
export * from './pi.js';
```

```js
// circle.js
import * as math from './math/index.js';

export function circumference(r) {
  return math.product(2, math.pi, r);
}
```

Also more syntax, like `default` and `import './module-with-side-effects'`.

<!-- .element class="fragment" -->

---

### Some remarks

- Modules are loaded _asynchronously_.
- Modules are always in [_strict_ mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#changes_in_strict_mode) <!-- .element target="_blank" -->
- File extensions are _required_ (also in TypeScript).
- Modules are executed in 3 _phases_

---

<!-- .slide: class="is-lab" -->

### Demo-time 💨

---

### Module phases

[![](/img/esm-phases.png)](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/) <!-- .element target="_blank" -->

This represents a very big performance gain!

Let's use modules for everything!! 🤩

<!-- .element class="fragment" -->

---

### Whoa there cowboy!

Keep in mind mind:

- 😢 <!-- .element class="fragment" --> Modules don't support _bare imports_ 
    -  `import { range } from 'rxjs';`
    - Although they _are supported in NodeJS_.
    - We need the [import map](https://github.com/WICG/import-maps#the-basic-idea) specification
- 😑 <!-- .element class="fragment" -->  Module loading still takes multiple TCP round trips!
    - We need [HTTP/3 or Web Transport](https://quicwg.org/base-drafts/draft-ietf-quic-http.html)
- 🤦‍♂️ <!-- .element class="fragment" -->  Modules are not minified
    - We will always need to minify our JS.

<!-- .element class="no-list" -->

📦 In the meantime: Keep bundling! 

<!-- .element class="fragment" -->

