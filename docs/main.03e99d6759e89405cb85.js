(()=>{"use strict";var t,e={322:(t,e,r)=>{r.d(e,{Z:()=>u});var o=r(559),n=r.n(o),a=r(476),s=r.n(a),i=r(244),l=r(678),c=r.n(l),d=new URL(r(167),r.b),p=s()(n());p.i(i.Z);var b=c()(d);p.push([t.id,"body{background-color:#d3d3bb}@font-face{font-family:voxabular-font;src:url("+b+")}","",{version:3,sources:["webpack://./../scss/main.scss"],names:[],mappings:"AAAO,KAAA,wBAAA,CAAA,WAAA,0BAAA,CAAA,2CAAA",sourcesContent:['@import"./normalize.css";body{background-color:#d3d3bb}@font-face{font-family:voxabular-font;src:url("../src/assets/fonts/BohemianTypewriter.ttf")}'],sourceRoot:""}]);const u=p},244:(t,e,r)=>{r.d(e,{Z:()=>i});var o=r(559),n=r.n(o),a=r(476),s=r.n(a)()(n());s.push([t.id,'*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n}\r\nbody,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\np,\r\nfigure,\r\nblockquote,\r\ndl,\r\ndd {\r\n    margin: 0;\r\n}\r\nul[role="list"],\r\nol[role="list"] {\r\n    list-style: none;\r\n}\r\nhtml:focus-within {\r\n    scroll-behavior: smooth;\r\n}\r\nbody {\r\n    min-height: 100vh;\r\n    text-rendering: optimizeSpeed;\r\n    line-height: 1.5;\r\n}\r\na:not([class]) {\r\n    text-decoration-skip-ink: auto;\r\n}\r\nimg,\r\npicture {\r\n    max-width: 100%;\r\n    display: block;\r\n}\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n    font: inherit;\r\n}\r\n@media (prefers-reduced-motion: reduce) {\r\n    html:focus-within {\r\n        scroll-behavior: auto;\r\n    }\r\n    *,\r\n    *::before,\r\n    *::after {\r\n        animation-duration: 0.01ms !important;\r\n        animation-iteration-count: 1 !important;\r\n        transition-duration: 0.01ms !important;\r\n        scroll-behavior: auto !important;\r\n    }\r\n}\r\n',"",{version:3,sources:["webpack://./../scss/normalize.css"],names:[],mappings:"AAAA;;;IAGI,sBAAsB;AAC1B;AACA;;;;;;;;;;IAUI,SAAS;AACb;AACA;;IAEI,gBAAgB;AACpB;AACA;IACI,uBAAuB;AAC3B;AACA;IACI,iBAAiB;IACjB,6BAA6B;IAC7B,gBAAgB;AACpB;AACA;IACI,8BAA8B;AAClC;AACA;;IAEI,eAAe;IACf,cAAc;AAClB;AACA;;;;IAII,aAAa;AACjB;AACA;IACI;QACI,qBAAqB;IACzB;IACA;;;QAGI,qCAAqC;QACrC,uCAAuC;QACvC,sCAAsC;QACtC,gCAAgC;IACpC;AACJ",sourcesContent:['*,\r\n*::before,\r\n*::after {\r\n    box-sizing: border-box;\r\n}\r\nbody,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\np,\r\nfigure,\r\nblockquote,\r\ndl,\r\ndd {\r\n    margin: 0;\r\n}\r\nul[role="list"],\r\nol[role="list"] {\r\n    list-style: none;\r\n}\r\nhtml:focus-within {\r\n    scroll-behavior: smooth;\r\n}\r\nbody {\r\n    min-height: 100vh;\r\n    text-rendering: optimizeSpeed;\r\n    line-height: 1.5;\r\n}\r\na:not([class]) {\r\n    text-decoration-skip-ink: auto;\r\n}\r\nimg,\r\npicture {\r\n    max-width: 100%;\r\n    display: block;\r\n}\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n    font: inherit;\r\n}\r\n@media (prefers-reduced-motion: reduce) {\r\n    html:focus-within {\r\n        scroll-behavior: auto;\r\n    }\r\n    *,\r\n    *::before,\r\n    *::after {\r\n        animation-duration: 0.01ms !important;\r\n        animation-iteration-count: 1 !important;\r\n        transition-duration: 0.01ms !important;\r\n        scroll-behavior: auto !important;\r\n    }\r\n}\r\n'],sourceRoot:""}]);const i=s},773:(t,e,r)=>{var o=r(767),n=r(840);const a=r.p+"beige-paper.png";var s=r(892),i=r.n(s),l=r(760),c=r.n(l),d=r(311),p=r.n(d),b=r(192),u=r.n(b),h=r(60),g=r.n(h),f=r(865),m=r.n(f),A=r(322),v={};v.styleTagTransform=m(),v.setAttributes=u(),v.insert=p().bind(null,"head"),v.domAPI=c(),v.insertStyleElement=g(),i()(A.Z,v),A.Z&&A.Z.locals&&A.Z.locals;var y=function(t,e,r,o){var n,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(s=(a<3?n(s):a>3?n(e,r,s):n(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s};let x=class extends o.oi{render(){return o.dy`<slot></slot>`}};x.styles=[o.iv`
            :host { 
                display: flex;
                place-content: center;
                border-top: none;
                border-radius: 4px;
                border-top-left-radius: 0;
                border-top-right-radius: 4px;
                background: url(${(0,o.$m)(a)}), beige;
                width: 100%;
            }
        `],y([(0,n.Cb)({type:String})],x.prototype,"nameid",void 0),x=y([(0,n.Mo)("model-sheet")],x);var C=r(897),k=function(t,e,r,o){var n,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(s=(a<3?n(s):a>3?n(e,r,s):n(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s};let w=class extends o.oi{constructor(){super(...arguments),this.titleCase="Case I: Abby",this._todos=["What's his name?","What's his address?","Where is the baby's father?","Why did he disappear?"]}render(){return o.dy`
            <div class="case-container">
                <h1 class="title-case">${this.titleCase}</h1>
                <div class="list-items">${(0,C.U)(this._todos,(t=>o.dy`<li class="li-template">${t}</li>`))}</div>
            </div>
        `}};w.styles=[o.iv`
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
                color: rgb(230, 20, 20);// red
            }
            .list-items {
                text-align: center;
            }
        `],k([(0,n.Cb)()],w.prototype,"titleCase",void 0),w=k([(0,n.Mo)("case-tab")],w);let $=class extends o.oi{render(){return o.dy`
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
        `}};$.styles=[o.iv`
            :host {
                display: block;
            }
        `],$=function(t,e,r,o){var n,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(s=(a<3?n(s):a>3?n(e,r,s):n(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s}([(0,n.Mo)("leads-tab")],$);let O=class extends o.oi{render(){return o.dy`<h1>settings</h1>`}};O.styles=[o.iv`
            :host {
                display: block;
            }
        `],O=function(t,e,r,o){var n,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(s=(a<3?n(s):a>3?n(e,r,s):n(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s}([(0,n.Mo)("settings-tab")],O);let B=class extends o.oi{render(){return o.dy`
            <div class="suscribe-container">
                <h1>Thank you for suscribe!🖤</h1>
                <div class="contact">
                    <label class="lbl">Keep updated:</label>
                    <input
                        class="input"
                        type="email"
                        placeholder="Your email here :)"
                    />
                </div>

                <div class="anchors">
                    <div>To make sure you get our messages</div>
                    <a>Please add us to your address book</a>
                    <a>Manage my subscription</a>
                </div>
            </div>
        `}};B.styles=[o.iv`
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
            @keyframes lighting{
                50%{
                    box-shadow: 0px 0px 8px 6px orange;
                }
                100%{

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
        `],B=function(t,e,r,o){var n,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(s=(a<3?n(s):a>3?n(e,r,s):n(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s}([(0,n.Mo)("suscribe-tab")],B);const S=r.p+"vox.png";var I=function(t,e,r,o){var n,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(s=(a<3?n(s):a>3?n(e,r,s):n(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s};let _=class extends o.oi{constructor(){super(...arguments),this._todos=["Excellent","Good","Miss","Hints","Study words used"],this.rotation=!1,this.zindex=!1}render(){return o.dy`
            <div class="vocabulary-container">
                <h1>A Countryside Drive</h1>
                <div class="list-items">${(0,C.U)(this._todos,(t=>o.dy`<li class="li-template">${t}</li>`))}</div>
                <div class="card-container">
                    <div @click=${()=>this.rotation=!this.rotation} 
                    class="card c-1 ${this.rotation?"rotation":""}">
                        <img class="card__img" src=${S} />
                        <p class="card__p">Exit the car</p>
                        <span class="card__footer">
                            <!-- icon -->
                            <p>Expression</p>
                        </span>
                    </div>
                    <div @click=${()=>this.rotation=!this.rotation} 
                    class="card c-2 ${this.rotation?"rotation":""}">
                        <img class="card__img" src=${S} />
                        <p class="card__p">Exit the car</p>
                        <span class="card__footer">
                            <!-- icon -->
                            <p>Expression</p>
                        </span>
                    </div>
                    <div @click=${()=>this.rotation=!this.rotation} class="card c-3 ">
                        <img class="card__img" src=${S} />
                        <p class="card__p">Exit the car</p>
                        <span class="card__footer">
                            <!-- icon -->
                            <p>Expression</p>
                        </span>
                    </div>
                </div>
            </div>
        `}};_.styles=[o.iv`
            :host {
                display: block;
            }
            h1 {
                color: rgb(230, 20, 20);
                text-shadow: 2px 2px 1px black;
            }
            li {
                list-style: none;
            }
            .vocabulary-container {
                text-align: center;
            }
            .card-container {
                margin: 2rem 0;
                display: flex;
            }
            .card {
                font-family: monospace;
                font-weight: 600;
                background-color: white;
                border: 1px solid black;
                border-radius: 3px;
                max-width: 160px;
                padding: 1rem 5px;
                filter: brightness(130%);
                transition: 500ms;
                box-shadow: 0 3px 4px 2px gray;
                transform: rotateZ(-10deg);
            }
            .card:hover{transform: scale(1.1);}
            .c-1 {
                transform: rotateZ(-20deg) translateY(-20px);
            }
            .c-2 {
                transform: rotateZ(-10deg); 
                filter:sepia(120%);
            }
            .c-3 {
                transform: rotateZ(10deg); 

            }
            .rotation {  
            }
            .zindex {
                z-index: 2;
            }
            .card__p {
                border-bottom: 2px solid gray;
            }
            .card__img {
                width: 95%;
            } 
        `],I([(0,n.SB)()],_.prototype,"rotation",void 0),I([(0,n.SB)()],_.prototype,"zindex",void 0),_=I([(0,n.Mo)("vocabulary-tab")],_);var j=function(t,e,r,o){var n,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,r,o);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(s=(a<3?n(s):a>3?n(e,r,s):n(e,r))||s);return a>3&&s&&Object.defineProperty(e,r,s),s};let R=class extends o.oi{constructor(){super(...arguments),this.toggleState="vocabulary"}setToggleState(t){this.toggleState=t}render(){return o.dy`
            <div class="container">
                <div class="button-tabs">
                    <button
                        class=${"suscribe"===this.toggleState?"active-tabs":"tabs"}
                        @click=${()=>this.setToggleState("suscribe")}
                    >
                        Suscribe
                    </button>
                    <button
                        class=${"case"===this.toggleState?" active-tabs":"tabs"}
                        @click=${()=>this.toggleState="case"}
                    >
                        Case
                    </button>
                    <button
                        class=${"leads"===this.toggleState?" active-tabs":"tabs"}
                        @click=${()=>this.setToggleState("leads")}
                    >
                        Leads
                    </button>
                    <button
                        class=${"vocabulary"===this.toggleState?"active-tabs":"tabs"}
                        @click=${()=>this.setToggleState("vocabulary")}
                    >
                        Vocabulary
                    </button>
                    <button
                        class=${"settings"===this.toggleState?"active-tabs":"tabs"}
                        @click=${()=>this.setToggleState("settings")}
                    >
                        Settings
                    </button>
                </div>
                <div class="content-tabs">
                    ${"leads"===this.toggleState?o.dy`<model-sheet>
                              <leads-tab></leads-tab>
                          </model-sheet>`:""}
                    ${"case"===this.toggleState?o.dy`<model-sheet><case-tab></case-tab></model-sheet>`:""}
                    ${"suscribe"===this.toggleState?o.dy`<model-sheet
                              ><suscribe-tab></suscribe-tab
                          ></model-sheet>`:""}
                    ${"vocabulary"===this.toggleState?o.dy`<model-sheet
                              ><vocabulary-tab></vocabulary-tab
                          ></model-sheet>`:""}
                    ${"settings"===this.toggleState?o.dy`<model-sheet
                              ><settings-tab></settings-tab
                          ></model-sheet>`:""}
                </div>
            </div>
        `}};R.styles=[o.iv`
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
                background: url(${(0,o.$m)(a)});
                background-color: beige;
                border-top-left-radius: 4px;
                border-top-right-radius: 4px;
                border: 1px solid lightgray;
                border-left: none;
                border-bottom: none;
            }
            .button-tabs {
                display: flex;
                /* margin-left: px;  */
            }
            .button-tabs :not(:first-child) {
                /* margin-left: -2px; */
                /* background: red; */
            }
            .content-tabs {
                /* min-height: 400px; */
            }
            .tabs {
                background: url(${(0,o.$m)(a)}),#d3d3bb;
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
        `],j([(0,n.SB)()],R.prototype,"toggleState",void 0),R=j([(0,n.Mo)("lit-notebook")],R)},167:(t,e,r)=>{t.exports=r.p+"BohemianTypewriter.ttf"}},r={};function o(t){var n=r[t];if(void 0!==n)return n.exports;var a=r[t]={id:t,exports:{}};return e[t](a,a.exports,o),a.exports}o.m=e,t=[],o.O=(e,r,n,a)=>{if(!r){var s=1/0;for(d=0;d<t.length;d++){for(var[r,n,a]=t[d],i=!0,l=0;l<r.length;l++)(!1&a||s>=a)&&Object.keys(o.O).every((t=>o.O[t](r[l])))?r.splice(l--,1):(i=!1,a<s&&(s=a));if(i){t.splice(d--,1);var c=n();void 0!==c&&(e=c)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[r,n,a]},o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o.p="",(()=>{o.b=document.baseURI||self.location.href;var t={179:0};o.O.j=e=>0===t[e];var e=(e,r)=>{var n,a,[s,i,l]=r,c=0;if(s.some((e=>0!==t[e]))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(l)var d=l(o)}for(e&&e(r);c<s.length;c++)a=s[c],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(d)},r=self.webpackChunk=self.webpackChunk||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),o.nc=void 0;var n=o.O(void 0,[762],(()=>o(773)));n=o.O(n)})();
//# sourceMappingURL=main.03e99d6759e89405cb85.js.map