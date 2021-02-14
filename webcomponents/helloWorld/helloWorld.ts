import { html, LitElement, customElement, css } from "lit-element";

@customElement("hello-world")
export default class HelloWorld extends LitElement {
  static get styles() {
    return css`
      h1 {
        font-family: sans-serif;
        color: green;
      }
    `;
  }

  render() {
    return html`<h1>Hello world of second page !</h1>`;
  }
}
