import { css } from "lit";

export default css`
  :host {
    display: block;
  }
  .settings-container {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    place-items: center;
    gap: 0.5rem;
  }
  button {
    display: block;
    font-family: voxabular-font;
    width: 100%;
    margin: 1rem 0;
    padding: 5px;
    transition: 0.2s;
    /* border-radius: 5px; */
  }
  button:hover {
    box-shadow: 0 2px 6px 1px gray;
  }
  button:active {
    box-shadow: 0 0px 4px 4px white;
    transform: translateY(1px);
  }
  .erase-footer button:hover {
    background-color: tomato;
  }
  .hints {
    position: relative;
    z-index: 2;
    width: 15rem;
    left: -290px;
    transform: rotateZ(-40deg);
    margin-top: -80px;
  }
  input[type="range"],
  input[type="range"]::-webkit-slider-runnable-track,
  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  input[type="range"]::-webkit-slider-thumb {
    background-color: #777;
    width: 30px;
    height: 30px;
    border: 3px solid #333;
    border-radius: 50%;
    margin-top: -9px;
  }
  input[type="range"]::-webkit-slider-runnable-track {
    height: 5px;
    background-color: black;
  }
`;
