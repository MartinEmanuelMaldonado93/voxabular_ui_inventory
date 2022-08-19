import { css, unsafeCSS } from "lit";
import "../variables.css";

export default css`
  @import url("./variables.css");

  .suscribe-container {
    display: flex;
    flex-direction: column;
    place-content: center;
    height: 100%;
    gap: 2rem;
  }
  .suscribe__title {
    align-self: center;
    font-size: var(--large);
  }
  .suscribe__contact {
    align-self: center;
  }
  .suscribe__contact-lbl {
    font-size: var(--medium);
    margin: 2rem;
  }
  .suscribe__input {
    font-family: voxabular-font;
    font-size: var(--medium);
    border-radius: 3px;
    border: none;
    padding: 0.5rem;
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
  .suscribe__anchors {
    font-size: var(--medium);
  }
`;
