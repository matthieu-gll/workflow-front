import { html, LitElement, customElement } from "lit-element";

@customElement("main-menu")
export default class MainMenu extends LitElement {
  render() {
    return html`<div>
      <ul>
        <li>
            <a href="/">Index</a>
            <a href="/second-page">Second page</a>
        </li>
      </ul>
    </div>`;
  }
}
