import { css } from "lit";
import "../variables.css";

export default css`
  @import url("../variables.css");

  .settings-container {
    display: flex;
    flex-direction: column; 
    height: 100%;
    place-content: center;
    gap: 0.5rem;
  }
  .settings__title {
    font-size: var(--large);
  }
  .settings__user {
    align-self: center;
    font-size: var(--small);
  }
  .settings__buttons-container {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: space-between;
    gap: 0.5rem;
  }
  button {
    display: block;
    font-family: voxabular-font;
    font-size: var(--medium);
    width: 100%;
    padding: 0.1rem;
    transition: 0.2s;
  }
  button:hover {
    box-shadow: 0 2px 6px 1px gray;
  }
  button:active {
    box-shadow: 0 0px 4px 4px white;
    transform: translateY(1px);
  }

  .settings__hints {
    /* border: 1px solid red; */
    position: absolute;
    z-index: 2;
    width: 10rem;
    left: 2vmin;
    top: 20vmax;
    transform: rotateZ(-100deg);
  }
  .settings__volume {
    align-self: center;
    margin-bottom: 0.5rem;
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
  .erase-footer {
    /* border:1px solid red; */
    /* margin-top: 0.5rem; */
  }
  .erase-footer button:hover {
    background-color: var(--alert);
  }
`;