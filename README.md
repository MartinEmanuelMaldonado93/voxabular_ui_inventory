# Lit + Sass ✨

Since Lit uses shadow-dom to encapsulate styles for more modular web-components, that is every component has your own "scope" of styles separate from the main dom(html), 
I considered the following schema to include the most important styles:

HTML(css): 
* Global file

Web-Components(scss):
* Shared styles.
* Component style.

		src/
		├── components/
		│   ├── component_01.ts
		│	  ├── component_02.ts ...
		│    
		└── styles/
			├── _shared.scss
			├── component_01.scss
			├── component_02.scss ...
			└── Global.css

**Global.css** : We could include some fonts, variables and "normalize.css" to change the default behavior of the browsers, but we can't do much more because the web-components encapsulation.
The file would be include in tag format in html head 

**_shared.scss** : The sass partial file contain variables in common, they are able in the css format "--my-var: 30px;" and scss "$myVariable", also all the features
like mixins, functions, etc.

_________________

## Why Sass ?
First of all Sass its a super set of css, wich includes
_nesting, functions, mixins, loops, namespaces, etc._
and its compatible with css syntax too, so if you are comfortable
with that syntax you can use whenever you want.

I also added **_Post-css_** to the list with **_Autoprefixer_**
to make all the functionalities of the last css features
available in as many browsers as possible. 

The **webpack** configuration would work something like this:

Example:
#### _styleOfMyComponent.scss_

``` 
.container {
	&__title{
		font-size: Shared.$fs-small;
	}
}
::placeholder {
  color: gray;
} 
.image {
  background-image: url(image@1x.png);
}
@media (min-resolution: 2dppx) {
  .image {
    background-image: url(image@2x.png);
  }
}
```
#### styleOfMyComponent.scss >> *[SASS-LOADER]* output:
``` 
				styleOfMyComponent.css

.container {
	//....
}
.container__title{
	font-size: 28px;
}
::placeholder {
  color: gray;
} 
.image {
  background-image: url(image@1x.png);
}
@media (min-resolution: 2dppx) {
  .image {
    background-image: url(image@2x.png);
  }
}
```
#### styleOfMyComponent.css >> *[POST-CSS]* output:
``` 
				styleOfMyComponent.css

.container {
	//....
}
.container__title{
	font-size: 28px;
}
::-moz-placeholder {
  color: gray;
}
::placeholder {
  color: gray;
}
.image {
  background-image: url(image@1x.png);
}
@media (-webkit-min-device-pixel-ratio: 2),
       (min-resolution: 2dppx) {
  .image {
    background-image: url(image@2x.png);
  }
}
```
#### styleOfMyComponent.css >> *[LIT-LOADER]* output:
```
				styleOfMyComponent.ts 

import {css} from 'lit';
export const styles = css`
.container {
	//....
}
.container__title{
	font-size: 28px;
}
::-moz-placeholder {
  color: gray;
}
::placeholder {
  color: gray;
}

.image {
 	//....
}
`;
export default styles;
```
#### styleOfMyComponent.ts 

```
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "../styles/styleOfMyComponent.ts;

```
..... that's it ! ✅

