### What is functional CSS?

Functional CSS uses class names like `flex`, `pt-4` and `rotate-90`.

No more `btn`, `card` or `alert-danger`.

<!-- .element class="fragment" -->

Every class does exactly 1 thing

<!-- .element class="fragment" -->

---

<!-- .slide: class="is-lab" -->

### Demo-time 💨

---


### Why?

Well... it takes 1000 words to explain

[https://adamwathan.me/css-utility-classes-and-separation-of-concerns/](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/) <!-- .element target="_blank" -->

---

### TL;DR

1. You're probably building components in Angular / React / Web components. 
    - Why do we need a CSS abstraction?
1. <!-- .element class="fragment" --> No more premature abstraction
    - Only extract repeating patterns as they emerge.
1. <!-- .element class="fragment" --> Still enforce consistency.
    - Choose between `text-sm` and `text-xs` rather than `font-size: 10px` or `font-size: 11px`


Note: you need to know CSS if you want to use functional css

<!-- .element class="fragment" -->