import { css, unsafeCSS } from "lit";

export const style = [
  css`
    @media screen and (max-width: 391px) {
      .card-container {
        flex-wrap: wrap;
        place-content: center;
        border: 1px solid red;
      }
      .card {
        /* width: min(140px, 60vw); */
        border: 1px solid pink;
      }
    }

    .vocabulary-container {
      /* border: 1px solid green; */
      text-align: center;
      width: 100%;
      height: 100%;
    }
    h1 {
      /* border: 1px solid green; */
      margin: 0;
      color: rgb(230, 20, 20);
      text-shadow: 2px 2px 1px black;
    }
    li {
      list-style: none;
    }
    .card-container {
      border: 2px solid red;
      display: flex;
      justify-content: space-around;
      user-select: none;
      width: 30rem;
      /* flex-wrap: wrap; */
    }
    .card {
      border: 1px solid black;
      font-family: monospace;
      font-weight: 600;
      background-color: white;
      border-radius: 3px;
      height: min(150px, 200px);
      width: min(130px, 180px);
      padding: 1rem 5px;
      filter: brightness(130%);
      transition: 400ms;
      box-shadow: 0 3px 4px 2px gray;
      transform: rotateZ(-10deg);
    }
    .card:hover {
      transform: scale(1.3);
      z-index: 3;
    }
    .c-1 {
      transform: rotateZ(-20deg) translateY(-20px);
    }
    .c-2 {
      /* transform: rotateZ(10deg); */
      filter: sepia(120%);
    }
    .c-3 {
      transform: rotateZ(25deg) translateX(40px) translateY(-50px);
    }
    .card__img {
      width: 6em;
      box-sizing: border-box;
      object-fit: contain;
    }
    .card__footer {
      border-top: 2px solid gray;
    }
    .card__footer-p:nth-child(2) {
      font-size: smaller;
    }
  `,
];
