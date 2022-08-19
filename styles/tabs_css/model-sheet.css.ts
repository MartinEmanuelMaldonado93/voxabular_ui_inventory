import { css } from "lit";

export default css`
  :host { 
    display: flex; 
    place-content: center;
    border-top: none;
    border-radius: 4px;
    border-top-left-radius: 0;
    border-top-right-radius: 4px;
    background: url("./beige-paper.png"), beige;
    width: 100%;
    height: 80vh;
  }
`;
