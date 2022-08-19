(()=>{"use strict";var r,n={94:(r,n,e)=>{e.d(n,{Z:()=>b});var t=e(559),o=e.n(t),i=e(476),a=e.n(i),s=e(38),l=e(678),A=e.n(l),c=new URL(e(458),e.b),d=a()(o());d.i(s.Z);var p=A()(c);d.push([r.id,"@font-face{font-family:voxabular-font;src:url("+p+")}body{background-color:#000;display:flex;justify-content:center}","",{version:3,sources:["webpack://./../styles/main.css"],names:[],mappings:"AAEA,WACE,0BAAA,CACA,2CAAA,CAGF,KACE,qBAAA,CACA,YAAA,CACA,sBAAA",sourcesContent:['@import url("./normalize.css");\r\n\r\n@font-face {\r\n  font-family: voxabular-font;\r\n  src: url("./assets/fonts/BohemianTypewriter.ttf");\r\n} \r\n\r\nbody{\r\n  background-color: black;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n/*\r\n//https://coolors.co/palette/220901-621708-941b0c-bc3908-f6aa1c\r\n//https://coolors.co/palette/335c67-fff3b0-e09f3e-9e2a2b-540b0e\r\n//https://coolors.co/palette/f2c57c-ddae7e-7fb685-426a5a-ef6f6c\r\n*/\r\n'],sourceRoot:""}]);const b=d},451:(r,n,e)=>{e.d(n,{Z:()=>s});var t=e(559),o=e.n(t),i=e(476),a=e.n(i)()(o());a.push([r.id,":root{--dark: #282b28;--dark-green: #3e5641;--dark-brown: #a24936;--dark-orange: #d36135;--dark-lightblue: #83bca9;--danger: rgb(230, 20, 20);--alert: tomato;--large: clamp(2rem, 4vw , 8rem);--large-medium: clamp(1rem, 2vw, 4rem);--medium: clamp(0.5rem, 1.7vw, 3rem);--small: clamp(0.2rem, 1.5vw, 3rem);--extra-small: 0.7rem}","",{version:3,sources:["webpack://./../styles/variables.css"],names:[],mappings:"AAAA,MAEE,eAAA,CACA,qBAAA,CACA,qBAAA,CACA,sBAAA,CACA,yBAAA,CAEA,0BAAA,CACA,eAAA,CAEA,gCAAA,CACA,sCAAA,CACA,oCAAA,CACA,mCAAA,CACA,qBAAA",sourcesContent:[":root {\r\n  /* palette */\r\n  --dark: #282b28;\r\n  --dark-green: #3e5641;\r\n  --dark-brown: #a24936;\r\n  --dark-orange: #d36135;\r\n  --dark-lightblue: #83bca9;\r\n\r\n  --danger: rgb(230, 20, 20);\r\n  --alert: tomato;\r\n\r\n  --large: clamp(2rem, 4vw , 8rem);\r\n  --large-medium: clamp(1rem, 2vw, 4rem);\r\n  --medium: clamp(0.5rem, 1.7vw, 3rem);\r\n  --small:  clamp(0.2rem, 1.5vw, 3rem);\r\n  --extra-small: 0.7rem;\r\n}\r\n"],sourceRoot:""}]);const s=a},38:(r,n,e)=>{e.d(n,{Z:()=>s});var t=e(559),o=e.n(t),i=e(476),a=e.n(i)()(o());a.push([r.id,'/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\nhtml {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the margin in all browsers.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Render the `main` element consistently in IE.\r\n */\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\npre {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput {\r\n  /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect {\r\n  /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n\r\nbutton,\r\n[type="button"],\r\n[type="reset"],\r\n[type="submit"] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type="button"]::-moz-focus-inner,\r\n[type="reset"]::-moz-focus-inner,\r\n[type="submit"]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type="button"]:-moz-focusring,\r\n[type="reset"]:-moz-focusring,\r\n[type="submit"]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Correct the padding in Firefox.\r\n */\r\n\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n\r\n[type="checkbox"],\r\n[type="radio"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type="number"]::-webkit-inner-spin-button,\r\n[type="number"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type="search"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n\r\n[type="search"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\n\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n',"",{version:3,sources:["webpack://./../styles/normalize.css"],names:[],mappings:"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;;EAEE,MAAM;EACN,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;;EAEE,MAAM;EACN,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf",sourcesContent:['/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\r\n\r\n/* Document\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Correct the line height in all browsers.\r\n * 2. Prevent adjustments of font size after orientation changes in iOS.\r\n */\r\n\r\nhtml {\r\n  line-height: 1.15; /* 1 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/* Sections\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the margin in all browsers.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/**\r\n * Render the `main` element consistently in IE.\r\n */\r\n\r\nmain {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * Correct the font size and margin on `h1` elements within `section` and\r\n * `article` contexts in Chrome, Firefox, and Safari.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Add the correct box sizing in Firefox.\r\n * 2. Show the overflow in Edge and IE.\r\n */\r\n\r\nhr {\r\n  box-sizing: content-box; /* 1 */\r\n  height: 0; /* 1 */\r\n  overflow: visible; /* 2 */\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\npre {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background on active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * 1. Remove the bottom border in Chrome 57-\r\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: none; /* 1 */\r\n  text-decoration: underline; /* 2 */\r\n  text-decoration: underline dotted; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font weight in Chrome, Edge, and Safari.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bolder;\r\n}\r\n\r\n/**\r\n * 1. Correct the inheritance and scaling of font size in all browsers.\r\n * 2. Correct the odd `em` font sizing in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\nsamp {\r\n  font-family: monospace, monospace; /* 1 */\r\n  font-size: 1em; /* 2 */\r\n}\r\n\r\n/**\r\n * Add the correct font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` elements from affecting the line height in\r\n * all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the border on images inside links in IE 10.\r\n */\r\n\r\nimg {\r\n  border-style: none;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * 1. Change the font styles in all browsers.\r\n * 2. Remove the margin in Firefox and Safari.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  font-family: inherit; /* 1 */\r\n  font-size: 100%; /* 1 */\r\n  line-height: 1.15; /* 1 */\r\n  margin: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Show the overflow in IE.\r\n * 1. Show the overflow in Edge.\r\n */\r\n\r\nbutton,\r\ninput {\r\n  /* 1 */\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\r\n * 1. Remove the inheritance of text transform in Firefox.\r\n */\r\n\r\nbutton,\r\nselect {\r\n  /* 1 */\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * Correct the inability to style clickable types in iOS and Safari.\r\n */\r\n\r\nbutton,\r\n[type="button"],\r\n[type="reset"],\r\n[type="submit"] {\r\n  -webkit-appearance: button;\r\n}\r\n\r\n/**\r\n * Remove the inner border and padding in Firefox.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\n[type="button"]::-moz-focus-inner,\r\n[type="reset"]::-moz-focus-inner,\r\n[type="submit"]::-moz-focus-inner {\r\n  border-style: none;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Restore the focus styles unset by the previous rule.\r\n */\r\n\r\nbutton:-moz-focusring,\r\n[type="button"]:-moz-focusring,\r\n[type="reset"]:-moz-focusring,\r\n[type="submit"]:-moz-focusring {\r\n  outline: 1px dotted ButtonText;\r\n}\r\n\r\n/**\r\n * Correct the padding in Firefox.\r\n */\r\n\r\nfieldset {\r\n  padding: 0.35em 0.75em 0.625em;\r\n}\r\n\r\n/**\r\n * 1. Correct the text wrapping in Edge and IE.\r\n * 2. Correct the color inheritance from `fieldset` elements in IE.\r\n * 3. Remove the padding so developers are not caught out when they zero out\r\n *    `fieldset` elements in all browsers.\r\n */\r\n\r\nlegend {\r\n  box-sizing: border-box; /* 1 */\r\n  color: inherit; /* 2 */\r\n  display: table; /* 1 */\r\n  max-width: 100%; /* 1 */\r\n  padding: 0; /* 3 */\r\n  white-space: normal; /* 1 */\r\n}\r\n\r\n/**\r\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\r\n */\r\n\r\nprogress {\r\n  vertical-align: baseline;\r\n}\r\n\r\n/**\r\n * Remove the default vertical scrollbar in IE 10+.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * 1. Add the correct box sizing in IE 10.\r\n * 2. Remove the padding in IE 10.\r\n */\r\n\r\n[type="checkbox"],\r\n[type="radio"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Correct the cursor style of increment and decrement buttons in Chrome.\r\n */\r\n\r\n[type="number"]::-webkit-inner-spin-button,\r\n[type="number"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Correct the odd appearance in Chrome and Safari.\r\n * 2. Correct the outline style in Safari.\r\n */\r\n\r\n[type="search"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  outline-offset: -2px; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove the inner padding in Chrome and Safari on macOS.\r\n */\r\n\r\n[type="search"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * 1. Correct the inability to style clickable types in iOS and Safari.\r\n * 2. Change font properties to `inherit` in Safari.\r\n */\r\n\r\n::-webkit-file-upload-button {\r\n  -webkit-appearance: button; /* 1 */\r\n  font: inherit; /* 2 */\r\n}\r\n\r\n/* Interactive\r\n   ========================================================================== */\r\n\r\n/*\r\n * Add the correct display in Edge, IE 10+, and Firefox.\r\n */\r\n\r\ndetails {\r\n  display: block;\r\n}\r\n\r\n/*\r\n * Add the correct display in all browsers.\r\n */\r\n\r\nsummary {\r\n  display: list-item;\r\n}\r\n\r\n/* Misc\r\n   ========================================================================== */\r\n\r\n/**\r\n * Add the correct display in IE 10+.\r\n */\r\n\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/**\r\n * Add the correct display in IE 10.\r\n */\r\n\r\n[hidden] {\r\n  display: none;\r\n}\r\n'],sourceRoot:""}]);const s=a},777:(r,n,e)=>{var t=e(767),o=e(840),i=e(892),a=e.n(i),s=e(760),l=e.n(s),A=e(311),c=e.n(A),d=e(192),p=e.n(d),b=e(60),E=e.n(b),m=e(865),u=e.n(m),f=e(94),h={};h.styleTagTransform=u(),h.setAttributes=p(),h.insert=c().bind(null,"head"),h.domAPI=l(),h.insertStyleElement=E(),a()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals,e.p;const g=t.iv`
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
`,v=t.iv`
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
`;var y=function(r,n,e,t){var o,i=arguments.length,a=i<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(r,n,e,t);else for(var s=r.length-1;s>=0;s--)(o=r[s])&&(a=(i<3?o(a):i>3?o(n,e,a):o(n,e))||a);return i>3&&a&&Object.defineProperty(n,e,a),a};let C=class extends t.oi{render(){return t.dy`<slot></slot>`}};C.styles=[v],y([(0,o.Cb)({type:String})],C.prototype,"nameid",void 0),C=y([(0,o.Mo)("model-sheet")],C);var x=e(897),w=e(451),B={};B.styleTagTransform=u(),B.setAttributes=p(),B.insert=c().bind(null,"head"),B.domAPI=l(),B.insertStyleElement=E(),a()(w.Z,B),w.Z&&w.Z.locals&&w.Z.locals;const k=t.iv`
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
`;var _=function(r,n,e,t){var o,i=arguments.length,a=i<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(r,n,e,t);else for(var s=r.length-1;s>=0;s--)(o=r[s])&&(a=(i<3?o(a):i>3?o(n,e,a):o(n,e))||a);return i>3&&a&&Object.defineProperty(n,e,a),a};let z=class extends t.oi{constructor(){super(...arguments),this.titleCase="Case I: Abby",this._todos=["What's his name?","What's his address?","Where is the baby's father?","Why did he disappear?"]}render(){return t.dy`
      <div class="case-container">
        <h1 class="case__title">${this.titleCase}</h1>
        <div class="case__list">${(0,x.U)(this._todos,(r=>t.dy`<li class="li-template">${r}</li>`))}</div>
      </div>
    `}};z.styles=[k],_([(0,o.Cb)()],z.prototype,"titleCase",void 0),z=_([(0,o.Mo)("case-tab")],z);let M=class extends t.oi{render(){return t.dy`
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
    `}};M.styles=[],M=function(r,n,e,t){var o,i=arguments.length,a=i<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(r,n,e,t);else for(var s=r.length-1;s>=0;s--)(o=r[s])&&(a=(i<3?o(a):i>3?o(n,e,a):o(n,e))||a);return i>3&&a&&Object.defineProperty(n,e,a),a}([(0,o.Mo)("leads-tab")],M);const S=e.p+"hints.png",R=t.iv`
  @import url("../variables.css");

  .settings-container {
    display: flex;
    flex-direction: column; 
    height: 100%;
    place-content: center;
    gap: 0.5rem;
  }
  .settings__title {
    font-size: var(--large);
  }
  .settings__user {
    align-self: center;
    font-size: var(--small);  
  }
  .settings__buttons-container {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: space-between;
    gap: 0.5rem;
  }
  button {
    display: block;
    font-family: voxabular-font;
    font-size: var(--medium);
    width: 100%;
    padding: 0.1rem;
    transition: 0.2s;
  }
  button:hover {
    box-shadow: 0 2px 6px 1px gray;
  }
  button:active {
    box-shadow: 0 0px 4px 4px white;
    transform: translateY(1px);
  }
  .settings__hints{
    position: absolute;
    z-index: 2; 
    height: 0;
  }
  .settings__hints-img {
    max-width: 15rem;
    transform:  translateX(-14rem) rotateZ(-100deg);
  }
  .settings__volume {
    align-self: center;
    margin-bottom: 0.5rem;
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
  .erase-footer {
    /* border:1px solid red; */
    /* margin-top: 0.5rem; */
  }
  .erase-footer button:hover {
    background-color: var(--alert);
  }
`;var F=function(r,n,e,t){var o,i=arguments.length,a=i<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(r,n,e,t);else for(var s=r.length-1;s>=0;s--)(o=r[s])&&(a=(i<3?o(a):i>3?o(n,e,a):o(n,e))||a);return i>3&&a&&Object.defineProperty(n,e,a),a};let O=class extends t.oi{constructor(){super(...arguments),this.userid=+new Date}render(){return t.dy`
      <div class="settings-container">
        <div class="settings__title">Change language</div>
        <div class="settings__buttons-container">
          <button>Hablo español y quiero hablar inglés</button>
          <button>I speak English and want to learn Spanish</button>
          <button>Sólo quiero jugar en Español</button>
          <button>I just want to play in English</button>
        </div>
        <div class="settings__user">User:${this.userid}</div>
        <span class="settings__hints">
          <img class="settings__hints-img" src=${S} />
        </span>
        <div class="settings__volume">
          <div>Music Volume</div>
          <input class="range" id="range" type="range" min="1" max="100" />
        </div>
        <div class="erase-footer">
          <button>Erase and Restart</button>
        </div>
      </div>
    `}};O.styles=[R],F([(0,o.Cb)()],O.prototype,"userid",void 0),O=F([(0,o.Mo)("settings-tab")],O);const I=t.iv`
  @import url("./variables.css");

  .suscribe-container {
    display: flex;
    flex-direction: column;
    place-content: center;
    height: 100%;
    gap: 2rem;
  }
  .suscribe__title {
    align-self: center;
    font-size: var(--large);
  }
  .suscribe__contact {
    align-self: center;
  }
  .suscribe__contact-lbl {
    font-size: var(--medium);
    margin: 2rem;
  }
  .suscribe__input {
    font-family: voxabular-font;
    font-size: var(--medium);
    border-radius: 3px;
    border: none;
    padding: 0.5rem;
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
  .suscribe__anchors {
    font-size: var(--medium);
  }
`;let j=class extends t.oi{render(){return t.dy`
      <div class="suscribe-container">
        <div class="suscribe__title">Thank you for suscribe!🖤</div>
        <div class="suscribe__contact">
          <div class="suscribe__contact-lbl">Keep updated:</div>
          <input class="suscribe__input" type="email" placeholder="Your email here :)" />
        </div>

        <div class="suscribe__anchors">
          <div>To make sure you get our messages</div>
          <a>Please add us to your address book</a>
          <a>Manage my subscription 📩</a>
        </div>
      </div>
    `}};j.styles=[I],j=function(r,n,e,t){var o,i=arguments.length,a=i<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(r,n,e,t);else for(var s=r.length-1;s>=0;s--)(o=r[s])&&(a=(i<3?o(a):i>3?o(n,e,a):o(n,e))||a);return i>3&&a&&Object.defineProperty(n,e,a),a}([(0,o.Mo)("suscribe-tab")],j);const P=e.p+"vox.png",G=t.iv`
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
    transform: scale(1.5);
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
`;var Z=function(r,n,e,t){var o,i=arguments.length,a=i<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(r,n,e,t);else for(var s=r.length-1;s>=0;s--)(o=r[s])&&(a=(i<3?o(a):i>3?o(n,e,a):o(n,e))||a);return i>3&&a&&Object.defineProperty(n,e,a),a};let T=class extends t.oi{constructor(){super(...arguments),this._todos=["Excellent","Good","Miss","Hints","Study words used"],this.rotation=!1}render(){return t.dy`
      <div class="vocabulary-container">
        <div class="vocabulary__sign">
          <h1>A Countryside Drive</h1>
          <div class="list-items">${(0,x.U)(this._todos,(r=>t.dy`<li class="li-template">${r}</li>`))}</div>
        </div>
        <div class="vocabulary__cards-container">
          <card-element class="c-1" titlecard="Exit the car"></card-element>
          <card-element class="c-2" titlecard="Stop the bus"></card-element>
          <card-element class="c-3" titlecard="Please Help!!!"></card-element>
        </div>
      </div>
    `}};T.styles=[G],Z([(0,o.SB)()],T.prototype,"rotation",void 0),T=Z([(0,o.Mo)("vocabulary-tab")],T);let $=class extends t.oi{constructor(){super(...arguments),this.rotation=!1,this.titlecard=""}render(){return t.dy`
      <div
        class="card ${this.rotation?"rotation":""}"
        @click=${()=>this.rotation=!this.rotation}
      >
        <img class="card__img" src=${P} />
        <div class="card__footer">
          <p class="card__footer-title">${this.titlecard}</p>
          <p class="card__footer-expresion">Expression</p>
        </div>
      </div>
    `}};$.styles=[G],Z([(0,o.SB)()],$.prototype,"rotation",void 0),Z([(0,o.Cb)()],$.prototype,"titlecard",void 0),$=Z([(0,o.Mo)("card-element")],$);var D=function(r,n,e,t){var o,i=arguments.length,a=i<3?n:null===t?t=Object.getOwnPropertyDescriptor(n,e):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(r,n,e,t);else for(var s=r.length-1;s>=0;s--)(o=r[s])&&(a=(i<3?o(a):i>3?o(n,e,a):o(n,e))||a);return i>3&&a&&Object.defineProperty(n,e,a),a};const U={case:t.dy`<case-tab></case-tab>`,vocabulary:t.dy`<vocabulary-tab></vocabulary-tab> `,settings:t.dy`<settings-tab></settings-tab> `,suscribe:t.dy`<suscribe-tab></suscribe-tab>`},W=Object.keys(U);let Y=class extends t.oi{constructor(){super(...arguments),this.tabSelected="settings"}setTabState(r){this.tabSelected=r}render(){return t.dy`
      <div class="container">
        <div class="button-tabs">${W.map((r=>t.dy`<button
        class=${this.tabSelected===r?"active-tabs":"tabs"}
        @click=${()=>this.setTabState(r)} >
        ${r}
      </button>`))}</div>
        <model-sheet> ${U[this.tabSelected]} </model-sheet>
      </div>
    `}};Y.styles=[g],D([(0,o.SB)()],Y.prototype,"tabSelected",void 0),Y=D([(0,o.Mo)("lit-notebook")],Y)},458:(r,n,e)=>{r.exports=e.p+"BohemianTypewriter.ttf"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.m=n,r=[],t.O=(n,e,o,i)=>{if(!e){var a=1/0;for(c=0;c<r.length;c++){for(var[e,o,i]=r[c],s=!0,l=0;l<e.length;l++)(!1&i||a>=i)&&Object.keys(t.O).every((r=>t.O[r](e[l])))?e.splice(l--,1):(s=!1,i<a&&(a=i));if(s){r.splice(c--,1);var A=o();void 0!==A&&(n=A)}}return n}i=i||0;for(var c=r.length;c>0&&r[c-1][2]>i;c--)r[c]=r[c-1];r[c]=[e,o,i]},t.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return t.d(n,{a:n}),n},t.d=(r,n)=>{for(var e in n)t.o(n,e)&&!t.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},t.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),t.p="",(()=>{t.b=document.baseURI||self.location.href;var r={179:0};t.O.j=n=>0===r[n];var n=(n,e)=>{var o,i,[a,s,l]=e,A=0;if(a.some((n=>0!==r[n]))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(l)var c=l(t)}for(n&&n(e);A<a.length;A++)i=a[A],t.o(r,i)&&r[i]&&r[i][0](),r[i]=0;return t.O(c)},e=self.webpackChunk=self.webpackChunk||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))})(),t.nc=void 0;var o=t.O(void 0,[762],(()=>t(777)));o=t.O(o)})();
//# sourceMappingURL=main.8c61458dbc8fd8672e47.js.map