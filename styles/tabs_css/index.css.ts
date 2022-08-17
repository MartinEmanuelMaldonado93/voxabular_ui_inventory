import { unsafeCSS, css } from "lit";
import backbeige from "../assets/img/beige-paper.png";

export default css`
  :root {
    --dark: #282b28;
    --dark-green: #3e5641;
    --dark-brown: #a24936;
    --dark-orange: #d36135;
    --dark-lightblue: #83bca9;
  }
  .container {
    box-sizing: border-box;
    font-family: voxabular-font;
    background-color: #282b28;
    padding: 1em;
    border-radius: 8px;
  }
  button {
    font-family: voxabular-font;
    font-size: 1.5rem;
    padding: 0 10px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    border: 1px solid lightgray;
    border-bottom: none;
  }
  .button-tabs {
    display: flex;
    flex-wrap: wrap;
  }
  .content-tabs {
  }
  .tabs {
    background: url(${unsafeCSS(backbeige)}), hsl(15, 0%, 90%);
  }
  .active-tabs {
    box-shadow: 0px -2px 5px 3px white; /** shine */
    border: none;
    transform: scale(1.02);
  }
`;
