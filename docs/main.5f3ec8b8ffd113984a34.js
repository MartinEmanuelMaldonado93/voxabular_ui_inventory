(()=>{"use strict";var e,t={582:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(559),o=r.n(n),a=r(476),i=r.n(a),s=r(244),l=r(678),c=r.n(l),d=new URL(r(167),r.b),p=i()(o());p.i(s.Z);var b=c()(d);p.push([e.id,"body{background-color:#d3d3bb}@font-face{font-family:voxabular-font;src:url("+b+")}","",{version:3,sources:["webpack://./../scss/main.scss"],names:[],mappings:"AAKA,KACE,wBAAA,CAEF,WACE,0BAAA,CACA,2CAAA",sourcesContent:['@import url("./normalize.css");\r\n//https://coolors.co/palette/220901-621708-941b0c-bc3908-f6aa1c\r\n//https://coolors.co/palette/335c67-fff3b0-e09f3e-9e2a2b-540b0e\r\n//https://coolors.co/palette/f2c57c-ddae7e-7fb685-426a5a-ef6f6c\r\n\r\nbody {\r\n  background-color: #d3d3bb ; \r\n}\r\n@font-face {\r\n  font-family: voxabular-font;\r\n  src: url("../src/assets/fonts/BohemianTypewriter.ttf");\r\n}\r\n'],sourceRoot:""}]);const u=p},244:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(559),o=r.n(n),a=r(476),i=r.n(a)()(o());i.push([e.id,'*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n}\r\nbody,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\np,\r\nfigure,\r\nblockquote,\r\ndl,\r\ndd {\r\n    margin: 0;\r\n}\r\nul[role="list"],\r\nol[role="list"] {\r\n    list-style: none;\r\n}\r\nhtml:focus-within {\r\n    scroll-behavior: smooth;\r\n}\r\nbody {\r\n    min-height: 100vh;\r\n    text-rendering: optimizeSpeed;\r\n    line-height: 1.5;\r\n}\r\na:not([class]) {\r\n    text-decoration-skip-ink: auto;\r\n}\r\nimg,\r\npicture {\r\n    max-width: 100%;\r\n    display: block;\r\n}\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n    font: inherit;\r\n}\r\n@media (prefers-reduced-motion: reduce) {\r\n    html:focus-within {\r\n        scroll-behavior: auto;\r\n    }\r\n    *,\r\n    *::before,\r\n    *::after {\r\n        animation-duration: 0.01ms !important;\r\n        animation-iteration-count: 1 !important;\r\n        transition-duration: 0.01ms !important;\r\n        scroll-behavior: auto !important;\r\n    }\r\n}\r\n',"",{version:3,sources:["webpack://./../scss/normalize.css"],names:[],mappings:"AAAA;;;IAGI,sBAAsB;AAC1B;AACA;;;;;;;;;;IAUI,SAAS;AACb;AACA;;IAEI,gBAAgB;AACpB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,iBAAiB;IACjB,6BAA6B;IAC7B,gBAAgB;AACpB;AACA;IACI,8BAA8B;AAClC;AACA;;IAEI,eAAe;IACf,cAAc;AAClB;AACA;;;;IAII,aAAa;AACjB;AACA;IACI;QACI,qBAAqB;IACzB;IACA;;;QAGI,qCAAqC;QACrC,uCAAuC;QACvC,sCAAsC;QACtC,gCAAgC;IACpC;AACJ",sourcesContent:['*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n}\r\nbody,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\np,\r\nfigure,\r\nblockquote,\r\ndl,\r\ndd {\r\n    margin: 0;\r\n}\r\nul[role="list"],\r\nol[role="list"] {\r\n    list-style: none;\r\n}\r\nhtml:focus-within {\r\n    scroll-behavior: smooth;\r\n}\r\nbody {\r\n    min-height: 100vh;\r\n    text-rendering: optimizeSpeed;\r\n    line-height: 1.5;\r\n}\r\na:not([class]) {\r\n    text-decoration-skip-ink: auto;\r\n}\r\nimg,\r\npicture {\r\n    max-width: 100%;\r\n    display: block;\r\n}\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n    font: inherit;\r\n}\r\n@media (prefers-reduced-motion: reduce) {\r\n    html:focus-within {\r\n        scroll-behavior: auto;\r\n    }\r\n    *,\r\n    *::before,\r\n    *::after {\r\n        animation-duration: 0.01ms !important;\r\n        animation-iteration-count: 1 !important;\r\n        transition-duration: 0.01ms !important;\r\n        scroll-behavior: auto !important;\r\n    }\r\n}\r\n'],sourceRoot:""}]);const s=i},613:(e,t,r)=>{var n=r(767),o=r(840),a=r(892),i=r.n(a),s=r(760),l=r.n(s),c=r(311),d=r.n(c),p=r(192),b=r.n(p),u=r(60),h=r.n(u),f=r(865),m=r.n(f),g=r(582),v={};v.styleTagTransform=m(),v.setAttributes=b(),v.insert=d().bind(null,"head"),v.domAPI=l(),v.insertStyleElement=h(),i()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals;const x=r.p+"beige-paper.png",y=[n.iv`
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
      background: url(${(0,n.$m)(x)}),hsl(15,0%,90%);
    }
    .active-tabs {
      box-shadow: 0px -2px 5px 3px white; /** shine */
      border: none;
      transform: scale(1.02);
    }
  `],A=n.iv`
  :host {
    display: flex;
    place-content: center;
    border-top: none;
    border-radius: 4px;
    border-top-left-radius: 0;
    border-top-right-radius: 4px;
    background: url(${(0,n.$m)(x)}), beige;
    width: 100%;
    height: 80vh;
  }
`;var C=function(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i};let w=class extends n.oi{render(){return n.dy`<slot></slot>`}};w.styles=[A],C([(0,o.Cb)({type:String})],w.prototype,"nameid",void 0),w=C([(0,o.Mo)("model-sheet")],w);var k=r(897);const O=n.iv`
  :host {
    display: block;
    min-height: 400px;
  }
  .case-container {
    margin-top: 2rem;
  }
  .title-case {
    color: rgb(230, 20, 20);
    text-shadow: 2px 2px 1px black;
    text-align: center;
  }
  .li-template {
    font-size: 1.5rem;
    list-style: none;
  }
  li::before {
    content: "(X)  ";
    color: rgb(230, 20, 20);
  }
  .list-items {
    text-align: center;
  }
`;var j=function(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i};let B=class extends n.oi{constructor(){super(...arguments),this.titleCase="Case I: Abby",this._todos=["What's his name?","What's his address?","Where is the baby's father?","Why did he disappear?"]}render(){return n.dy`
      <div class="case-container">
        <h1 class="title-case">${this.titleCase}</h1>
        <div class="list-items">${(0,k.U)(this._todos,(e=>n.dy`<li class="li-template">${e}</li>`))}</div>
      </div>
    `}};B.styles=[O],j([(0,o.Cb)()],B.prototype,"titleCase",void 0),B=j([(0,o.Mo)("case-tab")],B);let I=class extends n.oi{render(){return n.dy`
      <div>
        <h1>A countryside Drive</h1>
        <p>lorem ipsumaksmdslamdsalkdmsad asdmlamds</p>

        <ol>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ol>

        <section class="media-cards">
          <div class="card-1"></div>
          <div class="card-2"></div>
          <div class="card-3"></div>
        </section>
      </div>
    `}};I.styles=[],I=function(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i}([(0,o.Mo)("leads-tab")],I);const R=r.p+"hints.png",S=[n.iv`
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
  `];var $=function(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i};let _=class extends n.oi{constructor(){super(...arguments),this.userid=+new Date}render(){return n.dy`
      <div class="settings-container">
        <h2>Change language</h2>
        <div class="buttons-container">
          <button>Hablo español y quiero hablar inglés</button>
          <button>I speak English and want to learn Spanish</button>
          <button>Sólo quiero jugar en Español</button>
          <button>I just want to play in English</button>
        </div>
        <img class="hints" src=${R} />
        <div class="volume">
          <div>Music Volume</div>
          <input class="range" id="range" type="range" min="1" max="100" />
        </div>
        <div class="user-id">User:${this.userid}</div>
        <div class="erase-footer">
          <button class="erase">Erase and Restart</button>
        </div>
      </div>
    `}};_.styles=[S],$([(0,o.Cb)()],_.prototype,"userid",void 0),_=$([(0,o.Mo)("settings-tab")],_);const P=[n.iv`
    :host {
      display: block;
      font-size: 1.2rem;
    }
    .suscribe-container {
      min-height: 300px;
      text-align: center;
    }
    .lbl {
      display: block;
    }
    .input {
      font-family: voxabular-font;
      border-radius: 3px;
      border: none;
      padding: 5px;
      animation-name: lighting;
      animation-duration: 4s;
      animation-iteration-count: infinite;
      animation-fill-mode: both;
    }
    @keyframes lighting {
      50% {
        box-shadow: 0px 0px 8px 6px orange;
      }
      100% {
      }
    }
    .input:focus,
    .input:active {
      box-shadow: none;
      border: none;
      text-decoration: none;
      box-shadow: 0px 0px 8px 6px orange;
    }
    .anchors {
      margin-top: 4rem;
    }
  `];let z=class extends n.oi{render(){return n.dy`
      <div class="suscribe-container">
        <h1>Thank you for suscribe!🖤</h1>
        <div class="contact">
          <label class="lbl">Keep updated:</label>
          <input class="input" type="email" placeholder="Your email here :)" />
        </div>

        <div class="anchors">
          <div>To make sure you get our messages</div>
          <a>Please add us to your address book</a>
          <a>Manage my subscription</a>
        </div>
      </div>
    `}};z.styles=[P],z=function(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i}([(0,o.Mo)("suscribe-tab")],z);const E=r.p+"vox.png",M=[n.iv`
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
  `];var Z=function(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i};let D=class extends n.oi{constructor(){super(...arguments),this._todos=["Excellent","Good","Miss","Hints","Study words used"],this.rotation=!1}render(){return n.dy`
      <div class="vocabulary-container">
        <h1>A Countryside Drive</h1>
        <div class="list-items">${(0,k.U)(this._todos,(e=>n.dy`<li class="li-template">${e}</li>`))}</div>
        <div class="card-container">
          <card-element class="c-1" titlecard="Exit the car"></card-element>
          <card-element class="c-2" titlecard="Stop the bus"></card-element>
          <card-element class="c-3" titlecard="Please Help!!!"></card-element>
        </div>
      </div>
    `}};D.styles=[M],Z([(0,o.SB)()],D.prototype,"rotation",void 0),D=Z([(0,o.Mo)("vocabulary-tab")],D);let q=class extends n.oi{constructor(){super(...arguments),this.rotation=!1,this.titlecard=""}render(){return n.dy`
      <div
        class="card ${this.rotation?"rotation":""}"
        @click=${()=>this.rotation=!this.rotation}
      >
        <img class="card__img" src=${E} />
        <div class="card__footer">
          <p class="card__footer-p">${this.titlecard}</p>
          <p class="card__footer-p">Expression</p>
        </div>
      </div>
    `}};q.styles=[M],Z([(0,o.SB)()],q.prototype,"rotation",void 0),Z([(0,o.Cb)()],q.prototype,"titlecard",void 0),q=Z([(0,o.Mo)("card-element")],q);var T=function(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i};const U={case:n.dy`<case-tab></case-tab>`,vocabulary:n.dy`<vocabulary-tab></vocabulary-tab> `,settings:n.dy`<settings-tab></settings-tab> `,leads:n.dy`<leads-tab></leads-tab>`,suscribe:n.dy`<suscribe-tab></suscribe-tab>`},Q=Object.keys(U);let W=class extends n.oi{constructor(){super(...arguments),this.tabSelected="vocabulary"}setTabState(e){this.tabSelected=e}render(){return n.dy`
      <div class="container">
        <div class="button-tabs">${Q.map((e=>n.dy`<button
        class=${this.tabSelected===e?"active-tabs":"tabs"}
        @click=${()=>this.setTabState(e)}
      >
        ${e}
      </button>`))}</div>

        <model-sheet> ${U[this.tabSelected]} </model-sheet>
      </div>
    `}};W.styles=[y],T([(0,o.SB)()],W.prototype,"tabSelected",void 0),W=T([(0,o.Mo)("lit-notebook")],W)},167:(e,t,r)=>{e.exports=r.p+"BohemianTypewriter.ttf"}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={id:e,exports:{}};return t[e](a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,o,a]=e[d],s=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[l])))?r.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[r,o,a]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="",(()=>{n.b=document.baseURI||self.location.href;var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[i,s,l]=r,c=0;if(i.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var d=l(n)}for(t&&t(r);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0;var o=n.O(void 0,[762],(()=>n(613)));o=n.O(o)})();
//# sourceMappingURL=main.5f3ec8b8ffd113984a34.js.map