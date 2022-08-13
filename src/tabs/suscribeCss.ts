import { css, unsafeCSS } from "lit";

export const style = [
  css`
    :host {
      display: block;
      font-size: 1.2rem;
    }
    .suscribe-container {
      min-height: 300px;
      text-align: center;
    }
    .lbl {
      display: block;
    }
    .input {
      font-family: voxabular-font;
      border-radius: 3px;
      border: none;
      padding: 5px;
      animation-name: lighting;
      animation-duration: 4s;
      animation-iteration-count: infinite;
      animation-fill-mode: both;
    }
    @keyframes lighting {
      50% {
        box-shadow: 0px 0px 8px 6px orange;
      }
      100% {
      }
    }
    .input:focus,
    .input:active {
      box-shadow: none;
      border: none;
      text-decoration: none;
      box-shadow: 0px 0px 8px 6px orange;
    }
    .anchors {
      margin-top: 4rem;
    }
  `,
];
