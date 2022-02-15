### Example

<div class="flex">
<div class="col">

```js
const emojis = {
  joy: '😂',
  exploding_head: '🤯',
  poop: '💩',
  handshake: '🤝',
  alien: '👽',
};

class EmoJI extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.updateEmoJI();
  }

  updateEmoJI() {
    this.sh = `<style>.big { font-size: 100px; }</style>`;
    this.innerHTML += `<div class="big">${emojis[this.type]}</div>`;
  }

  attributeChangedCallback() {
    this.updateEmoJI();
  }

  static get observedAttributes() {
    return ['type'];
  }

  set type(value) {
    this.setAttribute('type', value);
  }

  get type() {
    return this.getAttribute('type');
  }
}
customElements.define('emo-ji', EmoJI);
```

<!-- .element class="xs" -->

</div>
<div class="col">

```html
<emo-ji id="the-emoji" type="joy"></emo-ji>
<span class="big">not so big</span>
<input oninput="document.getElementById('the-emoji').type = this.value">
```

<!-- .element class="xs" -->

<emo-ji id="the-emoji" type="joy"></emo-ji>
<span class="big">not so big</span>
<input oninput="document.getElementById('the-emoji').type = this.value">

</div>
</div>

