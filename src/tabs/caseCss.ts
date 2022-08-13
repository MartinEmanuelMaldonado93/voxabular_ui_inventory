import { css } from "lit";

export const style = css`
  :host {
    display: block;
    min-height: 400px;
  }
  .case-container {
    margin-top: 2rem;
  }
  .title-case {
    color: rgb(230, 20, 20);
    text-shadow: 2px 2px 1px black;
    text-align: center;
  }
  .li-template {
    font-size: 1.5rem;
    list-style: none;
  }
  li::before {
    content: "(X)  ";
    color: rgb(230, 20, 20);
  }
  .list-items {
    text-align: center;
  }
`;
