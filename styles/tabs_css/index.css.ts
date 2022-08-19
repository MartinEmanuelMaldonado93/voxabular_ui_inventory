import { css } from "lit";
import "../assets/img/beige-paper.png";

export default css`
  @import url("../variables.css");

  .container { 
    font-family: voxabular-font; 
    padding: 1em;
    border-radius: 8px;
    width: 80vw;
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
    background: url("./beige-paper.png"), hsl(15, 0%, 95%);
  }
  .active-tabs {
    box-shadow: 0px -2px 5px 3px white; /** shine */
    border: none;
    transform: scale(1.02);
  }
`;