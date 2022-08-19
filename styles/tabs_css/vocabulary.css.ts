import { css } from "lit";
import "../variables.css";

export default css`
  @import url("../variables.css");

  @media screen and (max-width: 391px) {
    .card-container {
      flex-wrap: wrap;
      place-content: center;
      border: 1px solid red;
    }
    .card {
      border: 1px solid pink;
    }
  }

  .vocabulary-container {
    /* border: 1px solid green; */
    display: flex; 
    flex-direction: column;
    place-content: center;
    height: 100%;
  }
  .vocabulary__sign h1 { 
    text-align: center;
    font-size: var(--large);
    margin: 0;
    color: rgb(230, 20, 20);
    text-shadow: 2px 2px 1px black;
  }
  .vocabulary__sign li {
    text-align: center;
    list-style: none;
    font-size: var(--large-medium);
  }
  .vocabulary__cards-container { 
    display: flex;
    justify-content: space-around;  
    user-select: none; 
  }
  .c-1 {
    transform: rotateZ(-20deg) translateY(-60px) translateX(-60px);
  }
  .c-2 {
    transform: rotateZ(10deg);
    filter: sepia(120%);
  }
  .c-3 {
    transform: rotateZ(20deg) translateX(40px) translateY(-50px);
  }

  /** Card Element */
  .card {
    border: 1px solid black; 
    font-family: monospace;
    font-weight: 600;
    word-wrap: break-word;
    background-color: white;
    border-radius: 3px;
    box-shadow: 0 3px 4px 2px gray;
    height: clamp(5rem, 13vw, 22rem);
    width: clamp(5rem, 12vw, 20rem);
    padding: 1rem 5px;
    filter: brightness(130%);
    transition: 400ms;
    transform: rotateZ(-10deg);
  }
  .card:hover {
    transform: scale(1.2);
    z-index: 5;
  }
  .card__img { 
    width: 90%;
    height: 60%;
    object-fit: scale-down;
  }
  .card__footer {
    box-sizing: border-box;
  }
  .card__footer p {
    margin: clamp(.1rem , .2rem ,1rem);
  }
  .card__footer-title {
    border-bottom: 2px solid gray;
    /* border:1px solid red; */
    font-size: var(--medium);
  }
  .card__footer-expresion {
    /* border:1px solid red; */
    font-size: var(--extra-small);
  }
`;
