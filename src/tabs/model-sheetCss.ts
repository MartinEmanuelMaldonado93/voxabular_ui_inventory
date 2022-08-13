import { css, unsafeCSS } from "lit";
import backbeige from "../assets/img/beige-paper.png";

export const style = css`
  :host {
    display: flex;
    place-content: center;
    border-top: none;
    border-radius: 4px;
    border-top-left-radius: 0;
    border-top-right-radius: 4px;
    background: url(${unsafeCSS(backbeige)}), beige;
    width: 100%;
    height: 80vh;
  }
`;
