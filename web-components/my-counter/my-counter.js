class MyCounter extends HTMLElement {
  #counter = 0;

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `${this.#counter}`;
  }

  increment() {
    this.#counter++;
    this.render();
  }
}

customElements.define('my-counter', MyCounter);
