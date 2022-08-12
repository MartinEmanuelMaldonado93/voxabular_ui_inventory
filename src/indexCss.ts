import { unsafeCSS, css } from "lit";
import backbeige from "./assets/img/beige-paper.png";

export const indexCss = [
  css`
    :root {
      --dark: #282b28;
      --dark-green: #3e5641;
      --dark-brown: #a24936;
      --dark-orange: #d36135;
      --dark-lightblue: #83bca9;
    }
    :host {
      font-family: voxabular-font;
    }
    button {
      font-family: voxabular-font;
      font-size: 1.5rem;
      padding: 0 10px;
      background: url(${unsafeCSS(backbeige)});
      background-color: beige;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      border: 1px solid lightgray;
      border-left: none;
      border-bottom: none;
    }
    .button-tabs {
      display: flex;
      flex-wrap: wrap;
    }
    .button-tabs :not(:first-child) {
      /* margin-left: -2px; */
      /* background: red; */
    }
    .content-tabs {
      /* min-height: 400px; */
    }
    .tabs {
      /* background: url(${unsafeCSS(backbeige)}), #d3d3bb; */
      /* background-color: hsl(80, 5%, 30%); */
      /* background-color: #d3d3bb03; */
    }
    .active-tabs {
      box-shadow: 0px -2px 5px 3px white; /** shine */
      border: none;
      transform: scale(1.02);
      /* border-left: 1px solid gray;
    border-right: 1px solid gray; */
    }
    .container {
      background-color: #282b28;
      min-height: 500px;
      width: 90vw;
      margin: 1rem auto;
      padding: 5px;
      border-radius: 8px;
    }
  `,
];
