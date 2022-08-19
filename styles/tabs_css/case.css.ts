import { css } from "lit";
import "../variables.css";

export default css`
  @import url("../variables.css");
   
  .case-container {
    display: flex;
    flex-direction: column;
    place-content: center;
    height: 100%;
  }
  .case__title {
    color: var(--danger);
    font-size: var(--large);
    text-shadow: 2px 2px 1px black;
    text-align: center;
  }
  .case__list {
    font-size: var(--large-medium);
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
