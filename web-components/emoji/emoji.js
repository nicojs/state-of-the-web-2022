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
    this.shadowRoot.innerHTML = `<style>.big { font-size: 100px; }</style>`;
    this.shadowRoot.innerHTML += `<div class="big">${emojis[this.type]}</div>`;
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
